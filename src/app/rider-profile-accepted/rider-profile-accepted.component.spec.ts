import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderProfileAcceptedComponent } from './rider-profile-accepted.component';

describe('RiderProfileAcceptedComponent', () => {
  let component: RiderProfileAcceptedComponent;
  let fixture: ComponentFixture<RiderProfileAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderProfileAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderProfileAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
