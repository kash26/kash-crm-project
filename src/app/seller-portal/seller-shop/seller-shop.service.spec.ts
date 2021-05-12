import { TestBed } from '@angular/core/testing';

import { SellerShopService } from './seller-shop.service';

describe('SellerShopService', () => {
  let service: SellerShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
