import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancePerUserComponent } from './attendance-per-user.component';

describe('AttendancePerUserComponent', () => {
  let component: AttendancePerUserComponent;
  let fixture: ComponentFixture<AttendancePerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendancePerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancePerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
