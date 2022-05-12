import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePaperComponent } from './delete-paper.component';

describe('DeletePaperComponent', () => {
  let component: DeletePaperComponent;
  let fixture: ComponentFixture<DeletePaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
