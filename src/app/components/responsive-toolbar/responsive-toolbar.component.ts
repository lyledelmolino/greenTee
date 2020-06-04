import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';
import {AppComponent} from "../../app.component";
import {DebugService} from "../../services/debug.service";

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['../../app.component.css', './responsive-toolbar.component.css']
})
export class ResponsiveToolbarComponent implements OnInit {

  debugApp;
  debugComponent;
  appUser;
  homeComponentVisible = false;
  aboutComponentVisible = false;
  registerFreeUserComponentVisible = false;
  postScoreComponentVisible = false;
  scoringRecordComponentVisible = false;
  scoringComponentVisible = false;
  profileComponentVisible = false;
  loginComponentVisible = false;
  privacyPolicyVisibility = false;
  isDarkMode = false;

  constructor(private greenTee918Service: Greentee918Service, private appComponent: AppComponent, private debugService: DebugService) {
  }

  ngOnInit() {
    this.debugService.castDebugApp.subscribe(debugApp => this.debugApp = debugApp);
    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
    this.greenTee918Service.castHomeComponentVisibility.subscribe(visibility => this.homeComponentVisible = visibility);
    this.greenTee918Service.castAboutComponentVisibility.subscribe(visibility => this.aboutComponentVisible = visibility);
    this.greenTee918Service.castRegisterFreeUserComponentVisibility.subscribe(visibility =>
      this.registerFreeUserComponentVisible = visibility);
    this.greenTee918Service.castLoginVisibility.subscribe(visibility => this.loginComponentVisible = visibility);
    this.greenTee918Service.castPostScoreVisibility.subscribe(visibility => this.postScoreComponentVisible = visibility);
    this.greenTee918Service.castScoringRecordVisibility.subscribe(visibility => this.scoringRecordComponentVisible = visibility);
    this.greenTee918Service.castScoringVisibility.subscribe(visibility => this.scoringComponentVisible = visibility);
    this.greenTee918Service.castProfileVisibility.subscribe(visibility => this.profileComponentVisible = visibility);
    this.greenTee918Service.castPrivacyPolicyVisibility.subscribe(visibility => this.privacyPolicyVisibility = visibility);
    this.greenTee918Service.castIsDarkMode.subscribe(isDarkMode => this.isDarkMode = isDarkMode);
  }

  logoutUser() {
    this.greenTee918Service.logoutUser2();
    this.greenTee918Service.hideResponsiveMenu();
  }

  setResponsiveToolbarClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'responsive-toolbar': true,
      'dark-mode': this.isDarkMode,
      'light-mode': !this.isDarkMode,
    };

    return classes;
  }
}
