import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpErrorResponse } from '@angular/common/http';
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
  private probeSequence = 0;
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

    if (Network) {
      Network.addListener('networkStatusChange', (status) => {
        this.conexion = status;
        this.conectividad = status.connected;
        this.evaluateStatus(status);
      });
    }

    setInterval(() => this.checkConnection(), this.probeIntervalMs);
  }

  checkConnection() {
    if (!Network) {
      this.conectividad = false;
      this.setOffline();
      return;
    }

    Network.getStatus().then((status) => {
      this.conexion = status;
      this.conectividad = status.connected;
      this.evaluateStatus(status);
    });
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
    const sequence = ++this.probeSequence;
    const startedAt = Date.now();
    const url = `${this.probeUrl}?connectivityCheck=${startedAt}`;

    this.http.get(url, { observe: 'response', responseType: 'text' }).pipe(
      timeout(this.timeoutMs),
      catchError((error: HttpErrorResponse) => of(error))
    ).subscribe((result: any) => {
      if (sequence !== this.probeSequence) {
        return;
      }

      const latencyMs = Date.now() - startedAt;

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
