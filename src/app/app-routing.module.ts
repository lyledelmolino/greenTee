import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import {GolferSectionComponent} from "./components/golfer-section/golfer-section.component";
import {HomeComponent} from "./components/home/home.component";
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
import {BlankComponent} from "./components/blank/blank.component";

const routes: Routes = [
  // {path: 'home', component: HeaderComponent, outlet: "main-app"},
  // {path: '', component: MainContentComponent, outlet: "top-level"},
  // {path: 'login', component: LoginComponent, outlet: "top-level"},
  // {path: 'home', component: HomeComponent, outlet: "main-content"},
  // {path: 'golfer', component: GolferSectionComponent, outlet: "main-content"},
  // {path: 'register-free-user', component: RegisterFreeUserComponent, outlet: "main-content"},
  // {path: 'about', component: AboutComponent, outlet: "main-content"},
  // {path: 'forgot-password', component: ForgotPasswordComponent},
  // {path: 'password-reset-email', component: PasswordResetEmailComponent},
  // {path: 'initialize-password-reset', component: PinFormComponent},
  // {path: 'initialize-subscribe-user', component: PinFormComponent},
  // {path: 'password-reset', component: PasswordResetComponent},
  // {path: 'main-menu', component: MainMenuComponent, outlet: "main-content"},
  // {path: 'golfer-menu', component: GolferMenuComponent, outlet: "main-content"},
//  {path: '', redirectTo: '/home', pathMatch: 'full'}
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'golfer', component: GolferSectionComponent, canActivate: [AuthGuard]},
  {path: 'register-free-user', component: RegisterFreeUserComponent},
  {path: 'about', component: AboutComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'password-reset-email', component: PasswordResetEmailComponent},
  {path: 'initialize-password-reset', component: PinFormComponent},
  {path: 'initialize-subscribe-user', component: PinFormComponent},
  {path: 'password-reset', component: PasswordResetComponent},
  {path: 'main-menu', component: MainMenuComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'golfer-menu', component: GolferMenuComponent},
  {path: 'blank', component: BlankComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
