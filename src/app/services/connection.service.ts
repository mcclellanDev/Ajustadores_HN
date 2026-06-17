import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Capacitor, CapacitorHttp } from '@capacitor/core';
import { App } from '@capacitor/app';
import { Network, ConnectionStatus } from '@capacitor/network';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export type ConnectionQuality = 'checking' | 'online' | 'slow' | 'offline';

export interface AppConnectionStatus {
  connected: boolean;
  quality: ConnectionQuality;
  message: string;
  latencyMs?: number;
  connectionType?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  conectividad: boolean | undefined;
  conexion: ConnectionStatus | undefined;

  private readonly slowThresholdMs = 3500;
  private readonly timeoutMs = 8000;
  private readonly probeIntervalMs = 30000;
  private readonly probeUrl = environment.api_url;
  private monitorStarted = false;
  private appIsActive = true;
  private probeIntervalId: ReturnType<typeof setInterval> | null = null;
  private probeSequence = 0;
  /** Used by unit tests to exercise the HttpClient probe path in jsdom. */
  forceHttpProbe = false;
  private statusSubject = new BehaviorSubject<AppConnectionStatus>({
    connected: true,
    quality: 'checking',
    message: 'Verificando conexion...'
  });

  status$ = this.statusSubject.asObservable();

  private http: HttpClient;

  constructor(httpBackend: HttpBackend) {
    this.http = new HttpClient(httpBackend);
  }

  startMonitoring() {
    if (this.monitorStarted) {
      return;
    }

    this.monitorStarted = true;
    this.checkConnection();

    this.probeIntervalId = setInterval(() => {
      if (this.appIsActive) {
        this.checkConnection();
      }
    }, this.probeIntervalMs);

    if (Network) {
      Network.addListener('networkStatusChange', (status) => {
        this.conexion = status;
        this.conectividad = status.connected;
        if (this.appIsActive) {
          this.evaluateStatus(status);
        }
      });
    }

    if (Capacitor.isPluginAvailable('App')) {
      App.addListener('appStateChange', ({ isActive }) => {
        this.appIsActive = isActive;
        if (isActive) {
          this.checkConnection();
        }
      });
    }
  }

  stopMonitoring() {
    if (this.probeIntervalId) {
      clearInterval(this.probeIntervalId);
      this.probeIntervalId = null;
    }
    this.monitorStarted = false;
  }

  checkConnection() {
    if (!this.appIsActive) {
      return;
    }

    if (!Network) {
      this.conectividad = false;
      this.setOffline();
      return;
    }

    Network.getStatus().then((status) => {
      if (!this.appIsActive) {
        return;
      }

      this.conexion = status;
      this.conectividad = status.connected;
      this.evaluateStatus(status);
    });
  }

  private shouldRunBackendProbe(): boolean {
    if (!this.appIsActive) {
      return false;
    }

    if (this.forceHttpProbe) {
      return true;
    }

    // Browser dev (ionic serve) cannot call the production API without CORS headers.
    return Capacitor.isNativePlatform();
  }

  private evaluateStatus(status: ConnectionStatus) {
    if (!status.connected) {
      this.probeSequence++;
      this.setOffline(status.connectionType);
      return;
    }

    this.setOnline(status.connectionType);
    this.probeBackend(status.connectionType);
  }

  private probeBackend(connectionType?: string) {
    if (!this.shouldRunBackendProbe()) {
      return;
    }

    const sequence = ++this.probeSequence;
    const startedAt = Date.now();
    const url = `${this.probeUrl}?connectivityCheck=${startedAt}`;

    if (Capacitor.isNativePlatform() && !this.forceHttpProbe) {
      void this.probeBackendWithCapacitorHttp(url, sequence, startedAt, connectionType);
      return;
    }

    this.http.get(url, { observe: 'response', responseType: 'text' }).pipe(
      timeout(this.timeoutMs),
      catchError((error: HttpErrorResponse) => of(error))
    ).subscribe((result: any) => {
      if (sequence !== this.probeSequence) {
        return;
      }

      const latencyMs = Date.now() - startedAt;
      this.applyProbeResult(result, latencyMs, connectionType);
    });
  }

  private async probeBackendWithCapacitorHttp(
    url: string,
    sequence: number,
    startedAt: number,
    connectionType?: string
  ) {
    try {
      await CapacitorHttp.get({
        url,
        connectTimeout: this.timeoutMs,
        readTimeout: this.timeoutMs
      });

      if (sequence !== this.probeSequence) {
        return;
      }

      this.applyProbeResult(null, Date.now() - startedAt, connectionType);
    } catch {
      if (sequence !== this.probeSequence) {
        return;
      }

      this.setOnline(connectionType);
    }
  }

  private applyProbeResult(result: any, latencyMs: number, connectionType?: string) {
    if (result instanceof HttpErrorResponse && result.status === 0) {
      this.setOnline(connectionType);
      return;
    }

    if (latencyMs >= this.slowThresholdMs) {
      this.statusSubject.next({
        connected: true,
        quality: 'slow',
        message: `Conexion lenta (${latencyMs} ms)`,
        latencyMs,
        connectionType
      });
      return;
    }

    this.statusSubject.next({
      connected: true,
      quality: 'online',
      message: `Conectado (${latencyMs} ms)`,
      latencyMs,
      connectionType
    });
  }

  private setOffline(connectionType?: string) {
    this.statusSubject.next({
      connected: false,
      quality: 'offline',
      message: 'Sin conexion a internet',
      connectionType
    });
  }

  private setOnline(connectionType?: string) {
    this.statusSubject.next({
      connected: true,
      quality: 'online',
      message: 'Conectado',
      connectionType
    });
  }
}
