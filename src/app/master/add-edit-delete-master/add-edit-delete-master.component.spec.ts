import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteMasterComponent } from './add-edit-delete-master.component';

describe('AddEditDeleteMasterComponent', () => {
  let component: AddEditDeleteMasterComponent;
  let fixture: ComponentFixture<AddEditDeleteMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDeleteMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeleteMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
