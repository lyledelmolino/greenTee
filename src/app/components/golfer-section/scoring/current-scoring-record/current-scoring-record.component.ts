import {Component, OnInit, Input} from '@angular/core';
import {Greentee918Service} from '../../../../services/greentee918.service';

@Component({
  selector: 'app-current-scoring-record',
  templateUrl: './current-scoring-record.component.html',
  styleUrls: ['../../../../app.component.css', '../scoring.component.css',  './current-scoring-record.component.css']
})
export class CurrentScoringRecordComponent implements OnInit {

  appUser;
  @Input() aGolfer;
  currentScoringRecordDetailVisible = false;

  constructor(private greenTee918Service: Greentee918Service) {
  }

  ngOnInit() {
    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
  }

  toggleCurrentScoringRecordDetailVisible() {
    this.currentScoringRecordDetailVisible = !this.currentScoringRecordDetailVisible;
  }

  setDetailActuatorClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-actuator': true,
      active: this.currentScoringRecordDetailVisible
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
}
