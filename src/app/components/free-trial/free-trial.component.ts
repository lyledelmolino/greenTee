import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-free-trial',
  templateUrl: './free-trial.component.html',
  styleUrls: ['../../app.component.css', './free-trial.component.css']
})

export class FreeTrialComponent implements OnInit {

  freeTrialUser = new User();
  freeTrialComponentVisible = false;

  constructor(private greenTee918Service: Greentee918Service) {
  }

  ngOnInit() {
    this.greenTee918Service.castRegisterFreeUserComponentVisibility.subscribe(visibility => this.freeTrialComponentVisible = visibility);
  }

  setFreeTrialFormClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'free-trial-form': true
    };

    return classes;
  }

  setFreeTrialContainerClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'free-trial-container': true
    };

    return classes;
  }

  registerFreeTrialUser() {
    // todo: does this composnt need the user? thinking no
    this.greenTee918Service.hideFreeTrialComponent();
    this.greenTee918Service.showPinFormComponent();
  }

  cancel() {
    this.greenTee918Service.hideFreeTrialComponent();
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
