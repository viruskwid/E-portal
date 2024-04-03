import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllusersAdminComponent } from './allusers-admin.component';

describe('AllusersAdminComponent', () => {
  let component: AllusersAdminComponent;
  let fixture: ComponentFixture<AllusersAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllusersAdminComponent]
    });
    fixture = TestBed.createComponent(AllusersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
