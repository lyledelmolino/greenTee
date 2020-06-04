import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from "../../services/greentee918.service";
import {Router} from "@angular/router";
import {CookieService} from 'ngx-cookie-service';
import {DebugService} from "../../services/debug.service";

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent implements OnInit {

  private debugApp;
  private debugModule;

  constructor(private greentee918Service: Greentee918Service,
              private cookieService: CookieService,
              private debugService: DebugService,
              private router: Router) {
  }

  ngOnInit() {

    this.greentee918Service.setDarkMode(true);

    if (this.debugApp || this.debugModule || true) debugger;

    if (this.cookieService.check('user')) {
      let user = this.cookieService.get('user');
      let username = user.substring(0, user.indexOf('&'));
      let password = user.substring(user.indexOf('&') + 1);
      this.greentee918Service.loginUser(username, password, true, this.router);
    } else {
      this.router.navigate(['../home']);
    }
  }
}
