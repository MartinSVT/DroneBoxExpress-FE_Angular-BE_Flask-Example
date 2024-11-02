import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameErrorComponent } from './username-error.component';

describe('UsernameErrorComponent', () => {
  let component: UsernameErrorComponent;
  let fixture: ComponentFixture<UsernameErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsernameErrorComponent]
    });
    fixture = TestBed.createComponent(UsernameErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
