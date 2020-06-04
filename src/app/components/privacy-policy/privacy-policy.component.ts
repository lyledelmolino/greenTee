import { Component, OnInit } from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['../../app.component.css', './privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  isDarkMode;

  constructor(private greenTee918Service: Greentee918Service,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.greenTee918Service.hideLoginComponent();
    this.greenTee918Service.hideMainMenu();
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
    this.greenTee918Service.hideAboutComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hidePostScoreComponent();
    this.greenTee918Service.hideScoringComponent();
    this.greenTee918Service.hideProfileComponent();
    this.greenTee918Service.showPrivacyPolicyComponent();
    this.greenTee918Service.castIsDarkMode.subscribe(isDarkMode => this.isDarkMode = isDarkMode);
    this.cookieService.set('last-route', '/privacy-policy', 3000);
  }

  setContainerContainerClass() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'container-container': true
    };

    return classes;

  }

  setDetailClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-container': true,
      active: true
    };

    return classes;

  }
}
