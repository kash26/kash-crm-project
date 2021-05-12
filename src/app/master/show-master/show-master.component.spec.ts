import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMasterComponent } from './show-master.component';

describe('ShowMasterComponent', () => {
  let component: ShowMasterComponent;
  let fixture: ComponentFixture<ShowMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
