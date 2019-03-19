import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripMatchComponent } from './trip-match.component';

describe('TripMatchComponent', () => {
  let component: TripMatchComponent;
  let fixture: ComponentFixture<TripMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
