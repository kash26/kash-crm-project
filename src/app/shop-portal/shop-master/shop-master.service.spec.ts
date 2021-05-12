import { TestBed } from '@angular/core/testing';

import { ShopMasterService } from './shop-master.service';

describe('ShopMasterService', () => {
  let service: ShopMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
