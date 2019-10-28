import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../services/greentee918.service';
import {Golfer} from '../../models/Golfer';

@Component({
  selector: 'app-find-golfer',
  templateUrl: './find-golfer.component.html',
  styleUrls: ['../../app.component.css', './find-golfer.component.css']
})
export class FindGolferComponent implements OnInit {

  golferToFind = new Golfer();
  searchGolferVisible = true;
  foundGolfersVisible = false;
  foundGolfersScoringRecordVisible: Array<any> = [''];
  foundGolfers: Array<any>;

  constructor(private greenTee918Service: Greentee918Service) {
  }

  ngOnInit() {
    this.greenTee918Service.castFoundGolfers.subscribe(foundGolfers => this.foundGolfers = foundGolfers);
    this.golferToFind.state = "state";
  }

  findGolfer() {
    // console.log('In findGolfer.component.ts ---> findGolfer() - this.golferToFind.lastName != null');
    // console.log('|' + this.golferToFind.lastName + '|');
    // != null (includes undefined !== does not)
    if (this.golferToFind.lastName != null && this.golferToFind.lastName != '') {
      this.greenTee918Service.findGolfer(this.golferToFind);

      this.searchGolferVisible = false;
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
    // console.log("toggleFoundGolfersScoringRecordVisible(index) !this.foundGolfersScoringRecordVisible[index]:");
    // console.log(!this.foundGolfersScoringRecordVisible[index]);
    this.foundGolfersScoringRecordVisible[index] = !this.foundGolfersScoringRecordVisible[index];
    // if (this.foundGolfersScoringRecordVisible[index]) {
    //   event.target.innerHTML = 'Hide Scoring Record';
    // } else {
    //   event.target.innerHTML = 'Show Scoring Record';
    // }
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
//      'found-golfer': true,
      //just to get it done... ng generate results in error too be fixed later
      'show-container': this.searchGolferVisible,
      'hide-container': !this.searchGolferVisible
    };

    return classes;
  }

  setFindGolferClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'profile-form': true
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
//            'latest-revision-scoring-record': true
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
}
