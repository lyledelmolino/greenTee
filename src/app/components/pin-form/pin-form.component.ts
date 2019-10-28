import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
  styleUrls: ['../../app.component.css', './pin-form.component.css']
})

export class PinFormComponent implements OnInit {

  constructor(private greenTee918Service: Greentee918Service) {
  }

  pin: string;

  ngOnInit() {
    // this.greenTee918Service.castRegisterForFreeTrialSessionId.subscribe(sessionId => this.sessionId = sessionId);
  }

  cancel() {
    this.greenTee918Service.hidePinFormComponent();
    // this.greenTee918Service.showForgotPasswordComponent();
    this.greenTee918Service.showLoginFormComponent();
  }

  confirmPin() {
    // console.log('In PinFormComponent.ts ---> confirmPin()');
    // console.log(this.pin);

    this.greenTee918Service.confirmPin(this.pin);
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
