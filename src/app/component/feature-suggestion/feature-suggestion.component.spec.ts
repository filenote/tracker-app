import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSuggestionComponent } from './feature-suggestion.component';

describe('FeatureSuggestionComponent', () => {
  let component: FeatureSuggestionComponent;
  let fixture: ComponentFixture<FeatureSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
