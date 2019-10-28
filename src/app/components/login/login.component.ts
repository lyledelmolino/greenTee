import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../app.component.css', './login.component.css']
})

export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginFormComponentVisible = true;
  forgotPasswordComponentVisible = false;
  passwordResetEmailComponentVisible = false;
  passwordResetPhoneComponentVisible = false;
  passwordResetComponentVisible = false;
  pinFormComponentVisible = false;

  constructor(private greenTee918Service: Greentee918Service) {
  }

  ngOnInit() {

    this.greenTee918Service.castLoginFormComponentVisibility
      .subscribe(visibility => {
        this.loginFormComponentVisible = visibility;
      });

    this.greenTee918Service.castForgotPasswordComponentVisibility
      .subscribe(visibility => {
        this.forgotPasswordComponentVisible = visibility;
      });

    this.greenTee918Service.castPasswordResetEmailComponentVisibility
      .subscribe(visibility => {
        this.passwordResetEmailComponentVisible = visibility;
      });

    this.greenTee918Service.castPasswordResetComponentVisibility
      .subscribe(visibility => {
        this.passwordResetComponentVisible = visibility;
      });

    this.greenTee918Service.castPinFormComponentVisibility.subscribe(visibility =>
      this.pinFormComponentVisible = visibility);

    this.greenTee918Service.castPasswordResetPhoneComponentVisibility
      .subscribe(visibility => {
        this.passwordResetPhoneComponentVisible = visibility;
      });

    this.greenTee918Service.showLoginFormComponent();
  }

  setTopLevelContainerClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      topLevelConatainer: true
    };

    return classes;
  }

  setClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'full-display-container': true
    };

    return classes;
  }

  setHeaderClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'login-header': true
    };

    return classes;
  }

  setFullViewContainerClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      fullViewContainer: true
    };

    return classes;
  }

  setLoginContainerClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'gt-main-content-container': true
    };

    return classes;
  }

  setLoginFormClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'login-form': true
    };

    return classes;
  }

  setAboutClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      about: true
    };

    return classes;
  }

  cancel() {
//        console.log('In login.component.ts - cancel()!!');
    this.greenTee918Service.hideLoginComponent();
  }
}
