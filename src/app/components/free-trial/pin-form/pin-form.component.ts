import { Component, OnInit } from '@angular/core';
import { Greentee918Service } from '../../../services/greentee918.service';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
//  styleUrls: ['./pin-form.component.css']
  styleUrls: ['../../../app.component.css', '../free-trial.component.css']
})

export class PinFormComponent implements OnInit {

  constructor( private greenTee918Service: Greentee918Service ) { }

  freeTrialRegistrationPin: string;
  freeTrialRegistrationSessionId: string;

  ngOnInit() {
        this.greenTee918Service.castRegisterForFreeTrialSessionId.
        subscribe(sessionId => this.freeTrialRegistrationSessionId = sessionId);
  }

  cancel() {
//        console.log('In login.component.ts - cancel()!!');
      this.greenTee918Service.hideFreeTrialPinFormComponent();
      this.greenTee918Service.showHomeComponent();
  }

  finalizeFreeTrialRegistration() {
      console.log('In PinFormComponent.ts ---> finalizeFreeTrialRegistration()');
      console.log(this.freeTrialRegistrationSessionId);

      this.greenTee918Service.finalizeFreeTrialRegistration(this.freeTrialRegistrationPin, this.freeTrialRegistrationSessionId);
      this.greenTee918Service.hideFreeTrialPinFormComponent();
      this.greenTee918Service.showHomeComponent();
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
}
