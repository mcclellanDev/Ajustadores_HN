import { TestBed } from '@angular/core/testing';

import { ReversegeoService } from './reversegeo.service';

describe('ReversegeoService', () => {
  let service: ReversegeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReversegeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
