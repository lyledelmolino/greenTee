import { Component, OnInit, Input } from '@angular/core';
import { Greentee918Service } from '../../../../services/greentee918.service';

@Component({
  selector: 'app-latest-rev-scoring-record',
  templateUrl: './latest-rev-scoring-record.component.html',
  styleUrls: ['../../../../app.component.css', './latest-rev-scoring-record.component.css']
})
export class LatestRevScoringRecordComponent implements OnInit {

    @Input() appUser;
    @Input() aGolfer;
    latestRevScoringRecordDetailVisible = false;

    constructor( private greenTee918Service: Greentee918Service ) { }

    ngOnInit() {
//        this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
        console.log('In latest-rev-scoring-record.component.ts - ngOnInit()!!');
        console.log(this.appUser);
    }

    setTournamentScoringRecordClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            tournamentScoringRecord: true
        };
        return classes;
    }

    setTwoLowEligibleTScoresClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            twoLowEligibleTScores: true
        };

        return classes;
    }

    toggleLatestRevScoringRecordDetailVisible() {
        this.latestRevScoringRecordDetailVisible = !this.latestRevScoringRecordDetailVisible;
    }

    setDetailActuatorClass() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'detail-actuator': true,
            active: this.latestRevScoringRecordDetailVisible
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

    setDetailContainerClass() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'detail-container': true
        };

        return classes;
    }

    setScoringRecordClass() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'score-table': true
        };

        return classes;
    }
}
