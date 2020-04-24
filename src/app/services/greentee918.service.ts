import {Injectable} from '@angular/core';
import {Event as NavigationEvent, NavigationStart, Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/User';
import {filter} from "rxjs/operators";
import {CookieService} from 'ngx-cookie-service';
import {DebugService} from "./debug.service";

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-type': 'application/x-www-form-urlencoded'
//        'Access-Control-Allow-Origin': '*'
  })
};

const HTTP_OPTIONS_JSON = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
//        'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})

export class Greentee918Service {

  private debugApp;
  private debugModule;

  private theURL = 'https://greenteeapi.info';
  // private theURL = 'http://localhost';
  private theAWSAPIURL = 'https://k29kvoyykd.execute-api.us-east-1.amazonaws.com/test/greentinfo';
  private theGHINURL = 'http://widgets.ghin.com/HandicapLookup.aspx?entry=1&css=default&dynamic=&small=0&showheader=1&showheadertext=1&showfootertext=1&tab=1';
  private mFoundGolfers: Array<any>;
  private mResetPasswordSessionId: string;
  private mRegisterForFreeTrialSessionId: string;
  private mPinForm: string = "";
  private appUser = {
    userLevel: 0
  };

  private user = new BehaviorSubject<any>(this.appUser);
  private foundGolfers = new BehaviorSubject<any[]>(this.mFoundGolfers);
  private resetPasswordSessionId = new BehaviorSubject<string>(this.mResetPasswordSessionId);
  private sessionId = new BehaviorSubject<string>(this.mRegisterForFreeTrialSessionId);
  private loginComponentVisibility = new BehaviorSubject<any>('');
  private loginFormComponentVisibility = new BehaviorSubject<any>('');
  private forgotPasswordComponentVisibility = new BehaviorSubject<any>('');
  private passwordResetEmailComponentVisibility = new BehaviorSubject<any>('');
  private passwordResetEmailErrorMsgComponentVisibility = new BehaviorSubject<any>('');
  private passwordResetPhoneComponentVisibility = new BehaviorSubject<any>('');
  private passwordResetComponentVisibility = new BehaviorSubject<any>('');
  private homeComponentVisibility = new BehaviorSubject<any>('');
  private findGolferComponentVisibility = new BehaviorSubject<any>('');
  private golferComponentVisibility = new BehaviorSubject<any>('');
  private scoringComponentVisibility = new BehaviorSubject<any>('');
  private golferMenuVisibility = new BehaviorSubject<any>('');
  private profileComponentVisibility = new BehaviorSubject<any>('');
  private clubAdminComponentVisibility = new BehaviorSubject<any>('');
  private adminComponentVisibility = new BehaviorSubject<any>('');
  private aboutComponentVisibility = new BehaviorSubject<any>('');
  private registerFreeUserComponentVisibility = new BehaviorSubject<any>('');
  private pinFormComponentVisibility = new BehaviorSubject<any>('');
  private freeTrialComponentVisibility = new BehaviorSubject<any>('');
  private freeTrialPinFormComponentVisibility = new BehaviorSubject<any>('');
  private mainMenuVisibility = new BehaviorSubject<any>('');

