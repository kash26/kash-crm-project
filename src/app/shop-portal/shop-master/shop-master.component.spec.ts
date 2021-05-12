import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMasterComponent } from './shop-master.component';

describe('ShopMasterComponent', () => {
  let component: ShopMasterComponent;
  let fixture: ComponentFixture<ShopMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
