import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteSellerComponent } from './add-edit-delete-seller.component';

describe('AddEditDeleteSellerComponent', () => {
  let component: AddEditDeleteSellerComponent;
  let fixture: ComponentFixture<AddEditDeleteSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDeleteSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeleteSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