  castUser = this.user.asObservable();
  castFoundGolfers = this.foundGolfers.asObservable();
  castRegisterForFreeTrialSessionId = this.sessionId.asObservable();
  castLoginVisibility = this.loginComponentVisibility.asObservable();
  castLoginFormComponentVisibility = this.loginFormComponentVisibility.asObservable();
  castForgotPasswordComponentVisibility = this.forgotPasswordComponentVisibility.asObservable();
  castPasswordResetEmailComponentVisibility = this.passwordResetEmailComponentVisibility.asObservable();
  castPasswordResetEmailErrorMsgComponentVisibility = this.passwordResetEmailErrorMsgComponentVisibility.asObservable();
  castPasswordResetPhoneComponentVisibility = this.passwordResetPhoneComponentVisibility.asObservable();
  castPasswordResetComponentVisibility = this.passwordResetComponentVisibility.asObservable();
  castHomeComponentVisibility = this.homeComponentVisibility.asObservable();
  castFindGolferComponentVisibility = this.findGolferComponentVisibility.asObservable();
  castGolferComponentVisibility = this.golferComponentVisibility.asObservable();
  castGolferMenuVisibility = this.golferMenuVisibility.asObservable();
  castScoringComponentVisibility = this.scoringComponentVisibility.asObservable();
  castProfileComponentVisibility = this.profileComponentVisibility.asObservable();
  castClubAdminComponentVisibility = this.clubAdminComponentVisibility.asObservable();
  castAdminComponentVisibility = this.adminComponentVisibility.asObservable();
  castAboutComponentVisibility = this.aboutComponentVisibility.asObservable();
  castRegisterFreeUserComponentVisibility = this.registerFreeUserComponentVisibility.asObservable();
  castPinFormComponentVisibility = this.pinFormComponentVisibility.asObservable();
  castFreeTrialPinFormComponentVisibility = this.freeTrialPinFormComponentVisibility.asObservable();
  castMainMenuVisibility = this.mainMenuVisibility.asObservable();

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService, private debugService: DebugService) {

    this.debugService.castDebugApp.subscribe(debugApp => this.debugApp = debugApp);
    this.debugService.castDebugGreenTee918Service.subscribe(debugModule => this.debugModule = debugModule);

    router.events
      .pipe(
        // The "events" stream contains all the navigation events. For this demo,
        // though, we only care about the NavigationStart event as it contains
        // information about what initiated the navigation sequence.
        filter(
          (event: NavigationEvent) => {

            return (event instanceof NavigationStart);

          }
        )
      )
      .subscribe(
        (event: NavigationStart) => {

          // Every navigation sequence is given a unique ID. Even "popstate"
          // navigations are really just "roll forward" navigations that get
          // a new, unique ID.
          // The "navigationTrigger" will be one of:
          // --
          // - imperative (ie, user clicked a link).
          // - popstate (ie, browser controlled change such as Back button).
          // - hashchange
          // --
          // NOTE: I am not sure what triggers the "hashchange" type.

          // This "restoredState" property is defined when the navigation
          // event is triggered by a "popstate" event (ex, back / forward
          // buttons). It will contain the ID of the earlier navigation event
          // to which the browser is returning.
          // --
          // CAUTION: This ID may not be part of the current page rendering.
          // This value is pulled out of the browser; and, may exist across
          // page refreshes.
          if (event.restoredState) {
          }

          if (event.url == '/register-free-user') {
            this.hideLoginComponent();
            this.hideMainMenu();
            this.hideHomeComponent();
            this.showRegisterFreeTrialUserComponent();
            this.hideAboutComponent();
            this.hideGolferComponent();
          } else if (event.url == '/about') {
            this.hideLoginComponent();
            this.hideMainMenu();
            this.hideHomeComponent();
            this.hideRegisterFreeTrialUserComponent();
            this.showAboutComponent();
            this.hideGolferComponent();
          } else if (event.url == '/home') {
            this.hideLoginComponent();
            this.hideMainMenu();
            this.showHomeComponent();
            this.hideRegisterFreeTrialUserComponent();
            this.hideAboutComponent();
            this.hideGolferComponent();
          } else if (event.url == '/login') {
            if (this.user.value.userLevel > 0) {
              // event.url = "/golfer";
              // event.restoredState.navigationId = event.id;
              // event.restoredState.navigationId = 1;
            }
            this.showLoginComponent();
            this.hideMainMenu();
            this.hideHomeComponent();
            this.hideRegisterFreeTrialUserComponent();
            this.hideAboutComponent();
            this.hideGolferComponent();
          } else if (event.url == '/golfer') {
            this.hideLoginComponent();
            this.hideMainMenu();
            this.hideHomeComponent();
            this.hideRegisterFreeTrialUserComponent();
            this.hideAboutComponent();
            this.showGolferComponent();
          }
        }
      );
  }

  ngOnInit() {
  }

  logoutUser(router) {

    this.user.next(new User(0));
    router.navigate(['../home']);

    this.showHomeComponent();
  }

  loginUser(username, password, router) {

    if (this.debugApp || this.debugModule) debugger;

    // set header vars action...
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('password', password);
    body = body.set('action', 'login_api');

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((loggedInUser: any) => {
        this.user.next(loggedInUser);

        if (this.debugApp || this.debugModule) {
          debugger;
          // console.log("In loginUser - loggedInUser.userLevel: " + loggedInUser.userLevel);
        }

        if (loggedInUser.userLevel != null && loggedInUser.userLevel > 0) {
          this.loginComponentVisibility.next(false);
          router.navigate(['../golfer']);
          // this.cookieService.set('name', 'test-cookie');
        }
      });
  }

  getAppUser() {
    return this.appUser;
  }

  initializePasswordReset(pEmail) {
    // set header vars action...
    let body = new HttpParams();
    body = body.set('email', pEmail);
    body = body.set('action', 'init_reset_password');

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((sessionId: any) => {
        // this.resetPasswordSessionId.next(sessionId);
        this.mResetPasswordSessionId = sessionId;
        if (sessionId != 'fail') {
          this.hidePasswordResetEmailComponent()
          this.showPinFormComponent();
          this.mPinForm = "password_reset";
        } else {
          this.showPasswordResetEmailErrorMsgComponent();
        }
      });
  }

  confirmPin(pPin: string, router) {
    // set header vars action...
    let body = new HttpParams();
    body = body.set('pin', pPin);
    body = body.set('ob_tacgod', this.mResetPasswordSessionId);
    if (this.mPinForm == "register-free-user") {
      body = body.set('action', 'finalize_free_trial');
    } else {
      body = body.set('action', 'confirm_pin');
    }

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((sessionId: any) => {

        this.mResetPasswordSessionId = sessionId;
        if (sessionId != 0) {
          this.hidePinFormComponent();
          if (this.mPinForm == "register-free-user") {

            this.user.next(sessionId);
            if (sessionId.userLevel > 0) {
              router.navigate(['../home']);
            }
          } else {
            router.navigate(['../password-reset']);
          }
        }
      });
  }

  resetPassword(pPassword, router) {
    // set header vars action...
    let body = new HttpParams();
    body = body.set('rehto', pPassword);
    body = body.set('ob_tacgod', this.mResetPasswordSessionId);
    body = body.set('action', 'reset_password');

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((loggedInUser: any) => {

        this.user.next(loggedInUser);

        if (loggedInUser.userLevel > 0) {
          router.navigate(['../home']);
        }
      });
  }

  initializeRegisterFreeUser(pUser: User) {
    // set header vars action...
    let body = new HttpParams();
    body = body.set('form', JSON.stringify(pUser));
    body = body.set('action', 'initialize_free_trial');

    if (this.debugApp || this.debugModule) debugger;

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((sessionId: any) => {

        this.mResetPasswordSessionId = sessionId;

        if (sessionId == 'username_exists' || sessionId == 'email_exists') {
          this.sessionId.next(sessionId);

        } else {
          this.sessionId.next(sessionId);
          this.hideRegisterFreeTrialUserComponent();
          this.showPinFormComponent();
          this.mPinForm = "register-free-user";
        }
      });
  }

  confirmFreeUserRegistrationPin(pPin: string) {
    // set header vars action...
    let body = new HttpParams();
    body = body.set('pin', pPin);
    body = body.set('ob_tacgod', this.mResetPasswordSessionId);
    body = body.set('action', 'finalize_free_trial');

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((loggedInUser: any) => {
        if (loggedInUser != 0) {
          this.user.next(loggedInUser);
          if (loggedInUser.userLevel > 0) {
            this.hidePinFormComponent();
            this.showHomeComponent();
          }
        } else {

        }
      });
  }

  registerFreeUser(pUser: User) {
    // set header vars action...
    let body = new HttpParams();
    body = body.set('action', 'finalize_free_trial');

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((appUser: any) => {
        this.user.next(appUser);
        this.hidePinFormComponent();
        this.showHomeComponent();
      });
  }

  findGolfer(formData) {

    // set header vars action...
    let body = new HttpParams();
    body = body.set('form', JSON.stringify(formData));
    body = body.set('action', 'find_golfer');

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((foundGolfers) => {

        if (foundGolfers.length == 0) {
          //Lets see if they are a ghin golfer
          let httpHeaders = new HttpHeaders()
            .set('Access-Control-Allow-Origin', 'http://localhost:4200')
            .set('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64; rv:12.0)');
          this.http.get('http://google.com',
            {headers: httpHeaders}).subscribe
          (data => {
          });
        } else {
          this.foundGolfers.next(foundGolfers);
        }
      });
  }

  parseGHINFoundGolfers(foundGolfers) {
  }


  postScore(formData) {

    // set header vars action...
    let body = new HttpParams();
    body = body.set('form', JSON.stringify(formData));
    body = body.set('action', 'post_score_api');

    if (this.debugApp || this.debugModule) debugger;

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((loggedInUser: any) => {
        this.user.next(loggedInUser);
        if (loggedInUser.userLevel > 0) {
          this.loginComponentVisibility.next(false);
        }
      });
  }

  updateUserProfile(formData) {

    // set header vars action...
    let body = new HttpParams();
    body = body.set('form', JSON.stringify(formData));

    body = body.set('action', 'update_user');

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((updatedUser: any) => {
        updatedUser.handicapIndex = formData.handicapIndex;
        updatedUser.currentScoringRecord = formData.currentScoringRecord;
        updatedUser.eligibleTournamentScoringRecord = formData.eligibleTournamentScoringRecord;
        updatedUser.revisionScoringRecord = formData.revisionScoringRecord;
        updatedUser.twoLowestEligibleTournamentScores = formData.twoLowestEligibleTournamentScores;
        this.user.next(updatedUser);
        if (updatedUser.userLevel > 0) {
          this.loginComponentVisibility.next(false);
        }
      });
  }

  showLoginComponent() {
    this.loginFormComponentVisibility.next(true);
  }

  hideLoginComponent() {
    this.loginComponentVisibility.next(false);
    this.hideLoginFormComponent();
    this.hideForgotPasswordComponent();
    this.hidePasswordResetEmailComponent();
    this.hidePasswordResetPhoneComponent();
    this.hidePasswordResetComponent();
    this.hidePinFormComponent();
  }

  showLoginFormComponent() {
  }

  hideLoginFormComponent() {
    this.loginFormComponentVisibility.next(false);
  }

  hideFoundGolfersComponent() {
  }

  showForgotPasswordComponent() {
  }

  hideForgotPasswordComponent() {
    this.forgotPasswordComponentVisibility.next(false);
  }

  hideResponsiveMenu() {
  }

  showPasswordResetEmailComponent() {
  }

  hidePasswordResetEmailComponent() {
    this.passwordResetEmailComponentVisibility.next(false);
  }

  showPasswordResetEmailErrorMsgComponent() {
    this.passwordResetEmailErrorMsgComponentVisibility.next(true);
  }

  hidePasswordResetEmailErrorMsgComponent() {
    this.passwordResetEmailErrorMsgComponentVisibility.next(false);
  }

  showPasswordResetPhoneComponent() {
    this.passwordResetPhoneComponentVisibility.next(true);
  }

  hidePasswordResetPhoneComponent() {
    this.passwordResetPhoneComponentVisibility.next(false);
  }

  showPasswordResetComponent() {
    this.passwordResetComponentVisibility.next(true);
  }

  hidePasswordResetComponent() {
    this.passwordResetComponentVisibility.next(false);
  }

  showHomeComponent() {
    this.homeComponentVisibility.next(true);
  }

  hideHomeComponent() {
    this.homeComponentVisibility.next(false);
  }

  showMainMenu() {
    this.mainMenuVisibility.next(true);
  }

  hideMainMenu() {
    this.mainMenuVisibility.next(false);
  }

  showGolferComponent() {
    this.golferComponentVisibility.next(true);
    this.showGolferMenu();
  }

  hideGolferComponent() {
    this.golferComponentVisibility.next(false);
    this.hideScoringComponent();
    this.hideProfileComponent();
  }

  showScoringComponent() {
    this.scoringComponentVisibility.next(true);
  }

  hideScoringComponent() {
    this.scoringComponentVisibility.next(false);
  }

  showProfileComponent() {
    this.profileComponentVisibility.next(true);
  }

  hideProfileComponent() {
    this.profileComponentVisibility.next(false);
  }

  showClubAdminComponent() {
    this.clubAdminComponentVisibility.next(true);
  }

  hideClubAdminComponent() {
    this.clubAdminComponentVisibility.next(false);
  }

  showAdminComponent() {
    this.adminComponentVisibility.next(true);
  }

  hideAdminComponent() {
    this.adminComponentVisibility.next(false);
  }

  showAboutComponent() {
    this.aboutComponentVisibility.next(true);
  }

  hideAboutComponent() {
    this.aboutComponentVisibility.next(false);
  }

  showGolferMenu() {
    this.golferMenuVisibility.next(true);
  }

  hideGolferMenu() {
    this.golferMenuVisibility.next(false);
  }

  showRegisterFreeTrialUserComponent() {
    this.registerFreeUserComponentVisibility.next(true);
  }

  hideRegisterFreeTrialUserComponent() {
    this.registerFreeUserComponentVisibility.next(false);
  }

  showFreeTrialComponent() {
    this.freeTrialComponentVisibility.next(true);

  }

  hideFreeTrialComponent() {
    this.freeTrialComponentVisibility.next(false);
  }

  showPinFormComponent() {
    this.pinFormComponentVisibility.next(true);
  }

  hidePinFormComponent() {
    this.pinFormComponentVisibility.next(false);
  }
}
