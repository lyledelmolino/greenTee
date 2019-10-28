import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../../app.component.css']
})
export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
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
            'detail-container': true
        };

        return classes;
    }
}
