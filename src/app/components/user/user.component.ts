import { Component, OnInit } from '@angular/core';
import { Greentee918Service } from '../../services/greentee918.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

    appUser;

    constructor( private greenTee918Service: Greentee918Service ) { }

    ngOnInit() {
        this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
    }

    setLoginClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            login: true
        };

        return classes;
    }

    setUserComponentClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            user: true
        };

        return classes;
    }

    showLoginComponent() {
//        console.log('In user.component.ts - showLogin()!!');
        this.greenTee918Service.showLoginComponent();
        this.greenTee918Service.hideFoundGolfersComponent();
        this.greenTee918Service.hideAboutComponent();
    }

    logoutUser() {
        this.greenTee918Service.logoutUser();
    }
}
