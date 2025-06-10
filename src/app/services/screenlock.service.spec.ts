import { TestBed } from '@angular/core/testing';

import { ScreenlockService } from './screenlock.service';

describe('ScreenlockService', () => {
  let service: ScreenlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
