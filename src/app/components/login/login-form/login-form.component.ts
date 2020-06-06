import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../../services/greentee918.service';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../../../app.component.css', '../login.component.css', './login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  username: string;
  password: string;
  rememberMe: boolean = false;
  isDarkMode: boolean = false;

  constructor(private greenTee918Service: Greentee918Service,
              private router: Router,
              private cookieService: CookieService) {
  }

  ngOnInit() {
    this.greenTee918Service.castIsDarkMode.subscribe(isDarkMode => this.isDarkMode = isDarkMode);
    this.cookieService.set('last-route', '/privacy-policy', 3000);
  }

  setLoginFormClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'login-form': true,
      'profile-form': true
    };

    return classes;
  }

  loginUser() {
//        console.log(this.username);
//        console.log(this.password);

    // todo: does this composnt need the user? thinking no
//        this.greenTee918Service.loginUser('golfer1', 'password');
    this.greenTee918Service.loginUser(this.username, this.password, this.rememberMe, this.router);
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

  setLoginContainerClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'login-container': true
    };

    return classes;
  }

  setTextInputClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'form-largest': true
    };

    return classes;
  }

  setSignInButtonClasses() {
    let classes = {
      'common-button': true
    };

    return classes;
  }
}
