import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteOrderComponent } from './add-edit-delete-order.component';

describe('AddEditDeleteOrderComponent', () => {
  let component: AddEditDeleteOrderComponent;
  let fixture: ComponentFixture<AddEditDeleteOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDeleteOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeleteOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
