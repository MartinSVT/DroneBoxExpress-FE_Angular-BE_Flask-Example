import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoingFailureComponent } from './loing-failure.component';

describe('LoingFailureComponent', () => {
  let component: LoingFailureComponent;
  let fixture: ComponentFixture<LoingFailureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoingFailureComponent]
    });
    fixture = TestBed.createComponent(LoingFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
