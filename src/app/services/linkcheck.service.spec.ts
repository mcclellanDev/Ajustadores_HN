import { TestBed } from '@angular/core/testing';

import { LinkcheckService } from './linkcheck.service';

describe('LinkcheckService', () => {
  let service: LinkcheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkcheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
