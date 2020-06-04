import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';
import {AppComponent} from "../../app.component";
import {RouterOutlet} from "@angular/router";
import {DebugService} from "../../services/debug.service";
import {slideInAnimation, slider} from "../../animations";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {trigger, animate, transition, style, state, group, query} from '@angular/animations';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['../../app.component.css', './main-content.component.css'],
  animations: [
    slideInAnimation,
    slider
    // animation triggers go here
  ]
})

export class MainContentComponent implements OnInit {

  appUser;
  debugApp;
  debugComponent;
  loginComponentVisible = false;
  homeComponentVisible = true;
  golferComponentVisible = false;
  clubAdminComponentVisible = false;
  adminComponentVisible = false;
  aboutComponentVisible = false;
  freeTrialComponentVisible = false;
  freeUserPinFormComponentVisible = false;
  registerFreeUserComponentVisible = false;
  responsiveMenuVisible = false;
  isDarkMode = false;

  constructor(private greenTee918Service: Greentee918Service, private appComponent: AppComponent, private debugService: DebugService) {
  }

  ngOnInit() {
    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
    this.debugService.castDebugMainContentComponent.subscribe(debugComponent => this.debugComponent = debugComponent);
    this.debugService.castDebugApp.subscribe(debugApp => this.debugApp = debugApp);
    this.greenTee918Service.castHomeComponentVisibility.subscribe(visibility => this.homeComponentVisible = visibility);
    this.greenTee918Service.castGolferComponentVisibility.subscribe(visibility => this.golferComponentVisible = visibility);
    this.greenTee918Service.castClubAdminComponentVisibility.subscribe(visibility => this.clubAdminComponentVisible = visibility);
    this.greenTee918Service.castAdminComponentVisibility.subscribe(visibility => this.adminComponentVisible = visibility);
    this.greenTee918Service.castAboutComponentVisibility.subscribe(visibility => this.aboutComponentVisible = visibility);
    this.greenTee918Service.castRegisterFreeUserComponentVisibility.subscribe(visibility =>
      this.registerFreeUserComponentVisible = visibility);
    this.greenTee918Service.castPinFormComponentVisibility.subscribe(visibility =>
      this.freeUserPinFormComponentVisible = visibility);
    this.greenTee918Service.castLoginVisibility.subscribe(visibility => this.loginComponentVisible = visibility);
    this.greenTee918Service.castMainMenuVisibility.subscribe(visibility => this.responsiveMenuVisible = visibility);
    this.greenTee918Service.castIsDarkMode.subscribe(isDarkMode => this.isDarkMode = isDarkMode);
  }

  setMainMenuClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'main-menu': true
    };

    return classes;
  }

  setMainContentClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'gt-main-content-container': true,
      'hide-header': !this.homeComponentVisible,
      'dark-mode': this.isDarkMode,
      'light-mode': !this.isDarkMode
    };

    return classes;
  }

  setHomeClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      /* 'main-menu': true */
    };

    return classes;
  }

  setGolferClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      golfer: true
    };

    return classes;
  }

  setClubAdminClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'club-admin': true
    };

    return classes;
  }

  setAdminClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      admin: true
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

  setProfileClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      profile: true
    };

    return classes;
  }

  showPrivacyPolicyComponent() {
    this.greenTee918Service.hideMainMenu();
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideGolferMenu();
    this.greenTee918Service.hideClubAdminComponent();
    this.greenTee918Service.hideAdminComponent();
    this.greenTee918Service.hideFreeTrialComponent();
    this.greenTee918Service.hidePinFormComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
    this.greenTee918Service.hideAboutComponent();
  }

  showHomeComponent() {
    if (this.debugApp || this.debugComponent) debugger;
    this.responsiveMenuVisible = false;
    this.greenTee918Service.showHomeComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideClubAdminComponent();
    this.greenTee918Service.hideAdminComponent();
    this.greenTee918Service.hideFreeTrialComponent();
    this.greenTee918Service.hidePinFormComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
    this.greenTee918Service.hideAboutComponent();
  }

  showRegisterFreeUserComponent() {
    if (this.debugApp || this.debugComponent) debugger;
    this.responsiveMenuVisible = false;
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideClubAdminComponent();
    this.greenTee918Service.hideAdminComponent();
    this.greenTee918Service.hideAboutComponent();
    this.greenTee918Service.showRegisterFreeTrialUserComponent();
    this.greenTee918Service.hidePinFormComponent();
  }

  prepareRouteTransition(outlet: RouterOutlet) {
    // const animation = outlet.activatedRouteData['animation'] || {};
    // return animation['value'] || null;
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
