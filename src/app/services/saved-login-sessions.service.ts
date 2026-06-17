import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';

export interface SavedLoginSession {
  email: string;
  displayName?: string;
  lastUsed: string;
}

const RECENT_LOGIN_SESSIONS_KEY = 'RECENT_LOGIN_SESSIONS';
const MAX_SAVED_SESSIONS = 5;

@Injectable({
  providedIn: 'root'
})
export class SavedLoginSessionsService {
  async loadSessions(): Promise<SavedLoginSession[]> {
    const stored = await Preferences.get({ key: RECENT_LOGIN_SESSIONS_KEY });
    let sessions: SavedLoginSession[] = [];

    if (stored?.value) {
      try {
        const parsed = JSON.parse(stored.value);
        if (Array.isArray(parsed)) {
          sessions = parsed.filter((item) => item?.email);
        }
      } catch {
        sessions = [];
      }
    }

    if (sessions.length === 0) {
      sessions = await this.importLegacyPrimarySession();
    }

    return sessions.sort(
      (a, b) => new Date(b.lastUsed).getTime() - new Date(a.lastUsed).getTime()
    );
  }

  async saveSession(email: string, password: string, displayName?: string): Promise<void> {
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password) {
      return;
    }

    const normalizedEmail = trimmedEmail.toLowerCase();
    let sessions = await this.loadSessions();
    sessions = sessions.filter((session) => session.email.toLowerCase() !== normalizedEmail);

    sessions.unshift({
      email: trimmedEmail,
      displayName: displayName?.trim() || undefined,
      lastUsed: new Date().toISOString()
    });

    sessions = sessions.slice(0, MAX_SAVED_SESSIONS);

    await Preferences.set({
      key: RECENT_LOGIN_SESSIONS_KEY,
      value: JSON.stringify(sessions)
    });

    await SecureStoragePlugin.set({
      key: this.passwordStorageKey(trimmedEmail),
      value: password
    });

    await this.syncPrimaryCredentials(trimmedEmail, password);
  }

  async getPassword(email: string): Promise<string> {
    try {
      const result = await SecureStoragePlugin.get({
        key: this.passwordStorageKey(email)
      });
      return result?.value || '';
    } catch {
      return '';
    }
  }

  async syncPrimaryCredentials(email: string, password: string): Promise<void> {
    await SecureStoragePlugin.set({ key: 'User', value: email.trim() });
    await SecureStoragePlugin.set({ key: 'Password', value: password });
    localStorage.setItem('correoActual', email.trim());
    localStorage.setItem('passwordActual', password);
  }

  async removeSession(email: string): Promise<void> {
    const normalizedEmail = email.trim().toLowerCase();
    const sessions = (await this.loadSessions()).filter(
      (session) => session.email.toLowerCase() !== normalizedEmail
    );

    await Preferences.set({
      key: RECENT_LOGIN_SESSIONS_KEY,
      value: JSON.stringify(sessions)
    });

    try {
      await SecureStoragePlugin.remove({
        key: this.passwordStorageKey(email)
      });
    } catch {
      // Ignore missing secure entries.
    }
  }

  private async importLegacyPrimarySession(): Promise<SavedLoginSession[]> {
    try {
      const userResult = await SecureStoragePlugin.get({ key: 'User' });
      const email = userResult?.value?.trim();

      if (!email) {
        return [];
      }

      const password = await this.readLegacyPassword();
      if (!password) {
        return [{
          email,
          lastUsed: new Date().toISOString()
        }];
      }

      await SecureStoragePlugin.set({
        key: this.passwordStorageKey(email),
        value: password
      });

      const session: SavedLoginSession = {
        email,
        lastUsed: new Date().toISOString()
      };

      await Preferences.set({
        key: RECENT_LOGIN_SESSIONS_KEY,
        value: JSON.stringify([session])
      });

      return [session];
    } catch {
      return [];
    }
  }

  private async readLegacyPassword(): Promise<string> {
    try {
      const passwordResult = await SecureStoragePlugin.get({ key: 'Password' });
      return passwordResult?.value || '';
    } catch {
      return localStorage.getItem('passwordActual') || '';
    }
  }

  private passwordStorageKey(email: string): string {
    const normalized = email.trim().toLowerCase().replace(/[^a-z0-9]/g, '_');
    return `login_pwd_${normalized}`;
  }
}
