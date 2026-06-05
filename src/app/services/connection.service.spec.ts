import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppConnectionStatus, ConnectionService } from './connection.service';

describe('ConnectionService', () => {
  let service: ConnectionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ConnectionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should hide the indicator immediately when the network reconnects', () => {
    let latestStatus: AppConnectionStatus | undefined;
    const subscription = service.status$.subscribe(status => latestStatus = status);

    (service as any).evaluateStatus({ connected: false, connectionType: 'none' });
    expect(latestStatus?.quality).toBe('offline');

    (service as any).evaluateStatus({ connected: true, connectionType: 'wifi' });
    expect(latestStatus?.quality).toBe('online');

    const request = httpMock.expectOne(req => req.urlWithParams.includes('connectivityCheck='));
    request.flush('', { status: 200, statusText: 'OK' });
    subscription.unsubscribe();
  });

  it('should keep the indicator hidden when a connected network probe fails with status 0', () => {
    let latestStatus: AppConnectionStatus | undefined;
    const subscription = service.status$.subscribe(status => latestStatus = status);

    (service as any).evaluateStatus({ connected: true, connectionType: 'wifi' });
    const request = httpMock.expectOne(req => req.urlWithParams.includes('connectivityCheck='));

    request.error(new ProgressEvent('error'), { status: 0, statusText: 'Unknown Error' });
    expect(latestStatus?.quality).toBe('online');
    subscription.unsubscribe();
  });

  it('should ignore stale probe responses after a newer network state', () => {
    let latestStatus: AppConnectionStatus | undefined;
    const subscription = service.status$.subscribe(status => latestStatus = status);

    (service as any).evaluateStatus({ connected: true, connectionType: 'wifi' });
    const request = httpMock.expectOne(req => req.urlWithParams.includes('connectivityCheck='));

    (service as any).evaluateStatus({ connected: false, connectionType: 'none' });
    expect(latestStatus?.quality).toBe('offline');

    request.flush('', { status: 200, statusText: 'OK' });
    expect(latestStatus?.quality).toBe('offline');
    subscription.unsubscribe();
  });
});
