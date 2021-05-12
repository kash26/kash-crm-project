import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteProductComponent } from './add-edit-delete-product.component';

describe('AddEditDeleteProductComponent', () => {
  let component: AddEditDeleteProductComponent;
  let fixture: ComponentFixture<AddEditDeleteProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDeleteProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
