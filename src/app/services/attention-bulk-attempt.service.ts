import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

export interface AttentionBulkAttempt {
  idAtencion: number;
  attemptCount: number;
  failureCount: number;
  lastAttemptAt: string;
  lastFailureAt?: string;
  lastSuccessAt?: string;
  lastError?: string;
  pendingFailure: boolean;
}

const STORAGE_KEY = 'ATTENTION_BULK_ATTEMPTS';

@Injectable({
  providedIn: 'root'
})
export class AttentionBulkAttemptService {
  private cache: Record<string, AttentionBulkAttempt> | null = null;

  async getAttempt(idAtencion: number): Promise<AttentionBulkAttempt | null> {
    const records = await this.loadRecords();
    return records[this.normalizeId(idAtencion)] ?? null;
  }

  async getAllAttempts(): Promise<Record<string, AttentionBulkAttempt>> {
    return this.loadRecords();
  }

  async recordAttemptStart(idAtencion: number): Promise<AttentionBulkAttempt> {
    const records = await this.loadRecords();
    const key = this.normalizeId(idAtencion);
    const existing = records[key];
    const now = new Date().toISOString();
    const next: AttentionBulkAttempt = {
      idAtencion: Number(idAtencion),
      attemptCount: (existing?.attemptCount ?? 0) + 1,
      failureCount: existing?.failureCount ?? 0,
      lastAttemptAt: now,
      lastFailureAt: existing?.lastFailureAt,
      lastSuccessAt: existing?.lastSuccessAt,
      lastError: existing?.lastError,
      pendingFailure: existing?.pendingFailure ?? false
    };

    records[key] = next;
    await this.persistRecords(records);
    return next;
  }

  async recordFailure(idAtencion: number, errorMessage?: string): Promise<AttentionBulkAttempt> {
    const records = await this.loadRecords();
    const key = this.normalizeId(idAtencion);
    const existing = records[key];
    const now = new Date().toISOString();
    const next: AttentionBulkAttempt = {
      idAtencion: Number(idAtencion),
      attemptCount: existing?.attemptCount ?? 1,
      failureCount: (existing?.failureCount ?? 0) + 1,
      lastAttemptAt: existing?.lastAttemptAt ?? now,
      lastFailureAt: now,
      lastSuccessAt: existing?.lastSuccessAt,
      lastError: errorMessage?.trim() || existing?.lastError,
      pendingFailure: true
    };

    records[key] = next;
    await this.persistRecords(records);
    return next;
  }

  async recordSuccess(idAtencion: number): Promise<AttentionBulkAttempt> {
    const records = await this.loadRecords();
    const key = this.normalizeId(idAtencion);
    const existing = records[key];
    const now = new Date().toISOString();
    const next: AttentionBulkAttempt = {
      idAtencion: Number(idAtencion),
      attemptCount: existing?.attemptCount ?? 1,
      failureCount: existing?.failureCount ?? 0,
      lastAttemptAt: existing?.lastAttemptAt ?? now,
      lastFailureAt: existing?.lastFailureAt,
      lastSuccessAt: now,
      lastError: undefined,
      pendingFailure: false
    };

    records[key] = next;
    await this.persistRecords(records);
    return next;
  }

  hasVisibleIssue(record: AttentionBulkAttempt | null | undefined): boolean {
    if (!record) {
      return false;
    }

    return record.pendingFailure || record.failureCount > 0 || record.attemptCount > 1;
  }

  getAttemptLabel(record: AttentionBulkAttempt | null | undefined): string {
    if (!record?.attemptCount) {
      return '';
    }

    return record.attemptCount === 1 ? '1 intento' : `${record.attemptCount} intentos`;
  }

  private async loadRecords(): Promise<Record<string, AttentionBulkAttempt>> {
    if (this.cache) {
      return this.cache;
    }

    const stored = await Preferences.get({ key: STORAGE_KEY });
    if (!stored?.value) {
      this.cache = {};
      return this.cache;
    }

    try {
      const parsed = JSON.parse(stored.value);
      this.cache = parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
      this.cache = {};
    }

    return this.cache;
  }

  private async persistRecords(records: Record<string, AttentionBulkAttempt>): Promise<void> {
    this.cache = records;
    await Preferences.set({
      key: STORAGE_KEY,
      value: JSON.stringify(records)
    });
  }

  private normalizeId(idAtencion: number | string): string {
    return Number(idAtencion).toString();
  }
}
