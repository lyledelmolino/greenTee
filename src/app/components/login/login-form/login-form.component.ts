import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Greentee918Service} from '../../../services/greentee918.service';
import {DebugService} from "../../../services/debug.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../../../app.component.css', './login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  debugApp;
  debugComponent;
  username: string;
  password: string;

  constructor(private greenTee918Service: Greentee918Service, private router: Router, private debugService: DebugService) {
  }

  ngOnInit() {
    this.debugService.castDebugApp.subscribe(debugApp => this.debugApp = debugApp);
    this.debugService.castDebugLoginComponent.subscribe(debugComponent => this.debugComponent = debugComponent);
  }

  setLoginFormClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'profile-form': true
    };

    return classes;
  }

  loginUser() {
    // todo: does this component need the user? thinking no
    if (this.debugApp || this.debugComponent) debugger;
    this.greenTee918Service.loginUser(this.username, this.password, this.router);
  }

  cancel() {
    this.greenTee918Service.hideLoginComponent();
    this.greenTee918Service.showHomeComponent();
  }

  showForgotPasswordComponent() {
    this.greenTee918Service.showForgotPasswordComponent();
    this.greenTee918Service.hideLoginFormComponent();
  }

  // todo: this is for v 2019.1 to be updated to include use of phone...
  showPasswordResetEmailComponent() {
    this.greenTee918Service.showPasswordResetEmailComponent();
    this.greenTee918Service.hideLoginFormComponent();
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

  setSignInButtonClasses() {

    let classes = {
      'common-button': true
    };

    return classes;
  }
}
