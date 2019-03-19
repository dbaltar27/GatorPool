import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedTripComponent } from './confirmed-trip.component';

describe('ConfirmedTripComponent', () => {
  let component: ConfirmedTripComponent;
  let fixture: ComponentFixture<ConfirmedTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
