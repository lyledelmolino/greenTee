import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';
import {Event as NavigationEvent, NavigationStart, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../app.component.css', './header.component.css']
})
export class HeaderComponent implements OnInit {

  appUser;
  mainMenuVisible = false;
  homeComponentVisible = false;
  loginComponentVisible = false;
  forgotPasswordComponentVisible = false;
  golferComponentVisible = false;
  clubAdminComponentVisible = false;
  adminComponentVisible = false;
  freeTrialComponentVisible = false;
  aboutComponentVisible = false;

  constructor(private greenTee918Service: Greentee918Service, private router: Router) {
  }

  ngOnInit() {
    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
    this.greenTee918Service.castMainMenuVisibility.subscribe(visibility => this.mainMenuVisible = visibility);
    this.greenTee918Service.castHomeComponentVisibility.subscribe(visibility => this.homeComponentVisible = visibility);
    this.greenTee918Service.castLoginVisibility.subscribe(visibility => this.loginComponentVisible = visibility);
    this.greenTee918Service.castForgotPasswordComponentVisibility.subscribe(visibility => this.forgotPasswordComponentVisible = visibility);
    this.greenTee918Service.castHomeComponentVisibility.subscribe(visibility => this.homeComponentVisible = visibility);
    this.greenTee918Service.castGolferComponentVisibility.subscribe(visibility => this.golferComponentVisible = visibility);
    this.greenTee918Service.castClubAdminComponentVisibility.subscribe(visibility => this.clubAdminComponentVisible = visibility);
    this.greenTee918Service.castAdminComponentVisibility.subscribe(visibility => this.adminComponentVisible = visibility);
    this.greenTee918Service.castRegisterFreeUserComponentVisibility.subscribe(visibility => this.freeTrialComponentVisible = visibility);
    this.greenTee918Service.castAboutComponentVisibility.subscribe(visibility => this.aboutComponentVisible = visibility);
  }

  showHome() {
    this.greenTee918Service.showHomeComponent();
    this.greenTee918Service.hideMainMenu();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideClubAdminComponent();
    this.greenTee918Service.hideAdminComponent();
    this.greenTee918Service.hideFreeTrialComponent();
    this.greenTee918Service.hideLoginComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
    this.greenTee918Service.hideAboutComponent();
  }

  setHeaderClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'app-header': !(this.loginComponentVisible || this.forgotPasswordComponentVisible),
      'login-header': this.loginComponentVisible || this.forgotPasswordComponentVisible,
      'hide-header': !this.homeComponentVisible
    };

    return classes;
  }

  setResponsiveMenuClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'responsive-menu': true,
      'active': this.mainMenuVisible,
    };

    return classes;
  }

  showMainMenu() {
    this.mainMenuVisible = !this.mainMenuVisible;
    this.router.navigate(['../blank']);
    this.greenTee918Service.showMainMenu();
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.hideLoginComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideGolferMenu();
    this.greenTee918Service.hideClubAdminComponent();
    this.greenTee918Service.hideAdminComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
    this.greenTee918Service.hideAboutComponent();
  }
}
