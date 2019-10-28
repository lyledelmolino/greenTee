import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from '../../../../services/greentee918.service';
import {Score} from '../../../../models/Score';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

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

  appUser;
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

  constructor(private greenTee918Service: Greentee918Service) {

    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);

    this.scoreToPost = {
      /*            date: '',
                  score: '',
                  course_rating: '',
                  slope: '',
                  number_of_holes: '',
                  home_away: '',
                  tournament_score: '', */
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
  }

  ngDoCheck() {
    // console.log("In ngDoCheck START **********************************************");
    // console.log("In ngDoCheck(1) this.scoreToPost.course_rating: " + this.scoreToPost.course_rating);
    // console.log("In ngDoCheck(1) this.courseRatingNumberOnly: " + this.courseRatingNumberOnly);
    // this.scoreToPost.course_rating = this.courseRatingNumberOnly;
    // console.log("In ngDoCheck(2) this.scoreToPost.course_rating: " + this.scoreToPost.course_rating);
    // console.log("In ngDoCheck(2) this.courseRatingNumberOnly: " + this.courseRatingNumberOnly);
    // console.log("In ngDoCheck FINISH **********************************************");
  }

  postScore() {
    this.greenTee918Service.postScore(this.scoreToPost);
  }

  inputMaxChars(e) {
    console.log("In inputMaxChars START **********************************************");
    console.log("In inputMaxChars(1) this.scoreToPost.score: " + this.scoreToPost.score);
    console.log("In inputMaxChars(1) this.scoreToPost.score.length: " + this.scoreToPost.score.length);
    if (this.scoreToPost.score.length > 3) {
      console.log("In inputMaxChars(2) this.scoreToPost.score: " + this.scoreToPost.score);
      this.scoreToPost.score = this.scoreToPost.score.substring(0, this.scoreToPost.score.length - 1);
    }
  }

