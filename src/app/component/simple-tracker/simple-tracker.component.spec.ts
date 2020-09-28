import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTrackerComponent } from './simple-tracker.component';

describe('SimpleTrackerComponent', () => {
  let component: SimpleTrackerComponent;
  let fixture: ComponentFixture<SimpleTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
