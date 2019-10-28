import { Component, OnInit } from '@angular/core';
import { Greentee918Service } from '../../services/greentee918.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['../../app.component.css', './main-app.component.css']
})
export class MainAppComponent implements OnInit {

  appUser: any;
  loginComponentVisible = false;

  constructor( private greenTee918Service: Greentee918Service ) { }

  ngOnInit() {
    // todo: does this component deed to know the user??
    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
    this.greenTee918Service.loginUser('not_logged_in', 'password');
    this.greenTee918Service.castLoginVisibility.subscribe(user => this.loginComponentVisible = user);
    this.greenTee918Service.showHomeComponent();
  }

    setAppUserClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
// /            user: true
        };

        return classes;
    }

    setHeaderClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'app-header': true
        };

        return classes;
    }

    setFullViewContainerClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            fullViewContainer: true
        };

        return classes;
    }

  setMainContentClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'app-main-content': true
    };

    return classes;
  }

  showLoginComponent() {
        this.loginComponentVisible = true;
    }

    hideLoginComponent() {
//        this.loginComponentVisible = false;
    }
}
