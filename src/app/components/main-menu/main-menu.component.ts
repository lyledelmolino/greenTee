import {Component, OnInit} from '@angular/core';
// import {OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';
import {DebugService} from "../../services/debug.service";
import {Router} from "@angular/router";
// import {Component, trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['../../app.component.css', './main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  debugApp;
  debugComponent;
  appUser;
  homeComponentVisible = false;
  golferComponentVisible = false;
  clubAdminComponentVisible = false;
  adminComponentVisible = false;
  freeTrialComponentVisible = false;
  registerFreeUserComponentVisible = false;
  aboutComponentVisible = false;
  responsiveMenuVisible = false;
  animateArrowDown = false;
  animateArrowUp = true;

  constructor(private greenTee918Service: Greentee918Service, private debugService: DebugService) {
  }

  ngOnInit() {
    this.debugService.castDebugApp.subscribe(debugApp => this.debugApp = debugApp);
    this.debugService.castDebugMainMenuComponent.subscribe(debugComponent => this.debugComponent = debugComponent);
    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
    this.greenTee918Service.castHomeComponentVisibility.subscribe(visibility => this.homeComponentVisible = visibility);
    this.greenTee918Service.castGolferComponentVisibility.subscribe(visibility => this.golferComponentVisible = visibility);
    this.greenTee918Service.castClubAdminComponentVisibility.subscribe(visibility => this.clubAdminComponentVisible = visibility);
    this.greenTee918Service.castAdminComponentVisibility.subscribe(visibility => this.adminComponentVisible = visibility);
    this.greenTee918Service.castRegisterFreeUserComponentVisibility.subscribe(visibility => this.registerFreeUserComponentVisible = visibility);
    this.greenTee918Service.castAboutComponentVisibility.subscribe(visibility => this.aboutComponentVisible = visibility);
    this.greenTee918Service.castMainMenuVisibility.subscribe(visibility => this.responsiveMenuVisible = visibility);
  }

  setArrowClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      // 'animate-arrow-down': this.animateArrowDown,
      // 'animate-arrow-up': this.animateArrowUp

    };

    return classes;
  }

  setMenuButtonClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      active: this.aboutComponentVisible,
      'responsive-menu': this.responsiveMenuVisible,
      'common-button': true
    };

    return classes;
  }

  setHomeButtonClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      active: this.homeComponentVisible,
      'responsive-menu': this.responsiveMenuVisible,
      'common-button': true
    };

    return classes;
  }

  setGolferButtonClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      active: this.golferComponentVisible,
      'responsive-menu': this.responsiveMenuVisible,
      'common-button': true
    };

    return classes;
  }

  setRegisterFreeUserButtonClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      active: this.registerFreeUserComponentVisible,
      'responsive-menu': this.responsiveMenuVisible,
      'common-button': true
    };

    return classes;
  }

  showResponsiveMenu() {
    this.responsiveMenuVisible = true;
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideClubAdminComponent();
    this.greenTee918Service.hideAdminComponent();
    this.greenTee918Service.hideFreeTrialComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
    this.greenTee918Service.hideAboutComponent();
    this.greenTee918Service.hideGolferMenu();
  }

  showHomeComponent() {
    //debugger;
    // this.responsiveMenuVisible = false;
    // //  this.animateArrowDown = !this.animateArrowDown;
    // //this.animateArrowUp = !this.animateArrowUp;
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

  showGolferComponent() {
    this.responsiveMenuVisible = false;
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.showGolferComponent();
    this.greenTee918Service.showGolferMenu();
    this.greenTee918Service.hideClubAdminComponent();
    this.greenTee918Service.hideAdminComponent();
    this.greenTee918Service.hideFreeTrialComponent();
    this.greenTee918Service.hidePinFormComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
    this.greenTee918Service.hideAboutComponent();
  }

  showClubAdminComponent() {
    this.responsiveMenuVisible = false;
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.showClubAdminComponent();
    this.greenTee918Service.hideAdminComponent();
    this.greenTee918Service.hideFreeTrialComponent();
    this.greenTee918Service.hidePinFormComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
    this.greenTee918Service.hideAboutComponent();
  }

  showAdminComponent() {
    this.responsiveMenuVisible = false;
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideClubAdminComponent();
    this.greenTee918Service.showAdminComponent();
    this.greenTee918Service.hideFreeTrialComponent();
    this.greenTee918Service.hidePinFormComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
    this.greenTee918Service.hideAboutComponent();
  }

  showFreeTrialComponent() {
    this.responsiveMenuVisible = false;
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideClubAdminComponent();
    this.greenTee918Service.hideAdminComponent();
    this.greenTee918Service.hideAboutComponent();
    this.greenTee918Service.showFreeTrialComponent();
    this.greenTee918Service.hidePinFormComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
  }

  showRegisterFreeUserComponent() {
    this.responsiveMenuVisible = false;
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideClubAdminComponent();
    this.greenTee918Service.hideAdminComponent();
    this.greenTee918Service.hideAboutComponent();
    this.greenTee918Service.showRegisterFreeTrialUserComponent();
    this.greenTee918Service.hidePinFormComponent();
    // console.log("---- main-menu.component ---- freeTrialComponentVisible: " + this.freeTrialComponentVisible);
  }

  showAboutComponent() {
    this.responsiveMenuVisible = false;
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideClubAdminComponent();
    this.greenTee918Service.hideAdminComponent();
    this.greenTee918Service.hideFreeTrialComponent();
    this.greenTee918Service.hidePinFormComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
    this.greenTee918Service.showAboutComponent();
  }
}
