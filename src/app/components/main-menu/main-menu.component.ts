import { Component, OnInit } from '@angular/core';
import { Greentee918Service } from '../../services/greentee918.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

    appUser;
    homeComponentVisible = true;
    golferComponentVisible = false;
    clubAdminComponentVisible = false;
    adminComponentVisible = false;
    aboutComponentVisible = false;
    responsiveMenuVisible = false;
    animateArrowDown = false;
    animateArrowUp = true;

    constructor( private greenTee918Service: Greentee918Service ) { }

    ngOnInit() {
        this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
        this.greenTee918Service.castHomeComponentVisibility.subscribe(visibility => this.homeComponentVisible = visibility);
        this.greenTee918Service.castGolferComponentVisibility.subscribe(visibility => this.golferComponentVisible = visibility);
        this.greenTee918Service.castClubAdminComponentVisibility.subscribe(visibility => this.clubAdminComponentVisible = visibility);
        this.greenTee918Service.castAdminComponentVisibility.subscribe(visibility => this.adminComponentVisible = visibility);
        this.greenTee918Service.castAboutComponentVisibility.subscribe(visibility => this.aboutComponentVisible = visibility);
    }

    setArrowClasses() {
        // tslint:disable-next-line:prefer-const
        let classes = {
            'animate-arrow-down': this.animateArrowDown,
            'animate-arrow-up': this.animateArrowUp

        };

        return classes;
    }

    setHomeButtonClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            active: this.homeComponentVisible,
            'responsive-menu': this.responsiveMenuVisible,
        };

        return classes;
    }

    setGolferButtonClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            active: this.golferComponentVisible,
            'responsive-menu': this.responsiveMenuVisible
        };

        return classes;
    }

    setClubAdminButtonClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            active: this.clubAdminComponentVisible,
            'responsive-menu': this.responsiveMenuVisible
        };

        return classes;
    }

    setAdminButtonClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            active: this.adminComponentVisible,
            'responsive-menu': this.responsiveMenuVisible
        };

        return classes;
    }

    setAboutButtonClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            active: this.aboutComponentVisible,
            'responsive-menu': this.responsiveMenuVisible
        };

        return classes;
    }

    showResponsiveMenu() {
        this.responsiveMenuVisible = true;
        this.greenTee918Service.hideHomeComponent();
        this.greenTee918Service.hideGolferComponent();
        this.greenTee918Service.hideClubAdminComponent();
        this.greenTee918Service.hideAdminComponent();
        this.greenTee918Service.hideAboutComponent();
    }

    showHomeComponent() {
        this.responsiveMenuVisible = false;
        this.animateArrowDown = !this.animateArrowDown;
        this.animateArrowUp = !this.animateArrowUp;
        this.greenTee918Service.showHomeComponent();
        this.greenTee918Service.hideGolferComponent();
        this.greenTee918Service.hideClubAdminComponent();
        this.greenTee918Service.hideAdminComponent();
        this.greenTee918Service.hideAboutComponent();
    }

    showGolferComponent() {
        this.responsiveMenuVisible = false;
        this.greenTee918Service.hideHomeComponent();
        this.greenTee918Service.showGolferComponent();
        this.greenTee918Service.hideClubAdminComponent();
        this.greenTee918Service.hideAdminComponent();
        this.greenTee918Service.hideAboutComponent();
    }

    showClubAdminComponent() {
        this.responsiveMenuVisible = false;
        this.greenTee918Service.hideHomeComponent();
        this.greenTee918Service.hideGolferComponent();
        this.greenTee918Service.showClubAdminComponent();
        this.greenTee918Service.hideAdminComponent();
        this.greenTee918Service.hideAboutComponent();
    }

    showAdminComponent() {
        this.responsiveMenuVisible = false;
        this.greenTee918Service.hideHomeComponent();
        this.greenTee918Service.hideGolferComponent();
        this.greenTee918Service.hideClubAdminComponent();
        this.greenTee918Service.showAdminComponent();
        this.greenTee918Service.hideAboutComponent();
    }

    showAboutComponent() {
        this.responsiveMenuVisible = false;
        this.greenTee918Service.hideHomeComponent();
        this.greenTee918Service.hideGolferComponent();
        this.greenTee918Service.hideClubAdminComponent();
        this.greenTee918Service.hideAdminComponent();
        this.greenTee918Service.showAboutComponent();
    }
}
