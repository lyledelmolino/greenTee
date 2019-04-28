import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetPhoneComponent } from './password-reset-phone.component';

describe('PasswordResetPhoneComponent', () => {
  let component: PasswordResetPhoneComponent;
  let fixture: ComponentFixture<PasswordResetPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordResetPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
