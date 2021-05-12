import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerShopOrderComponent } from './seller-shop-order.component';

describe('SellerShopOrderComponent', () => {
  let component: SellerShopOrderComponent;
  let fixture: ComponentFixture<SellerShopOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerShopOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerShopOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
