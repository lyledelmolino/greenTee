import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['../../app.component.css', './main-content.component.css']
})
export class MainContentComponent implements OnInit {

  appUser;
  loginComponentVisible = false;
  homeComponentVisible = true;
  golferComponentVisible = false;
  clubAdminComponentVisible = false;
  adminComponentVisible = false;
  aboutComponentVisible = false;
  freeTrialComponentVisible = false;
  freeUserPinFormComponentVisible = false;
  registerFreeUserComponentVisible = false;

  constructor(private greenTee918Service: Greentee918Service) {
  }

  ngOnInit() {
    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
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
      'gt-main-content-container': true
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
}
