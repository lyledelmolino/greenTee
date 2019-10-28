import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/User';

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

  private theURL = 'https://www.greentee.info/angular/api/index.php';
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
  private profileComponentVisibility = new BehaviorSubject<any>('');
  private clubAdminComponentVisibility = new BehaviorSubject<any>('');
  private adminComponentVisibility = new BehaviorSubject<any>('');
  private aboutComponentVisibility = new BehaviorSubject<any>('');
  private registerFreeUserComponentVisibility = new BehaviorSubject<any>('');
  private pinFormComponentVisibility = new BehaviorSubject<any>('');
  private freeTrialComponentVisibility = new BehaviorSubject<any>('');
  private freeTrialPinFormComponentVisibility = new BehaviorSubject<any>('');
  private responsiveMenuVisibility = new BehaviorSubject<any>('');

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
  castScoringComponentVisibility = this.scoringComponentVisibility.asObservable();
  castProfileComponentVisibility = this.profileComponentVisibility.asObservable();
  castClubAdminComponentVisibility = this.clubAdminComponentVisibility.asObservable();
  castAdminComponentVisibility = this.adminComponentVisibility.asObservable();
  castAboutComponentVisibility = this.aboutComponentVisibility.asObservable();
  castRegisterFreeUserComponentVisibility = this.registerFreeUserComponentVisibility.asObservable();
  castPinFormComponentVisibility = this.pinFormComponentVisibility.asObservable();
  castFreeTrialComponentVisibility = this.freeTrialComponentVisibility.asObservable();
  castFreeTrialPinFormComponentVisibility = this.freeTrialPinFormComponentVisibility.asObservable();
  castResponsiveMenuVisibility = this.responsiveMenuVisibility.asObservable();

  constructor(private http: HttpClient) {
  }

  logoutUser() {
    // let body = new HttpParams();
    // body = body.set('action', 'logout_api');
    // console.log('In greentee918.service.ts ---> logoutUser( 1 ) - user: ');
    // console.log(this.user);
    //
    // this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
    //   .subscribe((loggedOutUser) => {
    //     this.user.next(loggedOutUser);
    //     console.log('In greentee918.service.ts ---> logoutUser(): ' + loggedOutUser);
    //   });

    this.user.next(new User(0));

    // console.log('In greentee918.service.ts ---> logoutUser( 1 ) - user: ');
    // console.log(this.user);

    this.hideGolferComponent();
    this.hideClubAdminComponent();
    this.hideAdminComponent();
    this.hideAboutComponent();
    this.hideRegisterFreeTrialUserComponent();
    this.showHomeComponent();
  }

  loginUser(username, password) {

    // set header vars action...
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('password', password);
    body = body.set('action', 'login_api');

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((loggedInUser: any) => {
        this.user.next(loggedInUser);

        // console.log('In greentee918.service.ts ---> loginUser(username, password) - user: ');
        // console.log(this.user);

        if (loggedInUser.userLevel > 0) {
          this.loginComponentVisibility.next(false);
          this.hideHomeComponent();
          this.showGolferComponent();

        }
        console.log('In greentee918.service.ts ---> loginUser(): Observable<User>');
        console.log(this.user.value.revisionScoringRecord);
        console.log(this.user.value);
      });
  }

  initializePasswordReset(pEmail) {
    // set header vars action...
    let body = new HttpParams();
    body = body.set('email', pEmail);
    body = body.set('action', 'init_reset_password');

    // console.log('In greentee918.service.ts ---> -initializePasswordReset(pForm)');

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((sessionId: any) => {
        // this.resetPasswordSessionId.next(sessionId);
        this.mResetPasswordSessionId = sessionId;
        if (sessionId != 'fail') {
          this.hidePasswordResetEmailComponent()
          this.showPinFormComponent();
        } else {
          this.showPasswordResetEmailErrorMsgComponent();
        }
        // console.log('In greentee918.service.ts ---> -initializePasswordReset(pEmail) sessionId:');
        // console.log(sessionId);
      });
  }

  confirmPin(pPin: string) {
    // set header vars action...
    let body = new HttpParams();
    body = body.set('pin', pPin);
    body = body.set('ob_tacgod', this.mResetPasswordSessionId);
    if (this.mPinForm == "register-free-user") {
      body = body.set('action', 'finalize_free_trial');
    } else {
      body = body.set('action', 'confirm_pin');
    }
    // console.log('In greentee918.service.ts ---> confirmPin(pin: string, sessionId: string)  - this.mResetPasswordSessionId:');
    // console.log(this.mResetPasswordSessionId);
    // console.log('In greentee918.service.ts ---> confirmPin(pin: string, sessionId: string) - pPin:');
    // console.log(pPin);
    // console.log('In greentee918.service.ts ---> confirmPin(pin: string, sessionId: string) - mPinForm:');
    // console.log(this.mPinForm);

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((sessionId: any) => {
        // this.resetPasswordSessionId.next(sessionId);
        // console.log('In greentee918.service.ts ---> confirmPin(pin: string, sessionId: string) - sessionId:');
        // console.log(sessionId);
        this.mResetPasswordSessionId = sessionId;
        if (sessionId != 0) {
          this.hidePinFormComponent();
          if (this.mPinForm == "register-free-user") {
            // console.log('In greentee918.service.ts ---> confirmPin(pin: string, sessionId: string) 2 - sessionId:');
            // console.log(sessionId);
            this.user.next(sessionId);
            if (sessionId.userLevel > 0) {
              this.showHomeComponent();
            }
          } else {
            this.showPasswordResetComponent();
          }
        } else {

        }
        // console.log('In greentee918.service.ts ---> -confirmPin(pin) sessionId:');
        // console.log(sessionId);
      });
  }

  resetPassword(pPassword) {
    // set header vars action...
    let body = new HttpParams();
    body = body.set('rehto', pPassword);
    body = body.set('ob_tacgod', this.mResetPasswordSessionId);
    body = body.set('action', 'reset_password');

    // this.hidePasswordResetComponent();
    // this.hideLoginComponent();
    // this.showHomeComponent();

    // console.log('In greentee918.service.ts ---> -resetPassword(pPassword)');

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((loggedInUser: any) => {
        this.user.next(loggedInUser);
        if (loggedInUser.userLevel > 0) {
//          this.loginComponentVisibility.next(false);
//          this.hidePasswordResetComponent();
          this.hideLoginComponent();
          this.showHomeComponent();
        }
        // console.log('In greentee918.service.ts ---> resetPassword(): Observable<User>');
        // console.log(this.user.value);
      });
  }

