import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportwasteComponent } from './reportwaste.component';

describe('ReportwasteComponent', () => {
  let component: ReportwasteComponent;
  let fixture: ComponentFixture<ReportwasteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportwasteComponent]
    });
    fixture = TestBed.createComponent(ReportwasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
