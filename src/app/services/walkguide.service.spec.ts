import { TestBed } from '@angular/core/testing';

import { WalkguideService } from './walkguide.service';

describe('WalkguideService', () => {
  let service: WalkguideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalkguideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
