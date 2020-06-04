import {Component, OnInit, Input} from '@angular/core';
import {Greentee918Service} from '../../../../services/greentee918.service';

@Component({
  selector: 'app-two-low-eligible-t-scores',
  templateUrl: './two-low-eligible-t-scores.component.html',
  styleUrls: ['../../../../app.component.css', '../scoring.component.css', './two-low-eligible-t-scores.component.css']
})
export class TwoLowEligibleTScoresComponent implements OnInit {

  appUser;
  @Input() scores;
  detailVisible = false;
  isDarkMode = false;

  constructor(private greenTee918Service: Greentee918Service) {
  }

  ngOnInit() {
    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
    this.greenTee918Service.castIsDarkMode.subscribe(isDarkMode => this.isDarkMode = isDarkMode);
  }

  toggleDetailVisible() {
    this.detailVisible = !this.detailVisible;
  }

  setDetailActuatorClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-actuator': true,
      active: this.detailVisible,
      'dark-mode': this.isDarkMode
    };

    return classes;
  }

  setContainerContainerClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-container-container': true,
      'container-container-container': true
    };

    return classes;
  }

  setContainerContainerContainerClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'container-container-container': true
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

  setScoreTableContainerClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'score-table-container': true
    };
    return classes;
  }

  setScoringRecordContainerClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'scoring-record': true,
      'dark-mode': this.isDarkMode
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
