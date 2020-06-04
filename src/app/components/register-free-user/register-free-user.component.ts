import {Component, OnInit, ElementRef} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';
import {User} from '../../models/User';
import {PhoneNumber} from '../../models/PhoneNumber';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-register-free-user',
  templateUrl: './register-free-user.component.html',
  styleUrls: ['../../app.component.css', './register-free-user.component.css']
})

export class RegisterFreeUserComponent implements OnInit {

  // appUser;
  componentForm;
  componentVisible = false;
  message_fail: boolean;
  addressDetailVisible = false;
  phoneDetailVisible = false;
  updatedUser = new User();
  zipCodeNumberOnly = "";
  zipCodePlus4NumberOnly = ""

  constructor(private greenTee918Service: Greentee918Service,
              private cookieService: CookieService) {
    this.componentForm = new User();
  }

  ngOnInit() {
    this.greenTee918Service.castRegisterFreeUserComponentVisibility.subscribe(visibility => this.componentVisible = visibility);

    this.greenTee918Service.hideLoginComponent();
    this.greenTee918Service.hideMainMenu();
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.showRegisterFreeTrialUserComponent();
    this.greenTee918Service.hideAboutComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideScoringComponent();
    this.greenTee918Service.hidePostScoreComponent();
    this.greenTee918Service.hideScoringRecordComponent();
    this.greenTee918Service.hidePrivacyPolicyComponent();

    this.cookieService.set('last-route', '/register-free-user', 3000);
  }

  initializeRegisterFreeUser() {
    this.componentForm.username = this.componentForm.emails[0];

    this.greenTee918Service.initializeRegisterFreeUser(this.componentForm);
  }

//todo: make this more generic... priority after deploy low
//todo: key stroke call stack ??
  inputOnlyIntegerZip(e) {
    let input = parseInt(e.key);
    // don't accept key input from any key not a integer or one of the listed keycodes...
    if ((e.shiftKey || (isNaN(input)))
      && e.key !== "Backspace"	// backspace
      && e.key !== " "	// delete
      && e.key !== "Delete"	// delete
      && e.key !== 37	// left arrow
      && e.key !== 39	// right arrow
      && e.key !== 9	// tab
    ) {
      this.componentForm.locations[0].aAddress.zipCode = this.zipCodeNumberOnly;
      return;
    }
    this.zipCodeNumberOnly = this.componentForm.locations[0].aAddress.zipCode;
    return;
  }

//todo: make this more generic... priority after deploy low
  inputOnlyIntegerZipPlus4(e) {
    let input = parseInt(e.key);
    // don't accept key input from any key not a integer or one of the listed keycodes...
    if ((e.shiftKey || (isNaN(input)))
      && e.key !== "Backspace"	// backspace
      && e.key !== " "	// delete
      && e.key !== "Delete"	// delete
      && e.key !== 37	// left arrow
      && e.key !== 39	// right arrow
      && e.key !== 9	// tab
    ) {
      this.componentForm.locations[0].aAddress.zipPlus4 = this.zipCodePlus4NumberOnly;
      return;
    }
    this.zipCodeNumberOnly = this.componentForm.locations[0].aAddress.zipCode;
    return;
  }

  checkInputForTab(e) {
    if (e.target.value.length === 3) {
      // tslint:disable-next-line:prefer-const
      let next = new ElementRef(e.target.nextSibling);
      next.nativeElement.focus();
      e.target.value = e.target.value;
    }
  }

  resetForm() {
  }

  emailKeypress() {
    this.message_fail = false;
  }

  toggleAffiliationsDetailVisible() {
  }

  toggleAddressDetailVisible() {
    this.addressDetailVisible = !this.addressDetailVisible;
  }

  toggleEmailDetailVisible() {
  }

  togglePhoneDetailVisible() {
    this.phoneDetailVisible = !this.phoneDetailVisible;
  }

  setAddressContainerClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      address: true
    };

    return classes;
  }

  setDetailActuatorClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-actuator': true,
      'form-largest': true
    };

    return classes;
  }

  setContainerContainerClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'container-container': true,
      'profile-group-component': true,
      active: true
    };

    return classes;
  }

  setDetailContainerClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-container': true
    };

    return classes;
  }

  setProfileClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'profile-form': true
    };

    return classes;
  }

  setProfileDetailContainerClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'profile-detail': true
    };

    return classes;
  }

  setProfileAffiliationsDetailContainerClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'profile-affiliations-detail': true
    };

    return classes;
  }

  setRegisterFreeUserButtonClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'common-button': true
    };

    return classes;
  }
}
