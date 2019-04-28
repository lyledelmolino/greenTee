import { Component, OnInit } from '@angular/core';
import { Greentee918Service } from '../../../../services/greentee918.service';
import { Score } from '../../../../models/Score';

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
    styleUrls: ['../../../../app.component.css', './post-score.component.css'],
    animations: [
        trigger('toggle', [
        state('open', style({ height: '320px' })),
        state('closed', style({ height: '*' })),
        transition('open <=> closed', animate('200ms ease-in-out'))
    ])
  ]
})

export class PostScoreComponent implements OnInit {

    appUser;
    state = 'closed';
    postScoreDetailVisible = false;
    scoreToPost = new Score();

    constructor( private greenTee918Service: Greentee918Service ) {

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
            score: '80',
            course_rating: '78.5',
            slope: '123',
            number_of_holes: '',
            home_away: '',
            tournament_score: '',
            golfer_id: this.appUser.id,
            post_person_id: this.appUser.id
        };
    }

    ngOnInit() {
    }

    postScore() {
        this.greenTee918Service.postScore(this.scoreToPost);
    }

    togglePostScoreDetailVisible() {
//        this.state = (this.state === 'open') ? 'closed' : 'open';
        this.postScoreDetailVisible = !this.postScoreDetailVisible;
    }

    setDetailActuatorClass() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'detail-actuator': true,
            active: this.postScoreDetailVisible

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
}
