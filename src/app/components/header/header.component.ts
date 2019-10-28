import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appUser;
  loginComponentVisible = false;
  forgotPasswordComponentVisible = false;

  constructor(private greenTee918Service: Greentee918Service) {
  }

  ngOnInit() {
    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
    this.greenTee918Service.castLoginVisibility.subscribe(visibility => this.loginComponentVisible = visibility);
    this.greenTee918Service.castForgotPasswordComponentVisibility.subscribe(visibility => this.forgotPasswordComponentVisible = visibility);
  }

  showHome() {
    //  this.animateArrowDown = !this.animateArrowDown;
    //this.animateArrowUp = !this.animateArrowUp;
//    console.log("showHome() clicked!")
    this.greenTee918Service.showHomeComponent();
    this.greenTee918Service.hideLoginComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideClubAdminComponent();
    this.greenTee918Service.hideAdminComponent();
//    this.greenTee918Service.hideFreeTrialComponent();
//    this.greenTee918Service.hidePinFormComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
    this.greenTee918Service.hideAboutComponent();
  }

  setHeaderClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'app-header': !(this.loginComponentVisible || this.forgotPasswordComponentVisible),
      'login-header': this.loginComponentVisible || this.forgotPasswordComponentVisible,
      'user-not-logged-in': this.appUser.userLevel==0
    };

    return classes;
  }
}
