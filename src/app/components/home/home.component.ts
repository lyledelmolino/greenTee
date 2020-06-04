import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';
import {DebugService} from "../../services/debug.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.css', '../main-content/main-content.component.css', './home.component.css']
})

export class HomeComponent implements OnInit {

  appUser = {
    userLevel: 0
  };
  homeComponentVisible = false;
  debug;
  testing;
  modeIsVisible = false;
  debugApp;
  debugModule;

  constructor(private greenTee918Service: Greentee918Service,
              private cookieService: CookieService,
              private debugService: DebugService,
              private router: Router) {
    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
    this.greenTee918Service.castHomeComponentVisibility.subscribe(visibility => this.homeComponentVisible = visibility);
    this.greenTee918Service.castIsDarkMode.subscribe(isDarkMode => this.testing = isDarkMode);
    this.greenTee918Service.showHomeComponent();
  }

  ngOnInit() {

    // if (this.cookieService.check('mode')) {
    //   this.greenTee918Service.setDarkMode(this.cookieService.get('mode'));
    //   this.modeIsVisible = true;
    //   this.testing = "there is a mode cookie! - Value: " + this.cookieService.get('mode');
    // } else {
    //   this.testing = this.cookieService.get('last-route');
    // }

    this.greenTee918Service.hideLoginComponent();
    this.greenTee918Service.hideMainMenu();
    this.greenTee918Service.showHomeComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
    this.greenTee918Service.hideAboutComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideScoringComponent();
    this.greenTee918Service.hidePostScoreComponent();
    this.greenTee918Service.hideScoringRecordComponent();
    this.greenTee918Service.hidePrivacyPolicyComponent();
    this.cookieService.set('last-route', '/home', 3000);
  }

  showRegisterFreeUserComponent() {
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideClubAdminComponent();
    this.greenTee918Service.hideAdminComponent();
    this.greenTee918Service.hideAboutComponent();
    this.greenTee918Service.showRegisterFreeTrialUserComponent();
    this.greenTee918Service.hidePinFormComponent();
  }

  setFindGolferClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'find-golfer': true
    };

    return classes;
  }

  setSubscribeFreeUserButtonClasses() {

    let classes = {
      'common-button': true
    };

    return classes;
  }

  setHomeSectionClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
        active: true
      }
    ;

    return classes;
  }
}
