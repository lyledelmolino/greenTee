import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Greentee918Service} from './services/greentee918.service';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  appUser;

  constructor(private greenTee918Service: Greentee918Service,
              private cookieService: CookieService,
              private router: Router) {
    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.appUser.userLevel > 599) {
      return true;
    } else {
      this.router.navigate(['/home']);
    }
  }
}
