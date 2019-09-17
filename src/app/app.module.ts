import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Greentee918Service } from './services/greentee918.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PasswordResetEmailComponent } from './components/password-reset-email/password-reset-email.component';
import { PasswordResetPhoneComponent } from './components/password-reset-phone/password-reset-phone.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { HomeComponent } from './components/home/home.component';
import { FindGolferComponent } from './components/find-golfer/find-golfer.component';
import { GolferSectionComponent } from './components/golfer-section/golfer-section.component';
import { ScoringComponent } from './components/golfer-section/scoring/scoring.component';
import { PostScoreComponent } from './components/golfer-section/scoring/post-score/post-score.component';
// tslint:disable-next-line:max-line-length
import { LatestRevScoringRecordComponent } from './components/golfer-section/scoring/latest-rev-scoring-record/latest-rev-scoring-record.component';
// tslint:disable-next-line:max-line-length
import { TwoLowEligibleTScoresComponent } from './components/golfer-section/scoring/two-low-eligible-t-scores/two-low-eligible-t-scores.component';
import { TScoringRecordComponent } from './components/golfer-section/scoring/tournament-scoring-record/tournament-scoring-record.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CurrentScoringRecordComponent } from './components/golfer-section/scoring/current-scoring-record/current-scoring-record.component';
import { ClubAdminComponent } from './components/club-admin/club-admin.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/golfer-section/profile/profile.component';
import { AffiliationsComponent } from './components/golfer-section/profile/affiliations/affiliations.component';
import { AddressComponent } from './components/golfer-section/profile/address/address.component';
import { EmailComponent } from './components/golfer-section/profile/email/email.component';
import { PhoneComponent } from './components/golfer-section/profile/phone/phone.component';
import { AddressserveComponent } from './components/golfer-section/profile/addressserve/addressserve.component';
import { GolferMenuComponent } from './components/golfer-section/golfer-menu/golfer-menu.component';
import { ScoreComponent } from './components/golfer-section/scoring/score/score.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { FreeTrialComponent } from './components/free-trial/free-trial.component';
import { PinFormComponent } from './components/free-trial/pin-form/pin-form.component';
import { RegisterFreeUserComponent } from './components/register-free-user/register-free-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ForgotPasswordComponent,
    PasswordResetEmailComponent,
    PasswordResetPhoneComponent,
    MainAppComponent,
    HeaderComponent,
    MainContentComponent,
    HomeComponent,
    FindGolferComponent,
    GolferSectionComponent,
    ScoringComponent,
    PostScoreComponent,
    LatestRevScoringRecordComponent,
    TwoLowEligibleTScoresComponent,
    TScoringRecordComponent,
    MainMenuComponent,
    CurrentScoringRecordComponent,
    ClubAdminComponent,
    AdminComponent,
    AboutComponent,
    ProfileComponent,
    AffiliationsComponent,
    AddressComponent,
    EmailComponent,
    PhoneComponent,
    AddressserveComponent,
    GolferMenuComponent,
    ScoreComponent,
    LoginFormComponent,
    FreeTrialComponent,
    PinFormComponent,
    RegisterFreeUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [Greentee918Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