//todo: make this more generic... priority after deploy low
//todo: key stroke call stack ??
  inputOnlyIntegerScore(e) {

    console.log("In inputOnlyIntegerScore START **********************************************");
    console.log("In inputOnlyIntegerScore(1) this.scoreToPost.score: " + this.scoreToPost.score);

    this.input_value = this.scoreToPost.score + e.key;
    console.log("In inputOnlyIntegerScore(1) e.key: " + e.key);
    // if (e.key.toLowerCase() == 'unidentified') {
    //   this.scoreValid = true;
    //   return;
    // }

    //todo: takes e as input not sure why??
    if (parseInt(this.scoreToPost.score) > 20 && parseInt(this.scoreToPost.score) < 200) {
      this.input_value = this.input_value + ' valid';
      this.scoreValid = true;
    } else {
      this.input_value = this.input_value + ' invalid';
      this.scoreValid = false;
    }
    // let input = parseInt(e.key);
    // // don't accept key input from any key not a integer or one of the listed keycodes...
    // // if ((e.shiftKey || (e.key < 48 || e.key > 57)) && (e.key < 96 || e.key > 105)
    // if ((e.shiftKey || (isNaN(input)))
    //   && e.key !== "Backspace"	// backspace
    //   //      && e.key !== " "	// delete
    //   && e.key !== "Delete"	// delete
    // //    && e.key !== 37	// left arrow
    // //  && e.key !== 39	// right arrow
    // //&& e.key !== 9	// tab
    // ) {
    //   //its not a number ect...
    //   // console.log("In suppress keystroke")
    //   this.scoreToPost.score = this.scoreNumberOnly == null ? '' : this.scoreNumberOnly;
    //   return;
    // }
    // //its a number!
    // // console.log("Out of suppress keystroke")
    // this.scoreNumberOnly = this.scoreToPost.score;
    return;
  }

  inputOnlyIntegerSlope(e) {
    // console.log("In inputOnlyIntegerSlope(e) e.key: " + e.key);
    // console.log("In inputOnlyIntegerSlope(e) parseInt(e.key): " + parseInt(e.key));
    // console.log("In inputOnlyIntegerSlope(e) this.slopeNumberOnly: " + this.slopeNumberOnly);
    this.input_value = this.scoreToPost.slope;
    console.log("In inputOnlyIntegerSlope(1) e.key: " + e.key);
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
    // if ((e.shiftKey || (e.key < 48 || e.key > 57)) && (e.key < 96 || e.key > 105)
    if ((e.shiftKey || (isNaN(input)))
      && e.key !== "Backspace"	// backspace
      && e.key !== " "	// delete
      && e.key !== "Delete"	// delete
    ) {
      //its not a number ect...
      console.log("In suppress keystroke")
      console.log("In inputOnlyIntegerSlope(2) e.key: " + e.key);
      console.log("In inputOnlyIntegerSlope(2) parseInt(e.key): " + parseInt(e.key));
      // console.log("In inputOnlyIntegerSlope(2) this.scoreToPost.slope.length: " + this.scoreToPost.slope.length);

      // this.scoreToPost.course_rating = this.courseRatingNumberOnly;
      console.log("In inputOnlyIntegerSlope(4) this.scoreToPost.slope: " + this.scoreToPost.slope);
      console.log("In inputOnlyIntegerSlope END (ignore) **********************************************");
      //this.scoreToPost.slope = this.scoreToPost.slope.toString().substring(0, this.scoreToPost.slope.toString().length - 1);
      return false;
    }

    return;
  }

  inputOnlyCourseRating(e) {

    this.input_value = this.scoreToPost.course_rating;
    // console.log("In inputOnlyIntegerSlope(1) e.key: " + e.key);
    if (e.key.toLowerCase() == 'unidentified') {
      this.courseRatingValid = true;
      return true;
    }

    // console.log("In inputOnlyCourseRating START **********************************************");
    // console.log("In inputOnlyCourseRating(1) this.scoreToPost.course_rating: " + this.scoreToPost.course_rating);
    //
    // console.log("In inputOnlyCourseRating(e) e.key: " + e.key);
    // console.log("In inputOnlyCourseRating(e) parseInt(e.key): " + parseInt(e.key));
    // console.log("In inputOnlyCourseRating(e) this.courseRatingNumberOnly.length: " + this.courseRatingNumberOnly.length);

    let input = parseInt(e.key);

    // don't accept key input from any key not a integer or one of the listed keycodes...
    // if ((e.shiftKey || (e.key < 48 || e.key > 57)) && (e.key < 96 || e.key > 105)
    if ((e.shiftKey || (isNaN(input)))
      && e.key !== "Backspace"	// backspace
      && e.key !== " "	// delete
      && e.key !== "Delete"	// delete
    ) {
      //its not a number ect...
      // console.log("In suppress keystroke")
      // console.log("In inputOnlyCourseRating(2) e.key: " + e.key);
      // console.log("In inputOnlyCourseRating(2) parseInt(e.key): " + parseInt(e.key));
      // console.log("In inputOnlyCourseRating(2) this.scoreToPost.course_rating.length: " + this.scoreToPost.course_rating.length);

      if (this.scoreToPost.course_rating.length == 3 && e.key == ".") {
        this.courseRatingNumberOnly = this.scoreToPost.course_rating + e.key;
        // console.log("In inputOnlyCourseRating(3) this.courseRatingNumberOnly: " + this.courseRatingNumberOnly);
        // console.log("In inputOnlyCourseRating(3) this.scoreToPost.course_rating: " + this.scoreToPost.course_rating);
        // console.log("In inputOnlyCourseRating END (accept .) **********************************************");
        return true;
      }

      // this.scoreToPost.course_rating = this.courseRatingNumberOnly;
      // console.log("In inputOnlyCourseRating(4) this.courseRatingNumberOnly: " + this.courseRatingNumberOnly);
      // console.log("In inputOnlyCourseRating(4) this.scoreToPost.course_rating: " + this.scoreToPost.course_rating);
      // console.log("In inputOnlyCourseRating END (ignore) **********************************************");
      this.scoreToPost.course_rating = this.scoreToPost.course_rating.substring(0, this.scoreToPost.course_rating.length - 1);
      return false;
    }

    //its a number! and its the . place ignore...
    if (this.scoreToPost.course_rating.length == 3 && !isNaN(input)) {
      // this.scoreToPost.course_rating = this.courseRatingNumberOnly;
      // console.log("In inputOnlyCourseRating(5) this.courseRatingNumberOnly: " + this.courseRatingNumberOnly);
      // console.log("In inputOnlyCourseRating(5) this.scoreToPost.course_rating: " + this.scoreToPost.course_rating);
      // console.log("In inputOnlyCourseRating END (ignore #) **********************************************");
      this.scoreToPost.course_rating = this.scoreToPost.course_rating.substring(0, this.scoreToPost.course_rating.length - 1)
      return false;
    }

    // console.log("Out of suppress keystroke")

    // this.courseRatingNumberOnly = this.scoreToPost.course_rating;
    // this.courseRatingNumberOnly = this.courseRatingNumberOnly + e.key;

    // console.log("In inputOnlyCourseRating(6) this.courseRatingNumberOnly: " + this.courseRatingNumberOnly);
    // console.log("In inputOnlyCourseRating(6) this.scoreToPost.course_rating: " + this.scoreToPost.course_rating);
    // console.log("In inputOnlyCourseRating END **********************************************");

    return true;
  }

  isIntegerValid(e) {
    // console.log("In inputOnlyInteger(e) e.key: " + e.key);
    // console.log("In inputOnlyInteger(e) parseInt(e.key): " + parseInt(e.key));
    // console.log("In inputOnlyInteger(e) this.componentForm.locations[0].aAddress.zipCode: " + this.componentForm.locations[0].aAddress.zipCode);
    let input = parseInt(e.key);
    // don't accept key input from any key not a integer or one of the listed keycodes...
    // if ((e.shiftKey || (e.key < 48 || e.key > 57)) && (e.key < 96 || e.key > 105)
    if ((e.shiftKey || (isNaN(input)))
      && e.key !== "Backspace"	// backspace
      && e.key !== " "	// delete
      && e.key !== "Delete"	// delete
      && e.key !== 37	// left arrow
      && e.key !== 39	// right arrow
      && e.key !== 9	// tab
    ) {
      //its not a number ect...
      // console.log("In suppress keystroke")
      return false;
    }

    //its a number!
    // console.log("Out of suppress keystroke")
    // this.scoreNumberOnly = this.scoreToPost.score;
    return true;
  }

  togglePostScoreDetailVisible() {
//        this.state = (this.state === 'open') ? 'closed' : 'open';
    this.postScoreDetailVisible = !this.postScoreDetailVisible;
  }

  setDetailActuatorClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-actuator': true,
      'form-largest': true,
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
}
