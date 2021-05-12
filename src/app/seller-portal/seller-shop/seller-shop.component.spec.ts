import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerShopComponent } from './seller-shop.component';

describe('SellerShopComponent', () => {
  let component: SellerShopComponent;
  let fixture: ComponentFixture<SellerShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
