import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffListOrdersComponent } from './staff-list-orders.component';

describe('StaffListOrdersComponent', () => {
  let component: StaffListOrdersComponent;
  let fixture: ComponentFixture<StaffListOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffListOrdersComponent]
    });
    fixture = TestBed.createComponent(StaffListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
