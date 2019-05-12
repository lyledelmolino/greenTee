import { Component, OnInit } from '@angular/core';
import { Greentee918Service } from '../../services/greentee918.service';
import { Golfer } from '../../models/Golfer';

@Component({
  selector: 'app-find-golfer',
  templateUrl: './find-golfer.component.html',
  styleUrls: ['./find-golfer.component.css', '../../app.component.css']
})
export class FindGolferComponent implements OnInit {

    golferToFind = new Golfer();
    foundGolfersVisible = false;
    foundGolfersScoringRecordVisible: Array<any> = [''];
    foundGolfers: Array<any>;
//    foundGolfers: Array<any> = [''];

    constructor( private greenTee918Service: Greentee918Service ) {}

    ngOnInit() {
        this.greenTee918Service.castFoundGolfers.subscribe(foundGolfers => this.foundGolfers = foundGolfers);
    }

    findGolfer() {
        console.log('In findGolfer.component.ts ---> findGolfer() - this.golferToFind.lastName != null');
        console.log('|'+this.golferToFind.lastName+'|');
        // != null (includes undefined !== does not)
        if( this.golferToFind.lastName != null && this.golferToFind.lastName != '' ) {
            this.greenTee918Service.findGolfer(this.golferToFind);
            this.foundGolfers.forEach( index => {
                this.foundGolfersScoringRecordVisible[index] = false;
            }) 
        } else {
            this.greenTee918Service.hideFoundGolfersComponent();
        }
    }

    toggleFoundGolfersScoringRecordVisible(index) {
        this.foundGolfersScoringRecordVisible[index] = !this.foundGolfersScoringRecordVisible[index];
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

    setDetailContainerClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            'detail-container': true,
            'found-golfer': true
        };

        return classes;
    }

    setFindGolferClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
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
}
