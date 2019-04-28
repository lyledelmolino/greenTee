import { Component, OnInit } from '@angular/core';
import { Greentee918Service } from '../../services/greentee918.service';

@Component({
  selector: 'app-password-reset-email',
  templateUrl: './password-reset-email.component.html',
  styleUrls: ['../login/login.component.css', './password-reset-email.component.css']
})
export class PasswordResetEmailComponent implements OnInit {

    constructor( private greenTee918Service: Greentee918Service ) { }

    ngOnInit() { }

    cancel() {
//       console.log('In password-reset-email.component.ts - cancel()!!');
        this.greenTee918Service.hidePasswordResetEmailComponent();
        this.greenTee918Service.showForgotPasswordComponent();
    }

    setResetPasswordEmailFormClasses() {
        // tslint:disable-next-line:prefer-const
        let classes = {
            'login-form': true
        };

        return classes;
    }

    setResetPasswordEmailContainerClasses() {
        // tslint:disable-next-line:prefer-const
        let classes = {
            'login-container': true
        };

        return classes;
    }
}
