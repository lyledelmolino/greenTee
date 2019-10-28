import { Component, OnInit, ElementRef } from '@angular/core';
import { Greentee918Service } from '../../../services/greentee918.service';
import { User } from '../../../models/User';
import { PhoneNumber } from '../../../models/PhoneNumer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../../app.component.css', '../scoring/scoring.component.css', './profile.component.css']
})
export class ProfileComponent implements OnInit {

    appUser;
    componentUser;
    affiliationsDetailVisible = false;
    addressDetailVisible = false;
    emailDetailVisible = false;
    phoneDetailVisible = false;
    updatedUser = new User();

    constructor( private greenTee918Service: Greentee918Service ) {
        this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
//        this.componentUser = this.appUser;
        this.componentUser = JSON.parse(JSON.stringify(this.appUser));

        // console.log('In profile.component.ts ---> constructor()');
        // console.log(this.componentUser);

        if (this.componentUser === null && this.componentUser.phoneNumbers.length === 0) {
            // console.log('this.componentUser.phoneNumbers[0] === null');
            // console.log(this.componentUser.phoneNumbers[0]);
            this.componentUser.phoneNumbers.push(new PhoneNumber());
        }

        // console.log(this.appUser);
    }

    ngOnInit() {
    }

    updateUserProfile() {
        // console.log('In profile.component.ts ---> updateUserProfile()');
        // console.log(this.componentUser);
        this.greenTee918Service.updateUserProfile(this.componentUser);
    }

    inputOnlyInteger(e, maxlength) {

        // don't accept key input from any key not a integer or one of the listed keycodes...
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)
        && e.keyCode !== 8	// backspace
        && e.keyCode !== 46	// delete
        && e.keyCode !== 37	// left arrow
        && e.keyCode !== 39	// right arrow
        && e.keyCode !== 9	// tab
        ) {
            e.preventDefault();
            return;
        }

        if (typeof maxlength !== 'undefined' && maxlength != null
        && e.target.value.length >= maxlength
        && e.keyCode !== 8	// backspace
        && e.keyCode !== 46	// delete
        && e.keyCode !== 37 // left arrow
        && e.keyCode !== 39	// right arrow
        && e.keyCode !== 9	// tab
        ) {
            e.preventDefault();
            return;
        }
    }

    checkInputForTab(e) {
        if ( e.target.value.length === 3 ) {
            // tslint:disable-next-line:prefer-const
            let next = new ElementRef(e.target.nextSibling);
            next.nativeElement.focus();
            e.target.value = e.target.value;
        }
    }

    resetForm() {
        this.componentUser = JSON.parse(JSON.stringify(this.appUser));
    }

    toggleAffiliationsDetailVisible() {
        this.affiliationsDetailVisible = !this.affiliationsDetailVisible;
    }

    toggleAddressDetailVisible() {
      // console.log("toggleAddressDetailVisible() - this.componentUser: ");
      // console.log(this.componentUser);
        this.addressDetailVisible = !this.addressDetailVisible;
    }

    toggleEmailDetailVisible() {
        this.emailDetailVisible = !this.emailDetailVisible;
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