//  registerFreeUser(pUser: User) {
  initializeRegisterFreeUser(pUser: User) {
    // set header vars action...
    let body = new HttpParams();
    body = body.set('form', JSON.stringify(pUser));
    body = body.set('action', 'initialize_free_trial');

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((sessionId: any) => {

        // console.log('In greentee918.service.ts ---> -initializeRegisterFreeUser(pUser: User) sessionId:');
        // console.log(sessionId);

        this.mResetPasswordSessionId = sessionId;

        if (sessionId == 'username_exists' || sessionId == 'email_exists') {
          this.sessionId.next(sessionId);

        } else {
          this.sessionId.next(sessionId);
          this.hideRegisterFreeTrialUserComponent();
          this.showPinFormComponent();
          this.mPinForm = "register-free-user";
        }

        // console.log('In greentee918.service.ts ---> -initializeRegisterFreeUser(pUser: User) sessionId:');
        // console.log(this.sessionId);
      });
  }

  confirmFreeUserRegistrationPin(pPin: string) {
    // set header vars action...
    let body = new HttpParams();
    body = body.set('pin', pPin);
//    body = body.set('ob_tacgod', this.mRegisterForFreeTrialSessionId);
    body = body.set('ob_tacgod', this.mResetPasswordSessionId);
    body = body.set('action', 'finalize_free_trial');

    // console.log('In greentee918.service.ts ---> confirmFreeUserRegistrationPin(pin: string, sessionId: string)');
    // console.log(this.mResetPasswordSessionId);
    // console.log('In greentee918.service.ts ---> confirmFreeUserRegistrationPin(pin: string, sessionId: string) - pPin');
    // console.log(pPin);

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((loggedInUser: any) => {
        // this.resetPasswordSessionId.next(sessionId);
        if (loggedInUser != 0) {
          this.user.next(loggedInUser);
          if (loggedInUser.userLevel > 0) {
            this.hidePinFormComponent();
            this.showHomeComponent();
          }
        } else {

        }
        // console.log('In greentee918.service.ts ---> -confirmPin(pin) sessionId:');
        // console.log(sessionId);
      });
  }

