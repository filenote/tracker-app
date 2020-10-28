import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTriggerComponent } from './login-trigger.component';

describe('LoginTriggerComponent', () => {
  let component: LoginTriggerComponent;
  let fixture: ComponentFixture<LoginTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
