import { TestBed } from '@angular/core/testing';

import { MonyDonService } from './mony-don.service';

describe('MonyDonService', () => {
  let service: MonyDonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonyDonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
