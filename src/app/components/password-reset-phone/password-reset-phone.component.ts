import { Component, OnInit } from '@angular/core';
import { Greentee918Service } from '../../services/greentee918.service';

@Component({
  selector: 'app-password-reset-phone',
  templateUrl: './password-reset-phone.component.html',
  styleUrls: ['../login/login.component.css', './password-reset-phone.component.css']
})
export class PasswordResetPhoneComponent implements OnInit {

    constructor( private greenTee918Service: Greentee918Service ) { }

    ngOnInit() {
    }

    cancel() {
//       console.log('In password-reset-phone.component.ts - cancel()!!');
        this.greenTee918Service.hidePasswordResetPhoneComponent();
        this.greenTee918Service.showForgotPasswordComponent();
    }

    setResetPasswordPhoneFormClasses() {
        // tslint:disable-next-line:prefer-const
        let classes = {
            'login-form': true
        };

        return classes;
    }

    setResetPasswordPhoneContainerClasses() {
        // tslint:disable-next-line:prefer-const
        let classes = {
            'login-container': true
        };

        return classes;
    }
}
