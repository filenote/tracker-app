import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCommentComponent } from './feature-comment.component';

describe('FeatureCommentComponent', () => {
  let component: FeatureCommentComponent;
  let fixture: ComponentFixture<FeatureCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
