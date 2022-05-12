import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediImageComponent } from './medi-image.component';

describe('MediImageComponent', () => {
  let component: MediImageComponent;
  let fixture: ComponentFixture<MediImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
