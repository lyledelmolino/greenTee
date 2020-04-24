import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../../../services/greentee918.service';
import {Score} from '../../../../models/Score';
import {DebugService} from "../../../../services/debug.service";
import {formatDate} from "@angular/common";

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-score',
  templateUrl: './post-score.component.html',
  styleUrls: ['../../../../app.component.css', '../scoring.component.css', './post-score.component.css'],
  animations: [
    trigger('toggle', [
      state('open', style({height: '320px'})),
      state('closed', style({height: '*'})),
      transition('open <=> closed', animate('200ms ease-in-out'))
    ])
  ]
})

export class PostScoreComponent implements OnInit {

  debugApp;
  debugComponent;
  appUser;
  today = formatDate(new Date(), 'yyy-MM-dd', 'en');
  state = 'closed';
  checked = 'checked';
  postScoreDetailVisible = false;
  scoreToPost = new Score();
  private scoreNumberOnly: string = "";
  private scoreValid = true;
  private courseRatingNumberOnly: string = "";
  private courseRatingValid = true;
  private slopeNumberOnly: string = "";
  private slopeValid = false;
  input_value: any;

  constructor(private greenTee918Service: Greentee918Service, private debugService: DebugService) {

    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);

    this.scoreToPost = {
      date: '',
      score: '',
      course_rating: '',
      slope: '',
      number_of_holes: '18',
      home_away: 'H',
      tournament_score: '',
      golfer_id: this.appUser.id,
      post_person_id: this.appUser.id
    };
  }

  ngOnInit() {
    this.debugService.castDebugApp.subscribe(debugApp => this.debugApp = debugApp);
    this.debugService.castDebugPostScoreComponent.subscribe(debugComponent => this.debugComponent = debugComponent);
  }

  postScore() {
    if (this.debugApp || this.debugComponent) debugger;
    this.greenTee918Service.postScore(this.scoreToPost);
  }

  inputMaxChars(e) {
    if (this.scoreToPost.score.length > 3) {
      console.log("In inputMaxChars(2) this.scoreToPost.score: " + this.scoreToPost.score);
      this.scoreToPost.score = this.scoreToPost.score.substring(0, this.scoreToPost.score.length - 1);
    }
  }

//todo: make this more generic... priority after deploy low
//todo: key stroke call stack ??
  inputOnlyIntegerScore(e) {

    this.input_value = this.scoreToPost.score + e.key;

    //todo: takes e as input not sure why??
    if (parseInt(this.scoreToPost.score) > 20 && parseInt(this.scoreToPost.score) < 200) {
      this.input_value = this.input_value + ' valid';
      this.scoreValid = true;
    } else {
      this.input_value = this.input_value + ' invalid';
      this.scoreValid = false;
    }

    return;
  }

  inputOnlyIntegerSlope(e) {
    this.input_value = this.scoreToPost.slope;
    if (e.key.toLowerCase() == 'unidentified') {
      this.slopeValid = true;
      return;
    }

    if (parseInt(this.scoreToPost.slope) > 26 && parseInt(this.scoreToPost.slope) < 156) {
      this.slopeValid = true;
    } else {
      this.slopeValid = false;
    }

    let input = parseInt(e.key);
    // don't accept key input from any key not a integer or one of the listed keycodes...
    if ((e.shiftKey || (isNaN(input)))
      && e.key !== "Backspace"	// backspace
      && e.key !== " "	// delete
      && e.key !== "Delete"	// delete
    ) {

      return false;
    }

    return;
  }

  inputOnlyCourseRating(e) {

    this.input_value = this.scoreToPost.course_rating;
    if (e.key.toLowerCase() == 'unidentified') {
      this.courseRatingValid = true;
      return true;
    }

    let input = parseInt(e.key);

    // don't accept key input from any key not a integer or one of the listed keycodes...
    if ((e.shiftKey || (isNaN(input)))
      && e.key !== "Backspace"	// backspace
      && e.key !== " "	// delete
      && e.key !== "Delete"	// delete
    ) {

      if (this.scoreToPost.course_rating.length == 3 && e.key == ".") {
        this.courseRatingNumberOnly = this.scoreToPost.course_rating + e.key;
        return true;
      }

      // this.scoreToPost.course_rating = this.courseRatingNumberOnly;
      this.scoreToPost.course_rating = this.scoreToPost.course_rating.substring(0, this.scoreToPost.course_rating.length - 1);
      return false;
    }

    //its a number! and its the . place ignore...
    if (this.scoreToPost.course_rating.length == 3 && !isNaN(input)) {
      this.scoreToPost.course_rating = this.scoreToPost.course_rating.substring(0, this.scoreToPost.course_rating.length - 1)
      return false;
    }

    return true;
  }

  isIntegerValid(e) {
    let input = parseInt(e.key);
    // don't accept key input from any key not a integer or one of the listed keycodes...
    if ((e.shiftKey || (isNaN(input)))
      && e.key !== "Backspace"	// backspace
      && e.key !== " "	// delete
      && e.key !== "Delete"	// delete
      && e.key !== 37	// left arrow
      && e.key !== 39	// right arrow
      && e.key !== 9	// tab
    ) {
      //its not a number ect...
      return false;
    }

    //its a number!
    return true;
  }

  togglePostScoreDetailVisible() {
    this.postScoreDetailVisible = !this.postScoreDetailVisible;
  }

  setDetailActuatorClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-actuator': true,
      'post-score': true,
      active: this.postScoreDetailVisible
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

  setDetailContainerClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-container': true
    };

    return classes;
  }

  setPostScoreClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'post-score-form': true
//            form: true
    };

    return classes;
  }

  setChecked() {

    // tslint:disable-next-line:prefer-const
    let checked = {
      'checked': true
    };

    return checked;
  }

  setPostScoreFormClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'form-horizontal': true
    };

    return classes;
  }

  setPostScoreButtonClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'common-button': true
    };

    return classes;
  }
}
