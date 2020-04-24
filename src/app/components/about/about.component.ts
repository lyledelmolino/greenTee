import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from "../../services/greentee918.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../../app.component.css']
})
export class AboutComponent implements OnInit {

  aboutComponentVisible = false;

  constructor(private greenTee918Service: Greentee918Service) {
  }

  ngOnInit() {
    this.greenTee918Service.castAboutComponentVisibility.subscribe(visibility => this.aboutComponentVisible = visibility);
  }

  setContainerContainerClass() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'container-container': true
    };

    return classes;
  }

  setDetailClasses() {

    // tslint:disable-next-line:prefer-const
    let classes = {
      'detail-container': true,
      active: true
    };

    return classes;
  }
}
