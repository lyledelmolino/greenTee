import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../../services/greentee918.service';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['../../../app.component.css', './scoring.component.css'],
})

export class ScoringComponent implements OnInit {

  appUser;
  postScoreDetailVisible;
  isDarkMode = false;

  constructor(private greenTee918Service: Greentee918Service,
              private cookieService: CookieService) {
  }

  ngOnInit() {
    this.greenTee918Service.castPostScoreVisibility.subscribe(postScoreDetailVisible => this.postScoreDetailVisible = postScoreDetailVisible);

    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
    this.greenTee918Service.castIsDarkMode.subscribe(isDarkMode => this.isDarkMode = isDarkMode);
    this.greenTee918Service.hideLoginComponent();
    this.greenTee918Service.hideMainMenu();
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
    this.greenTee918Service.hideAboutComponent();
    this.greenTee918Service.showGolferComponent();
    this.greenTee918Service.showScoringComponent();
    this.greenTee918Service.hidePostScoreComponent();
    this.greenTee918Service.hideScoringRecordComponent();
    this.greenTee918Service.hidePrivacyPolicyComponent();
    this.greenTee918Service.hideProfileComponent();
    this.cookieService.set('last-route', '/scoring', 3000);
  }

  setScoringComponentClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'scoring-group-component container-container': true
    };

    return classes;
  }

  setDetailContainerClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-container': true,
      active: this.postScoreDetailVisible
    };

    return classes;
  }

  setContainerContainerClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'container-container': true
    };

    return classes;
  }

  setPostScoreClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'post-score': true
    };

    return classes;
  }

  setScoringRecordClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'scoring-record': true
    };

    return classes;
  }

  setCurrentScoringRecordClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'current-scoring-record': true
    };

    return classes;
  }

  setDetailActuateClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'scoring-record': true,
      'dark-mode': this.isDarkMode
    };

    return classes;
  }
}
