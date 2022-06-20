import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTreatmentComponent } from './previous-treatment.component';

describe('PreviousTreatmentComponent', () => {
  let component: PreviousTreatmentComponent;
  let fixture: ComponentFixture<PreviousTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousTreatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
