import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';
import {FormBuilder, FormControl, FormGroup, FormArray, Validators} from "@angular/forms";

@Component({
  selector: 'app-password-reset-email',
  templateUrl: './password-reset-email.component.html',
  styleUrls: ['../../app.component.css', './password-reset-email.component.css']
})
export class PasswordResetEmailComponent implements OnInit {

  password: string;
  username: string;
  email: string;
  message_fail: boolean;

  constructor(private greenTee918Service: Greentee918Service) {
  }

  ngOnInit() {
    this.greenTee918Service.castPasswordResetEmailErrorMsgComponentVisibility
      .subscribe(visibility => {
        this.message_fail = visibility;
      });

  }

  cancel() {
//       console.log('In password-reset-email.component.ts - cancel()!!');
    this.greenTee918Service.hidePasswordResetEmailErrorMsgComponent();
    this.greenTee918Service.hidePasswordResetEmailComponent();
    // this.greenTee918Service.showForgotPasswordComponent();
    this.greenTee918Service.showLoginFormComponent();
  }

  emailKeypress() {
    // console.log("emailKeypress()");
    this.message_fail = false;
  }

  initializePasswordReset() {
    // console.log("initializePasswordReset()");
    // console.log(this.email);
    // console.log(this.username);
    // console.log(this.password);
    this.greenTee918Service.initializePasswordReset(this.email);
  }

  setResetPasswordEmailFormClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'profile-form': true
    };

    return classes;
  }

  setResetPasswordEmailContainerClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'login-container': true
    };

    return classes;
  }
}
