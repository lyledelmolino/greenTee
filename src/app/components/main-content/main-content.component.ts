import { Component, OnInit } from '@angular/core';
import { Greentee918Service } from '../../services/greentee918.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

    homeComponentVisible = true;
    golferComponentVisible = false;
    clubAdminComponentVisible = false;
    adminComponentVisible = false;
    aboutComponentVisible = false;

    constructor( private greenTee918Service: Greentee918Service ) { }

    ngOnInit() {
        this.greenTee918Service.castHomeComponentVisibility.subscribe(visibility => this.homeComponentVisible = visibility);
        this.greenTee918Service.castGolferComponentVisibility.subscribe(visibility => this.golferComponentVisible = visibility);
        this.greenTee918Service.castClubAdminComponentVisibility.subscribe(visibility => this.clubAdminComponentVisible = visibility);
        this.greenTee918Service.castAdminComponentVisibility.subscribe(visibility => this.adminComponentVisible = visibility);
        this.greenTee918Service.castAboutComponentVisibility.subscribe(visibility => this.aboutComponentVisible = visibility);
    }

    setMainMenuClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'main-menu': true
        };

        return classes;
    }

    setHomeClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            /* 'main-menu': true */
        };

        return classes;
    }

    setGolferClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            golfer: true
        };

        return classes;
    }

    setClubAdminClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'club-admin': true
        };

        return classes;
    }

    setAdminClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            admin: true
        };

        return classes;
    }

    setAboutClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            about: true
        };

        return classes;
    }

}
