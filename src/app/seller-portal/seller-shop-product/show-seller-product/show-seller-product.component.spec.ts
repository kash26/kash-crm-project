import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSellerProductComponent } from './show-seller-product.component';

describe('ShowSellerProductComponent', () => {
  let component: ShowSellerProductComponent;
  let fixture: ComponentFixture<ShowSellerProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSellerProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSellerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
