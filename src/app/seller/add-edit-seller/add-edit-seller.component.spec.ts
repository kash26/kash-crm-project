import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSellerComponent } from './add-edit-seller.component';

describe('AddEditSellerComponent', () => {
  let component: AddEditSellerComponent;
  let fixture: ComponentFixture<AddEditSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
