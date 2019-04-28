import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    ngOnInit() {
    }

    setFullViewContainerClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            fullViewContainer: true
        };

        return classes;
    }

    setAppContainerClasses() {

        // tslint:disable-next-line:prefer-const
        let classes = {
            appContainer: true
        };

        return classes;
    }
}
