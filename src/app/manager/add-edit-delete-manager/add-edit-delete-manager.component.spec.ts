import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteManagerComponent } from './add-edit-delete-manager.component';

describe('AddEditDeleteManagerComponent', () => {
  let component: AddEditDeleteManagerComponent;
  let fixture: ComponentFixture<AddEditDeleteManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDeleteManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeleteManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
