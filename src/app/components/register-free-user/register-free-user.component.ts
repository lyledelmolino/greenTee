import {Component, OnInit, ElementRef} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';
import {User} from '../../models/User';
import {PhoneNumber} from '../../models/PhoneNumer';

@Component({
  selector: 'app-register-free-user',
  templateUrl: './register-free-user.component.html',
  styleUrls: ['../../app.component.css', './register-free-user.component.css']
})
export class RegisterFreeUserComponent implements OnInit {

  // appUser;
  componentForm;
  message_fail: boolean;
//    affiliationsDetailVisible = false;
  addressDetailVisible = false;
//    emailDetailVisible = false;
  phoneDetailVisible = false;
  updatedUser = new User();
  zipCodeNumberOnly = "";
  zipCodePlus4NumberOnly = ""

  constructor(private greenTee918Service: Greentee918Service) {
    this.componentForm = new User();
    // this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
    // this.componentForm = this.appUser;
    // this.componentForm = JSON.parse(JSON.stringify(this.appUser));

    // console.log('In profile.component.ts ---> constructor()');
    // console.log(this.componentForm);

//        if (this.componentUser === null && this.componentUser.phoneNumbers.length === 0) {
    ////           console.log('this.componentUser.phoneNumbers[0] === null');
    //          console.log(this.componentUser.phoneNumbers[0]);
    //        this.componentUser.phoneNumbers.push(new PhoneNumber());
    //  }

    // console.log(this.appUser);
  }

  ngOnInit() {
  }

  initializeRegisterFreeUser() {
    // console.log('In RegisterFreeUserComponent ---> initializeRegisterFreeUser()');
    this.componentForm.username = this.componentForm.emails[0];
    // console.log(this.componentForm);

    this.greenTee918Service.initializeRegisterFreeUser(this.componentForm);
  }

//todo: make this more generic... priority after deploy low
//todo: key stroke call stack ??
  inputOnlyIntegerZip(e) {
    // console.log("In inputOnlyInteger(e) e.key: " + e.key);
    // console.log("In inputOnlyInteger(e) parseInt(e.key): " + parseInt(e.key));
    // console.log("In inputOnlyInteger(e) this.componentForm.locations[0].aAddress.zipCode: " + this.componentForm.locations[0].aAddress.zipCode);
    let input = parseInt(e.key);
    // don't accept key input from any key not a integer or one of the listed keycodes...
    // if ((e.shiftKey || (e.key < 48 || e.key > 57)) && (e.key < 96 || e.key > 105)
    if ((e.shiftKey || (isNaN(input)))
      && e.key !== "Backspace"	// backspace
      && e.key !== " "	// delete
      && e.key !== "Delete"	// delete
      && e.key !== 37	// left arrow
      && e.key !== 39	// right arrow
      && e.key !== 9	// tab
    ) {
      // console.log("In suppress keystroke")
      this.componentForm.locations[0].aAddress.zipCode = this.zipCodeNumberOnly;
      return;
    }
    // console.log("Out of suppress keystroke")
    this.zipCodeNumberOnly = this.componentForm.locations[0].aAddress.zipCode;
    return;
  }

//todo: make this more generic... priority after deploy low
  inputOnlyIntegerZipPlus4(e) {
    // console.log("In inputOnlyInteger(e) e.key: " + e.key);
    // console.log("In inputOnlyInteger(e) parseInt(e.key): " + parseInt(e.key));
    // console.log("In inputOnlyInteger(e) this.componentForm.locations[0].aAddress.zipCode: " + this.componentForm.locations[0].aAddress.zipCode);
    let input = parseInt(e.key);
    // don't accept key input from any key not a integer or one of the listed keycodes...
    // if ((e.shiftKey || (e.key < 48 || e.key > 57)) && (e.key < 96 || e.key > 105)
    if ((e.shiftKey || (isNaN(input)))
      && e.key !== "Backspace"	// backspace
      && e.key !== " "	// delete
      && e.key !== "Delete"	// delete
      && e.key !== 37	// left arrow
      && e.key !== 39	// right arrow
      && e.key !== 9	// tab
    ) {
      // console.log("In suppress keystroke")
      this.componentForm.locations[0].aAddress.zipPlus4 = this.zipCodePlus4NumberOnly;
      return;
    }
    // console.log("Out of suppress keystroke")
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
//    this.componentForm = JSON.parse(JSON.stringify(this.appUser));
  }

  emailKeypress() {
//    console.log("emailKeypress()");
    this.message_fail = false;
  }

  toggleAffiliationsDetailVisible() {
//        this.affiliationsDetailVisible = !this.affiliationsDetailVisible;
  }

  toggleAddressDetailVisible() {
    // console.log('In profile.component.ts 1 ---> toggleAddressDetailVisible()');
    // console.log(this.addressDetailVisible);
    this.addressDetailVisible = !this.addressDetailVisible;
    // console.log('In profile.component.ts 2 ---> toggleAddressDetailVisible()');
    // console.log(this.addressDetailVisible);
  }

  toggleEmailDetailVisible() {
//        this.emailDetailVisible = !this.emailDetailVisible;
  }

  togglePhoneDetailVisible() {
    // console.log('In profile.component.ts 1 ---> togglePhoneDetailVisible()');
    // console.log(this.phoneDetailVisible);
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
      'profile-group-component': true
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
}
