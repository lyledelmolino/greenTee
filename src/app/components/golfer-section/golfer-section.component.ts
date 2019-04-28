import { Component, OnInit } from '@angular/core';
import { Greentee918Service } from '../../services/greentee918.service';

@Component({
  selector: 'app-golfer-section',
  templateUrl: './golfer-section.component.html',
  styleUrls: ['../../app.component.css', './golfer-section.component.css']
})

export class GolferSectionComponent implements OnInit {

    scoringComponentVisible = false;
    profileComponentVisible = false;

    constructor( private greenTee918Service: Greentee918Service ) { }

    ngOnInit() {
        this.greenTee918Service.castScoringComponentVisibility.subscribe(visibility => this.scoringComponentVisible = visibility);
        this.greenTee918Service.castProfileComponentVisibility.subscribe(visibility => this.profileComponentVisible = visibility);
    }

    setGolferMenuClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'golfer-menu': true
        };

        return classes;
    }

    setScoringClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            scoring: true
        };

        return classes;
    }

    setProfileClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            profile: true
        };

        return classes;
    }

}
