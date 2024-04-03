import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteAdminComponent } from './waste-admin.component';

describe('WasteAdminComponent', () => {
  let component: WasteAdminComponent;
  let fixture: ComponentFixture<WasteAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WasteAdminComponent]
    });
    fixture = TestBed.createComponent(WasteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
