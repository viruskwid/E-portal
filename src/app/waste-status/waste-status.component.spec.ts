import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteStatusComponent } from './waste-status.component';

describe('WasteStatusComponent', () => {
  let component: WasteStatusComponent;
  let fixture: ComponentFixture<WasteStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WasteStatusComponent]
    });
    fixture = TestBed.createComponent(WasteStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
