import {Component, OnInit, Input} from '@angular/core';
import {Greentee918Service} from '../../../../services/greentee918.service';

@Component({
  selector: 'app-latest-rev-scoring-record',
  templateUrl: './latest-rev-scoring-record.component.html',
  styleUrls: ['../../../../app.component.css', '../scoring.component.css', './latest-rev-scoring-record.component.css']
})
export class LatestRevScoringRecordComponent implements OnInit {

  @Input() aFreeUser;
  @Input() aGolfer;
  latestRevScoringRecordDetailVisible = false;

  constructor(private greenTee918Service: Greentee918Service) {
  }

  ngOnInit() {
    this.greenTee918Service.castUser.subscribe(user => this.aFreeUser = user);

    console.log('In latest-rev-scoring-record.component.ts - ngOnInit()!!');
    console.log(this.aGolfer.clubRoles[0].club.clubId);
    //     console.log(this.appUser);
  }

  setTournamentScoringRecordClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'scoring-record-component': true
    };
    return classes;
  }

  setScoreTableContainerClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'score-table-container': true
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
      'form-largest': true,
      active: this.latestRevScoringRecordDetailVisible
    };

    return classes;
  }

  setContainerContainerClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-container-container': true
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
