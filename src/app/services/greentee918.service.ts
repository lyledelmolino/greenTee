import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


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
    private appUser = {
        userLevel: 0
    };

    private user = new BehaviorSubject<any>(this.appUser);
    private foundGolfers = new BehaviorSubject<any[]>(this.mFoundGolfers);
    private loginComponentVisibility = new BehaviorSubject<any>('');
    private loginFormComponentVisibility = new BehaviorSubject<any>('');
    private forgotPasswordComponentVisibility = new BehaviorSubject<any>('');
    private passwordResetEmailComponentVisibility = new BehaviorSubject<any>('');
    private passwordResetPhoneComponentVisibility = new BehaviorSubject<any>('');
    private homeComponentVisibility = new BehaviorSubject<any>('');
    private findGolferComponentVisibility = new BehaviorSubject<any>('');
    private golferComponentVisibility = new BehaviorSubject<any>('');
    private scoringComponentVisibility = new BehaviorSubject<any>('');
    private profileComponentVisibility = new BehaviorSubject<any>('');
    private clubAdminComponentVisibility = new BehaviorSubject<any>('');
    private adminComponentVisibility = new BehaviorSubject<any>('');
    private aboutComponentVisibility = new BehaviorSubject<any>('');

    castUser = this.user.asObservable();
    castFoundGolfers = this.foundGolfers.asObservable();
    castLoginVisibility = this.loginComponentVisibility.asObservable();
    castLoginFormComponentVisibility = this.loginFormComponentVisibility.asObservable();
    castForgotPasswordComponentVisibility = this.forgotPasswordComponentVisibility.asObservable();
    castPasswordResetEmailComponentVisibility = this.passwordResetEmailComponentVisibility.asObservable();
    castPasswordResetPhoneComponentVisibility = this.passwordResetPhoneComponentVisibility.asObservable();
    castHomeComponentVisibility = this.homeComponentVisibility.asObservable();
    castFindGolferComponentVisibility = this.findGolferComponentVisibility.asObservable();
    castGolferComponentVisibility = this.golferComponentVisibility.asObservable();
    castScoringComponentVisibility = this.scoringComponentVisibility.asObservable();
    castProfileComponentVisibility = this.profileComponentVisibility.asObservable();
    castClubAdminComponentVisibility = this.clubAdminComponentVisibility.asObservable();
    castAdminComponentVisibility = this.adminComponentVisibility.asObservable();
    castAboutComponentVisibility = this.aboutComponentVisibility.asObservable();

    constructor( private http: HttpClient ) {
    }

    logoutUser() {
        let body = new HttpParams();
        body = body.set('action', 'logout_api');

        this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
            .subscribe(loggedOutUser => this.user.next(loggedOutUser));
//        console.log('In greentee918.service.ts ---> logoutUser(): Observable<User>');
        this.hideGolferComponent();
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
                if (loggedInUser.userLevel > 0) {
                    this.loginComponentVisibility.next(false);
                }
        });
        console.log('In greentee918.service.ts ---> loginUser(): Observable<User>');
        console.log(this.appUser);
    }

    findGolfer(formData) {

        // set header vars action...
        let body = new HttpParams();
        body = body.set('form', JSON.stringify(formData));
        body = body.set('action', 'find_golfer');

        this.http.post<any>(this.theURL, body, HTTP_OPTIONS)
            .subscribe((foundGolfers) => {
                console.log('In greentee918.service.ts ---> -findGolfer(golferToFind)');
                console.log(foundGolfers);
                this.foundGolfers.next(foundGolfers);
//                if (foundGolfers.userLevel > 0) {
 //                   this.loginComponentVisibility.next(false);
   //             }
        });
    }

    postScore(formData) {

        console.log('In greentee918.service.ts ---> -postScore()');

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

        console.log('In greentee918.service.ts ---> -updateUserProfile()');
        console.log(formData);

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
                console.log('Greentee918Service::updateUserProfile(formData) -> updatedUser:');
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
        this.loginComponentVisibility.next(true);
    }

    hideLoginComponent() {
        this.loginComponentVisibility.next(false);
    }

    showLoginFormComponent() {
        this.loginFormComponentVisibility.next(true);
    }

    hideLoginFormComponent() {
        this.loginFormComponentVisibility.next(false);
    }

    showForgotPasswordComponent() {
        this.forgotPasswordComponentVisibility.next(true);
    }

    hideForgotPasswordComponent() {
        this.forgotPasswordComponentVisibility.next(false);
    }

    showPasswordResetEmailComponent() {
        this.passwordResetEmailComponentVisibility.next(true);
    }

    hidePasswordResetEmailComponent() {
        console.log('In greentee918.service.ts - hidePasswordResetEmailComponent()!!');
        this.passwordResetEmailComponentVisibility.next(false);
    }

    showPasswordResetPhoneComponent() {
        this.passwordResetPhoneComponentVisibility.next(true);
    }

    hidePasswordResetPhoneComponent() {
        this.passwordResetPhoneComponentVisibility.next(false);
    }

    showHomeComponent() {
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
        console.log('In greentee918.service.ts ---> showScoringComponent()');
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
}
