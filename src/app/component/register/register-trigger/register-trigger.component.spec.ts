import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTriggerComponent } from './register-trigger.component';

describe('RegisterTriggerComponent', () => {
  let component: RegisterTriggerComponent;
  let fixture: ComponentFixture<RegisterTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
