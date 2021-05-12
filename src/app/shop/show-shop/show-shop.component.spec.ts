import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShopComponent } from './show-shop.component';

describe('ShowShopComponent', () => {
  let component: ShowShopComponent;
  let fixture: ComponentFixture<ShowShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
