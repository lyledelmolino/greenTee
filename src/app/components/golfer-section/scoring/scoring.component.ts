import { Component, OnInit } from '@angular/core';
import { Greentee918Service } from '../../../services/greentee918.service';

@Component({
    selector: 'app-scoring',
    templateUrl: './scoring.component.html',
    styleUrls: ['../../../app.component.css', './scoring.component.css'],
})

export class ScoringComponent implements OnInit {

    appUser;

    constructor( private greenTee918Service: Greentee918Service ) { }

    ngOnInit() {
        this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
    }

    setScoringComponentClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'scoring-group-component container-container': true
        };

        return classes;
    }

  setDetailContainerClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-container': true
    };

    return classes;
  }

  setContainerContainerClass() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'container-container': true
        };

        return classes;
    }

    setPostScoreClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'post-score': true
        };

        return classes;
    }

    setScoringRecordClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'scoring-record': true
        };

        return classes;
    }

    setCurrentScoringRecordClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'current-scoring-record': true
        };

        return classes;
    }

  setDetailActuateClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'scoring-record': true
    };

    return classes;
  }
}
