import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsatusComponent } from './complaintsatus.component';

describe('ComplaintsatusComponent', () => {
  let component: ComplaintsatusComponent;
  let fixture: ComponentFixture<ComplaintsatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplaintsatusComponent]
    });
    fixture = TestBed.createComponent(ComplaintsatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
