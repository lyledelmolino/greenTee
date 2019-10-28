import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['../../app.component.css', './password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  password: string;
  passwordConfirm: string;

  constructor(private greenTee918Service: Greentee918Service) {
  }

  ngOnInit() {
  }

  cancel() {
//       console.log('In password-reset-email.component.ts - cancel()!!');
    this.greenTee918Service.hidePasswordResetComponent();
    this.greenTee918Service.showForgotPasswordComponent();
  }

  resetPassword() {
    // console.log("resetPassword()");
    if (this.password == this.passwordConfirm) {
      this.greenTee918Service.resetPassword(this.password);
    }
  }

  setResetPasswordFormClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'profile-form': true
    };

    return classes;
  }

  setResetPasswordContainerClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'login-container': true
    };

    return classes;
  }
}
