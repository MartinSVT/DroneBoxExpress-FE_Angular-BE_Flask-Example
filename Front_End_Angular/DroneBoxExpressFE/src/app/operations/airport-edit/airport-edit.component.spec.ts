import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportEditComponent } from './airport-edit.component';

describe('AirportEditComponent', () => {
  let component: AirportEditComponent;
  let fixture: ComponentFixture<AirportEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirportEditComponent]
    });
    fixture = TestBed.createComponent(AirportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
