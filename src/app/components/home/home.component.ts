import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.css', './home.component.css']
})
export class HomeComponent implements OnInit {

  appUser;

  constructor(private greenTee918Service: Greentee918Service) {
    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
  }

  ngOnInit() {
  }

  showRegisterFreeUserComponent() {
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideClubAdminComponent();
    this.greenTee918Service.hideAdminComponent();
    this.greenTee918Service.hideAboutComponent();
    this.greenTee918Service.showRegisterFreeTrialUserComponent();
    this.greenTee918Service.hidePinFormComponent();
  }

  setFindGolferClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'find-golfer': true
    };

    return classes;
  }

}
