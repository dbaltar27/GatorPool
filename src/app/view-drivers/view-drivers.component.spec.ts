import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDriversComponent } from './view-drivers.component';

describe('ViewDriversComponent', () => {
  let component: ViewDriversComponent;
  let fixture: ComponentFixture<ViewDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
