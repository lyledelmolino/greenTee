import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';
import {Golfer} from '../../models/Golfer';
import {Event as NavigationEvent, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-find-golfer',
  templateUrl: './find-golfer.component.html',
  styleUrls: ['../../app.component.css', '../privacy-policy/privacy-policy.component.css', '../golfer-section/scoring/scoring.component.css', './find-golfer.component.css']
})
export class FindGolferComponent implements OnInit {

  golferToFind = new Golfer();
  searchGolferVisible = true;
  foundGolfersVisible = false;
  foundGolfersScoringRecordVisible: Array<any> = [false];
  foundGolfers: Array<any>;
  isDarkMode = false;
  homeComponentVisibile = false;

  constructor(private greenTee918Service: Greentee918Service,
              private router: Router) {
  }

  ngOnInit() {

    this.greenTee918Service.castFoundGolfers.subscribe(
      foundGolfers => this.foundGolfers = foundGolfers);

    this.greenTee918Service.castIsDarkMode.subscribe(
      isDarkMode => this.isDarkMode = isDarkMode);

    this.greenTee918Service.castHomeComponentVisibility.subscribe(
      homeComponentVisibile => this.homeComponentVisibile = homeComponentVisibile);

    this.golferToFind.state = "state";

    this.searchGolferVisible = this.searchGolferVisible && this.homeComponentVisibile;
    // debugger;
  }

  findGolfer() {
    // debugger;
    if (this.golferToFind.lastName != null && this.golferToFind.lastName != '') {

      this.searchGolferVisible = false;

      this.greenTee918Service.findGolfer(this.golferToFind, this.router);

      this.greenTee918Service.hideHomeComponent();

      // debugger;
      if(this.foundGolfers != null)
      this.foundGolfers.forEach(index => {
        this.foundGolfersScoringRecordVisible[index] = false;
      })
    } else {
      this.greenTee918Service.hideFoundGolfersComponent();
    }
  }

  searchAgain() {
    this.searchGolferVisible = true;
    this.foundGolfers = null;
  }

  toggleFoundGolfersScoringRecordVisible(index, event) {
    this.foundGolfersScoringRecordVisible[index] = !this.foundGolfersScoringRecordVisible[index];
  }

  toggleReset(e) {

  }

  setDetailActuatorClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-actuator': true
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

  setListContainerClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'list-container': true,
    };

    return classes;
  }

  setListItemContainerClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'list-item-container': true,
    };

    return classes;
  }

  setDetailContainerClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-container': true,
      // 'show-container': this.searchGolferVisible,
      // 'hide-container': !this.searchGolferVisible
    };

    return classes;
  }

  setFindGolferClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'profile-form': true,
      'dark-mode': this.isDarkMode
    };

    return classes;
  }

  setScoringComponentClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'scoring-group-component': true
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

  setTriangleAcuatorClasses() {

    let classes = {
      'triangle-down': true,
      'triangle-up': true,
    };

    return classes;
  }

  setSelectStateClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'form-largest': true,
      'grey-default': this.golferToFind.state == 'state'
    };

    return classes;
  }

  setFindGolferButtonClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'common-button': true,
      'dark-mode': this.isDarkMode
    };

    return classes;
  }

  setLatestRevScoringRecordComponentClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'scoring-record': true,
      'show-scoring-record': true
    };

    return classes;
  }

  setScoringRecordButtonClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-actuator-button': true
    };

    return classes;
  }

  setScoringRecordDivClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-actuator': true,
      'show-scoring-record': true
    };

    return classes;
  }

  setSearchAgainButtonClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'common-button': true
    };

    return classes;
  }

  setModeClass(j) {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'dark-mode': this.isDarkMode,
      odd: j % 2 == 0,
      even: j % 2 == 1
    };

    return classes;
  }
}
