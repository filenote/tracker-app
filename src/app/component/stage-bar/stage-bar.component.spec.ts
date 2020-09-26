import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageBarComponent } from './stage-bar.component';

describe('StageBarComponent', () => {
  let component: StageBarComponent;
  let fixture: ComponentFixture<StageBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
