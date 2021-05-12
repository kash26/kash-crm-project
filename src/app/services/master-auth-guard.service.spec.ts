import { TestBed } from '@angular/core/testing';

import { MasterAuthGuardService } from './master-auth-guard.service';

describe('MasterAuthGuardService', () => {
  let service: MasterAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