//  initializeRegisterFreeUser(pform) {
  registerFreeUser(pUser: User) {
    // set header vars action...
    let body = new HttpParams();
//    body = body.set('form', JSON.stringify(pform));
    body = body.set('action', 'finalize_free_trial');

    // console.log('In greentee918.service.ts ---> -initializeRegisterFreeUser(userToRegisterForFreeTrial) pform:');
    //  console.log(pform);

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((appUser: any) => {
        this.user.next(appUser);
        this.hidePinFormComponent();
        this.showHomeComponent();
        // console.log('In greentee918.service.ts ---> -initializeRegisterFreeUser(userToRegisterForFreeTrial) appUser:');
        // console.log(this.user);
      });
  }

  findGolfer(formData) {

    // set header vars action...
    let body = new HttpParams();
    body = body.set('form', JSON.stringify(formData));
    body = body.set('action', 'find_golfer');

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((foundGolfers) => {
        // console.log('In greentee918.service.ts ---> -findGolfer(golferToFind)');
        // console.log(foundGolfers);
        this.foundGolfers.next(foundGolfers);
//                if (foundGolfers.userLevel > 0) {
        //                   this.loginComponentVisibility.next(false);
        //             }
      });
  }

  postScore(formData) {

    // console.log('In greentee918.service.ts ---> -postScore()');

    // set header vars action...
    let body = new HttpParams();
    body = body.set('form', JSON.stringify(formData));
//        console.log(JSON.stringify(form_data));

    /*        body = body.set('date', form.date);
  body = body.set('score', form.password);
  body = body.set('course_rating', form.course_rating);
  body = body.set('slope', form.slope);
  body = body.set('number_of_holes', form.number_of_holes);
  body = body.set('home_away', form.home_away);
  body = body.set('tournament_score', form.tournament_score); */
    body = body.set('action', 'post_score_api');

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((loggedInUser: any) => {
        this.user.next(loggedInUser);
        if (loggedInUser.userLevel > 0) {
          this.loginComponentVisibility.next(false);
        }
      });
  }

  updateUserProfile(formData) {

    // console.log('In greentee918.service.ts ---> -updateUserProfile()');
    // console.log(formData);

    // set header vars action...
    let body = new HttpParams();
    body = body.set('form', JSON.stringify(formData));
//        console.log(JSON.stringify(form_data));

    /*        body = body.set('date', form.date);
  body = body.set('score', form.password);
  body = body.set('course_rating', form.course_rating);
  body = body.set('slope', form.slope);
  body = body.set('number_of_holes', form.number_of_holes);
  body = body.set('home_away', form.home_away);
  body = body.set('tournament_score', form.tournament_score); */
    body = body.set('action', 'update_user');

    this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
      .subscribe((updatedUser: any) => {
        // console.log('Greentee918Service::updateUserProfile(formData) -> updatedUser:');
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
    this.hideLoginComponent();
    this.loginComponentVisibility.next(true);
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
    this.loginFormComponentVisibility.next(true);
  }

  hideLoginFormComponent() {
    this.loginFormComponentVisibility.next(false);
  }

  hideFoundGolfersComponent() {
    this.foundGolfers.next(new Array());
  }

  showForgotPasswordComponent() {
    this.forgotPasswordComponentVisibility.next(true);
  }

  hideForgotPasswordComponent() {
    this.forgotPasswordComponentVisibility.next(false);
  }

  hideResponsiveMenu() {
    this.responsiveMenuVisibility.next(false);
  }

  showPasswordResetEmailComponent() {
    this.passwordResetEmailComponentVisibility.next(true);
  }

  hidePasswordResetEmailComponent() {
    // console.log('In greentee918.service.ts - hidePasswordResetEmailComponent()!!');
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
//    console.log("In -> showHomeComponent()");
    this.homeComponentVisibility.next(true);
  }

  hideHomeComponent() {
    this.homeComponentVisibility.next(false);
  }

  showGolferComponent() {
    this.golferComponentVisibility.next(true);
  }

  hideGolferComponent() {
    this.golferComponentVisibility.next(false);
    this.hideScoringComponent();
    this.hideProfileComponent();
  }

  showScoringComponent() {
    // console.log('In greentee918.service.ts ---> showScoringComponent()');
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
    // console.log("showPinFormComponent()")
    this.pinFormComponentVisibility.next(true);
  }

  hidePinFormComponent() {
    this.pinFormComponentVisibility.next(false);
  }
}
