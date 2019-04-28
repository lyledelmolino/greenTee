import { Component, OnInit } from '@angular/core';
import { Greentee918Service } from '../../../services/greentee918.service';

@Component({
  selector: 'app-golfer-menu',
  templateUrl: './golfer-menu.component.html',
  styleUrls: ['../../main-menu/main-menu.component.css']
})
export class GolferMenuComponent implements OnInit {

    appUser;
    scoringComponentVisible = false;
    profileComponentVisible = false;

    constructor( private greenTee918Service: Greentee918Service ) { }

    ngOnInit() {
        this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
        this.greenTee918Service.castScoringComponentVisibility.subscribe(visibility => this.scoringComponentVisible = visibility);
        this.greenTee918Service.castProfileComponentVisibility.subscribe(visibility => this.profileComponentVisible = visibility);
    }

    setScoringButtonClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            active: this.scoringComponentVisible
        };

        return classes;
    }

    setProfileButtonClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            active: this.profileComponentVisible
        };

        return classes;
    }

    showScoringComponent() {
        this.greenTee918Service.showScoringComponent();
        this.greenTee918Service.hideProfileComponent();
    }

    showProfileComponent() {
        this.greenTee918Service.hideScoringComponent();
        this.greenTee918Service.showProfileComponent();
    }
}
