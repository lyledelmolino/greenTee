import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['../../../../app.component.css', './score.component.css']
})

export class ScoreComponent implements OnInit {

    @Input() scores;

    constructor() { }

    ngOnInit() {
    }

    setScoreTableClass() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'score-table': true
        };

        return classes;
    }
}
