import {Component, OnInit, Input} from '@angular/core';
import {Greentee918Service} from '../../../../services/greentee918.service';

@Component({
  selector: 'app-current-scoring-record',
  templateUrl: './current-scoring-record.component.html',
  styleUrls: ['../../../../app.component.css', '../../golfer-section.component.css', '../scoring.component.css',  './current-scoring-record.component.css']
})
export class CurrentScoringRecordComponent implements OnInit {

  appUser;
  @Input() aGolfer;
  currentScoringRecordDetailVisible = false;
  isDarkMode = false;

  constructor(private greenTee918Service: Greentee918Service) {
  }

  ngOnInit() {
    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
    this.greenTee918Service.castIsDarkMode.subscribe(isDarkMode => this.isDarkMode = isDarkMode);
  }

  toggleCurrentScoringRecordDetailVisible() {
    this.currentScoringRecordDetailVisible = !this.currentScoringRecordDetailVisible;
  }

  setDetailActuatorClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-actuator': true,
      active: this.currentScoringRecordDetailVisible,
      'dark-mode': this.isDarkMode
    };

    return classes;
  }

  setContainerContainerClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-container-container': true,
      active: this.currentScoringRecordDetailVisible
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

  setScoringRecordClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'scoring-record': true
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
