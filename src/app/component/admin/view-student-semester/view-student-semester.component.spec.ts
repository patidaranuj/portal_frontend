import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentSemesterComponent } from './view-student-semester.component';

describe('ViewStudentSemesterComponent', () => {
  let component: ViewStudentSemesterComponent;
  let fixture: ComponentFixture<ViewStudentSemesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentSemesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
