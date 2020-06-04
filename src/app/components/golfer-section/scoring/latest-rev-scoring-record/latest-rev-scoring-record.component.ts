import {Component, OnInit, Input} from '@angular/core';
import {Greentee918Service} from '../../../../services/greentee918.service';

@Component({
  selector: 'app-latest-rev-scoring-record',
  templateUrl: './latest-rev-scoring-record.component.html',
  styleUrls: ['../../../../app.component.css', '../../golfer-section.component.css', '../scoring.component.css', './latest-rev-scoring-record.component.css']
})
export class LatestRevScoringRecordComponent implements OnInit {

  @Input() aFreeUser;
  @Input() aGolfer;
  latestRevScoringRecordDetailVisible = false;
  isDarkMode = false;

  constructor(private greenTee918Service: Greentee918Service) {
    this.greenTee918Service.castIsDarkMode.subscribe(isDarkMode => this.isDarkMode = isDarkMode);
  }

  ngOnInit() {
    this.greenTee918Service.castUser.subscribe(user => this.aFreeUser = user);
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
      active: this.latestRevScoringRecordDetailVisible,
      'dark-mode': this.isDarkMode
    };

    return classes;
  }

  setContainerContainerClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-container-container': true,
      active: this.latestRevScoringRecordDetailVisible
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

  setContainerClass() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      active: this.latestRevScoringRecordDetailVisible
    };

    return classes;
  }

  setTriangleDownClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'triangle': true,
      'down': true,
      'dark-mode': this.isDarkMode
    };

    return classes;
  }

  setTriangleUpClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'triangle': true,
      'up': true,
      'dark-mode': this.isDarkMode
    };

    return classes;
  }
}
