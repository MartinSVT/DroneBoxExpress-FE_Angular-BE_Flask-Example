import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportDeleteComponent } from './airport-delete.component';

describe('AirportDeleteComponent', () => {
  let component: AirportDeleteComponent;
  let fixture: ComponentFixture<AirportDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirportDeleteComponent]
    });
    fixture = TestBed.createComponent(AirportDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
