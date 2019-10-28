import {Component, ElementRef, OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';

@Component({
  selector: 'app-password-reset-phone',
  templateUrl: './password-reset-phone.component.html',
  styleUrls: ['../../app.component.css', './password-reset-phone.component.css']
})
export class PasswordResetPhoneComponent implements OnInit {

  componentForm;

  constructor(private greenTee918Service: Greentee918Service) {
  }

  ngOnInit() {
  }

  cancel() {
//       console.log('In password-reset-phone.component.ts - cancel()!!');
    this.greenTee918Service.hidePasswordResetPhoneComponent();
    this.greenTee918Service.showForgotPasswordComponent();
  }

  setResetPasswordPhoneFormClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'profile-form': true
    };

    return classes;
  }

  setResetPasswordPhoneContainerClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'login-container': true
    };

    return classes;
  }

  inputOnlyInteger(e, maxlength) {

    // don't accept key input from any key not a integer or one of the listed keycodes...
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)
      && e.keyCode !== 8	// backspace
      && e.keyCode !== 46	// delete
      && e.keyCode !== 37	// left arrow
      && e.keyCode !== 39	// right arrow
      && e.keyCode !== 9	// tab
    ) {
      e.preventDefault();
      return;
    }

    if (typeof maxlength !== 'undefined' && maxlength != null
      && e.target.value.length >= maxlength
      && e.keyCode !== 8	// backspace
      && e.keyCode !== 46	// delete
      && e.keyCode !== 37 // left arrow
      && e.keyCode !== 39	// right arrow
      && e.keyCode !== 9	// tab
    ) {
      e.preventDefault();
      return;
    }
  }

  checkInputForTab(e) {
    if (e.target.value.length === 3) {
      // tslint:disable-next-line:prefer-const
      let next = new ElementRef(e.target.nextSibling);
      next.nativeElement.focus();
      e.target.value = e.target.value;
    }
  }

  initializeResetPassword() {
    this.greenTee918Service.initializePasswordReset(this.componentForm);
  }
}
