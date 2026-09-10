import { HTTP_INTERCEPTORS, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService } from '../services/api.service';
import { NETWORK_NO_RESPONSE_MESSAGE, SESSION_EXPIRED_MESSAGE } from '../utils/http-network.util';
import { JwtInterceptor } from './jwt.interceptor';

describe('JwtInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let api: { currentAccessToken: string; whiteList: string[]; refreshSessionSilently: jasmine.Spy };

  beforeEach(() => {
    api = {
      currentAccessToken: 'token-1',
      whiteList: [],
      refreshSessionSilently: jasmine.createSpy('refreshSessionSilently')
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: ApiService, useValue: api }
      ]
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('does not treat status 0 as a session refresh', (done) => {
    http.post('https://portal/api/Proveedor/GuardarInformeSiniestros_HN', {}).subscribe({
      next: () => fail('status 0 must not look like success'),
      error: (error: HttpErrorResponse) => {
        expect(api.refreshSessionSilently).not.toHaveBeenCalled();
        expect(error.status).toBe(0);
        expect(error.error.Message).toBe(NETWORK_NO_RESPONSE_MESSAGE);
        done();
      }
    });

    httpMock.expectOne('https://portal/api/Proveedor/GuardarInformeSiniestros_HN')
      .error(new ProgressEvent('error'));
  });

  it('throws a visible session error when silent refresh fails', (done) => {
    api.refreshSessionSilently.and.resolveTo(false);

    http.post('https://portal/api/FicohsaHN/Carga_Reclamo_Sinau_BPM_Fico', {}).subscribe({
      next: () => fail('failed refresh must not look like success'),
      error: (error: HttpErrorResponse) => {
        expect(error.status).toBe(401);
        expect(error.error.Message).toBe(SESSION_EXPIRED_MESSAGE);
        done();
      }
    });

    httpMock.expectOne('https://portal/api/FicohsaHN/Carga_Reclamo_Sinau_BPM_Fico')
      .flush({ Message: 'expired' }, { status: 401, statusText: 'Unauthorized' });
  });
});
