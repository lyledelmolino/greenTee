import { Component, OnInit } from '@angular/core';
import {Greentee918Service} from "../../../../services/greentee918.service";

@Component({
  selector: 'app-scoring-record',
  templateUrl: './scoring-record.component.html',
  styleUrls: ['../scoring.component.css','./scoring-record.component.css']
})
export class ScoringRecordComponent implements OnInit {

  appUser;

  constructor( private greenTee918Service: Greentee918Service ) { }

  ngOnInit() {
    this.greenTee918Service.castUser.subscribe(user => this.appUser = user);
  }

  setDetailActuateClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      'scoring-record': true
    };

    return classes;
  }
}
