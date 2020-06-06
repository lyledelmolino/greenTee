import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {AuthGuard} from './auth.guard';
import {LastrouteGuard} from './lastroute.guard';
import {GolferSectionComponent} from "./components/golfer-section/golfer-section.component";
import {HomeComponent} from "./components/home/home.component";
import {DarkModeComponent} from "./components/dark-mode/dark-mode.component";
import {LightModeComponent} from "./components/light-mode/light-mode.component";
import {FindGolferComponent} from "./components/find-golfer/find-golfer.component";
import {AboutComponent} from "./components/about/about.component";
import {RegisterFreeUserComponent} from "./components/register-free-user/register-free-user.component";
import {HeaderComponent} from "./components/header/header.component";
import {MainContentComponent} from "./components/main-content/main-content.component";
import {LoginComponent} from "./components/login/login.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {PasswordResetComponent} from "./components/password-reset/password-reset.component";
import {PasswordResetEmailComponent} from "./components/password-reset-email/password-reset-email.component";
import {PinFormComponent} from "./components/pin-form/pin-form.component";
import {MainMenuComponent} from "./components/main-menu/main-menu.component";
import {PrivacyPolicyComponent} from "./components/privacy-policy/privacy-policy.component";
import {GolferMenuComponent} from "./components/golfer-section/golfer-menu/golfer-menu.component";
import {PostScoreComponent} from "./components/golfer-section/scoring/post-score/post-score.component";
import {ScoringRecordComponent} from "./components/golfer-section/scoring/scoring-record/scoring-record.component";
import {ScoringComponent} from "./components/golfer-section/scoring/scoring.component";
import {ProfileComponent} from "./components/golfer-section/profile/profile.component";
import {BlankComponent} from "./components/blank/blank.component";
import {Greentee918Service} from "./services/greentee918.service";
import {CookieService} from "ngx-cookie-service";
import {DebugService} from "./services/debug.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {animation: 'home'}},
  {path: 'dark-mode', component: DarkModeComponent},
  {path: 'light-mode', component: LightModeComponent},
  {path: 'login', component: LoginComponent, data: {animation: 'login'}},
  {path: 'golfer', component: GolferSectionComponent, canActivate: [AuthGuard]},
  {path: 'register-free-user', component: RegisterFreeUserComponent, data: {animation: 'register-free-user'}},
  {path: 'about', component: AboutComponent, data: {animation: 'about'}},
  {path: 'about/**', component: AboutComponent, data: {animation: 'slideLeft'}},
  {path: 'find-golfer', component: FindGolferComponent, data: {animation: 'find-golfer'}},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'password-reset-email', component: PasswordResetEmailComponent},
  {path: 'initialize-password-reset', component: PinFormComponent},
  {path: 'initialize-subscribe-user', component: PinFormComponent},
  {path: 'password-reset', component: PasswordResetComponent},
  {path: 'main-menu', component: MainMenuComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent, data: {animation: 'privacy-policy'}},
  {path: 'about/privacy-policy', component: PrivacyPolicyComponent, data: {animation: 'privacy-policy'}},
  {path: '%5Cabout%5Cprivacy-policy', component: PrivacyPolicyComponent},
  {path: 'golfer-menu', component: GolferMenuComponent},
  {path: 'post-score', component: PostScoreComponent, canActivate: [AuthGuard], data: {animation: 'post-score'}},
  {path: 'scoring-record', component: ScoringRecordComponent},
  {path: 'scoring', component: ScoringComponent, canActivate: [AuthGuard], data: {animation: 'scoring'}},
  {path: 'profile', component: ProfileComponent, data: {animation: 'profile'}},
  {path: 'blank', component: BlankComponent},
  // {path: '', redirectTo: '', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: '', redirectTo: '', pathMatch: 'full', canActivate: [LastrouteGuard]},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private greenTee918Service: Greentee918Service,
              private cookieService: CookieService,
              private debugService: DebugService,
              private router: Router) {
  }

  ngOnInit() {
  }
}
