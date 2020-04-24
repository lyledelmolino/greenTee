import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Greentee918Service} from '../../services/greentee918.service';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
  styleUrls: ['../../app.component.css', './pin-form.component.css']
})

export class PinFormComponent implements OnInit {

  constructor(private greenTee918Service: Greentee918Service, private router: Router) {
  }

  pin: string;

  ngOnInit() {
  }

  cancel() {
    this.greenTee918Service.hidePinFormComponent();
    this.greenTee918Service.showLoginFormComponent();
  }

  confirmPin() {
    this.greenTee918Service.confirmPin(this.pin, this.router);
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

  setPinFormButtonClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'common-button': true
    };

    return classes;
  }
}
