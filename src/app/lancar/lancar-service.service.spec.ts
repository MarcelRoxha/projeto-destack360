import { TestBed } from '@angular/core/testing';

import { LancarServiceService } from './lancar-service.service';

describe('LancarServiceService', () => {
  let service: LancarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LancarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
