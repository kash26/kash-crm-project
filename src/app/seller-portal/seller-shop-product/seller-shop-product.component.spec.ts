import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerShopProductComponent } from './seller-shop-product.component';

describe('SellerShopProductComponent', () => {
  let component: SellerShopProductComponent;
  let fixture: ComponentFixture<SellerShopProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerShopProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerShopProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
