import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../../app.component.css', './forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {

  constructor(private greenTee918Service: Greentee918Service) {
  }

  ngOnInit() {
  }

  setFullViewContainerClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      fullViewContainer: true
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

  setForgotPasswordContainerClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'login-container': true
    };

    return classes;
  }

  setForgotPasswordFormClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'profile-form': true
    };

    return classes;
  }

  cancel() {
    this.greenTee918Service.hideForgotPasswordComponent();
    this.greenTee918Service.showLoginFormComponent();
  }

  showPasswordResetEmailComponent() {
    this.greenTee918Service.showPasswordResetEmailComponent();
    this.greenTee918Service.hideForgotPasswordComponent();
  }

  showPasswordResetPhoneComponent() {
    this.greenTee918Service.showPasswordResetPhoneComponent();
    this.greenTee918Service.hideForgotPasswordComponent();
  }

  setForgotPasswordButtonClasses() {

    let classes = {
      'common-button': true
    };

    return classes;
  }
}
