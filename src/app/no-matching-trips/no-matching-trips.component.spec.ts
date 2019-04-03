import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMatchingTripsComponent } from './no-matching-trips.component';

describe('NoMatchingTripsComponent', () => {
  let component: NoMatchingTripsComponent;
  let fixture: ComponentFixture<NoMatchingTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoMatchingTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMatchingTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
