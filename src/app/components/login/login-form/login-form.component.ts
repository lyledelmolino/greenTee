import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../../services/greentee918.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../../../app.component.css', './login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string;
  password: string;

  constructor(private greenTee918Service: Greentee918Service) {
  }

  ngOnInit() {
  }

  setLoginFormClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'profile-form': true
    };

    return classes;
  }

  loginUser() {
//        console.log(this.username);
//        console.log(this.password);
    // todo: does this component need the user? thinking no
//        this.greenTee918Service.loginUser('golfer1', 'password');
    this.greenTee918Service.loginUser(this.username, this.password);
  }

  cancel() {
//        console.log('In login.component.ts - cancel()!!');
    this.greenTee918Service.hideLoginComponent();
    this.greenTee918Service.showHomeComponent();
  }

  showForgotPasswordComponent() {
//        console.log('In login.component.ts - showForgotPasswordComponent()!!');
//        this.forgotPasswordComponentVisible = true;
    this.greenTee918Service.showForgotPasswordComponent();
    this.greenTee918Service.hideLoginFormComponent();
  }

  // todo: this is for v 2019.1 to be updated to include use of phone...
  showPasswordResetEmailComponent() {
    this.greenTee918Service.showPasswordResetEmailComponent();
    this.greenTee918Service.hideLoginFormComponent();
//    console.log('In ForgotPasswordComponent.component.ts - showPasswordResetEmailComponent()!!');
  }

  showRegisterFreeUserComponent() {
    this.greenTee918Service.hideLoginComponent();
    this.greenTee918Service.showRegisterFreeTrialUserComponent();
  }

  setLoginContainerClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'login-container': true
    };

    return classes;
  }
}
