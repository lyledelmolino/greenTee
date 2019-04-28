import { Component, OnInit } from '@angular/core';
import { Greentee918Service } from '../../services/greentee918.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    loginComponentVisible = false;
    forgotPasswordComponentVisible = false;

    constructor( private greenTee918Service: Greentee918Service ) { }

    ngOnInit() {
        this.greenTee918Service.castLoginVisibility.subscribe(visibility => this.loginComponentVisible = visibility);
        this.greenTee918Service.castForgotPasswordComponentVisibility.subscribe(visibility => this.forgotPasswordComponentVisible = visibility);
    }

    setHeaderClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'app-header': !(this.loginComponentVisible || this.forgotPasswordComponentVisible),
            'login-header': this.loginComponentVisible || this.forgotPasswordComponentVisible
        };

        return classes;
    }
}
