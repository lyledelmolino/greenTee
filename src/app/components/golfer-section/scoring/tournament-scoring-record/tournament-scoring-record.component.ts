import { Component, OnInit, Input } from '@angular/core';
import { Greentee918Service } from '../../../../services/greentee918.service';

@Component({
  selector: 'app-tournament-scoring-record',
  templateUrl: './tournament-scoring-record.component.html',
  styleUrls: ['../../../../app.component.css', './tournament-scoring-record.component.css']
})

export class TScoringRecordComponent implements OnInit {

    @Input() scores;
    appUser;
    detailVisible = false;

    constructor( private greenTee918Service: Greentee918Service ) { }

    ngOnInit() {
        this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
    }

    toggleTournamentScoringRecordDetailVisible() {
        this.detailVisible = !this.detailVisible;
    }

    setDetailActuatorClass() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'detail-actuator': true,
            active: this.detailVisible
        };

        return classes;
    }

    setContainerContainerClass() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'container-container': true,
            'container-container-container': true
        };

        return classes;
    }

    setContainerContainerContainerClass() {

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
