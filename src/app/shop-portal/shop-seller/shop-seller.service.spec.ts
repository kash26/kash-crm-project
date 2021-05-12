import { TestBed } from '@angular/core/testing';

import { ShopSellerService } from './shop-seller.service';

describe('ShopSellerService', () => {
  let service: ShopSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
