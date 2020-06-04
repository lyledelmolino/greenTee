import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Greentee918Service } from '../../services/greentee918.service';
import {CookieService} from 'ngx-cookie-service';
import {DebugService} from "../../services/debug.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['../../app.component.css', './main-app.component.css']
})
export class MainAppComponent implements OnInit {

  private debugApp;
  private debugModule;

  appUser: any;
  loginComponentVisible = false;

  constructor( private greenTee918Service: Greentee918Service, private router: Router, private cookieService: CookieService, private debugService: DebugService ) {
    this.debugService.castDebugApp.subscribe(debugApp => this.debugApp = debugApp);
    this.debugService.castDebugGreenTee918Service.subscribe(debugModule => this.debugModule = debugModule);
  }

  ngOnInit() {

    // todo: does this component need to know the user??
    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
    this.greenTee918Service.showHomeComponent();
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
}
