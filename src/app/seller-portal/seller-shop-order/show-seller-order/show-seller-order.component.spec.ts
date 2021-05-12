import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSellerOrderComponent } from './show-seller-order.component';

describe('ShowSellerOrderComponent', () => {
  let component: ShowSellerOrderComponent;
  let fixture: ComponentFixture<ShowSellerOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSellerOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSellerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
