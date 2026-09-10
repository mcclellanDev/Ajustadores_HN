import { HTTP_INTERCEPTORS, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HTTP_TIMEOUT_DEFAULT_MS, NETWORK_TIMEOUT_MESSAGE } from '../utils/http-network.util';
import { HttpTimeoutInterceptor } from './http-timeout.interceptor';

describe('HttpTimeoutInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpTimeoutInterceptor, multi: true }
      ]
    });
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('stops a hanging request instead of leaving the spinner open', fakeAsync(() => {
    let captured: HttpErrorResponse | null = null;
    http.get('https://portal/api/Proveedor/ObtenercacheCliente').subscribe({
      next: () => fail('timeout must not succeed'),
      error: (error) => {
        captured = error;
      }
    });

    const pending = httpMock.expectOne('https://portal/api/Proveedor/ObtenercacheCliente');
    tick(HTTP_TIMEOUT_DEFAULT_MS);

    expect(captured).toBeTruthy();
    expect(captured?.status).toBe(0);
    expect(captured?.error.Message).toBe(NETWORK_TIMEOUT_MESSAGE);
    if (!pending.cancelled) {
      pending.flush({});
    }
  }));
});
