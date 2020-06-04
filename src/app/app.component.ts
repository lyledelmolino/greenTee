import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from "@angular/common";
import {environment} from '../environments/environment';
import {filter} from "rxjs/operators";
import {Router} from "@angular/router";
import {Event as NavigationEvent, NavigationStart} from "@angular/router";
import {Greentee918Service} from "./services/greentee918.service";
import {CookieService} from 'ngx-cookie-service';
import {DebugService} from "./services/debug.service";
import {BehaviorSubject} from "rxjs";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {trigger, animate, transition, style} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private debugApp;
  private debugModule;

  private isDarkMode;

  // castIsDarkMode = this.isDarkMode.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: any,
              @Inject(DOCUMENT) private document: any,
              private cookieService: CookieService,
              private debugService: DebugService,
              private greentee918Service: Greentee918Service,
              private router: Router) {

    this.greentee918Service.castIsDarkMode.subscribe(isDarkMode => this.isDarkMode = isDarkMode);

  }

  ngOnInit() {

    this.greentee918Service.hideHomeComponent();
    this.greentee918Service.hideMainMenu();

    if (this.cookieService.check('mode')) {
      this.greentee918Service.setDarkMode(this.cookieService.get('mode'));
    }

    if (this.cookieService.check('user') && this.cookieService.check('greent')) {
      let user = this.cookieService.get('user');
      let greent = this.cookieService.get('greent');

      let username = atob(user.substring(0, user.length - (btoa('uranass$123').length + 1)));
      let password = atob(greent).substring(0, atob(greent).length - 10);

      this.greentee918Service.loginUser(username, password, true, this.router);

    } else {
      // this.router.navigate(['../home']);
    }

    if (this.debugApp || this.debugModule || false) debugger;

    if (!isPlatformBrowser(this.platformId)) {
      const bases = this.document.getElementsByTagName('base');

      if (bases.length > 0) {
        bases[0].setAttribute('href', environment.baseHref);
      }
    }
  }

  setFullViewContainerClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      fullViewContainer: true
    };

    return classes;
  }

  setAppContainerClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      appContainer: true,
      'dark-mode': this.isDarkMode,
      'light-mode': !this.isDarkMode,
    };

    return classes;
  }

  loginIOSUser(url) {


    let startRouteSlashIndex = this.document.URL.indexOf('/', 7);
    let endRouteSlashIndex = this.document.URL.indexOf('/', this.document.URL.indexOf('/', 7) + 1);
    let route = this.document.URL.substring(startRouteSlashIndex, endRouteSlashIndex);


    let usernameStartIndex = this.document.URL.indexOf("=", endRouteSlashIndex) + 1;
    let usernameEndIndex = this.document.URL.indexOf("&", endRouteSlashIndex);
    let username = this.document.URL.substring(usernameStartIndex, usernameEndIndex);
    let passwordStartIndex = this.document.URL.indexOf("=", usernameEndIndex) + 1;
    let passwordEndIndex = this.document.URL.length;
    let password = this.document.URL.substring(passwordStartIndex, passwordEndIndex);

    if (this.debugApp || this.debugModule || true) debugger;

    this.greentee918Service.loginUser(username, password, true, this.router)

  }
}
