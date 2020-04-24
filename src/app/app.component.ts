import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from "@angular/common";
import {environment} from '../environments/environment';
import {filter} from "rxjs/operators";
import {Router} from "@angular/router";
import {Event as NavigationEvent, NavigationStart} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: any, router: Router ) {

    //console.log("In --- app.component ---> constructor()!!");

    // router.events
    //   .pipe(
    //     // The "events" stream contains all the navigation events. For this demo,
    //     // though, we only care about the NavigationStart event as it contains
    //     // information about what initiated the navigation sequence.
    //     filter(
    //       (event: NavigationEvent) => {
    //
    //         return (event instanceof NavigationStart);
    //
    //       }
    //     )
    //   )
    //   .subscribe(
    //     (event: NavigationStart) => {
    //
    //       console.group("NavigationStart Event");
    //       // Every navigation sequence is given a unique ID. Even "popstate"
    //       // navigations are really just "roll forward" navigations that get
    //       // a new, unique ID.
    //       console.log("navigation id:", event.id);
    //       console.log("route:", event.url);
    //       // The "navigationTrigger" will be one of:
    //       // --
    //       // - imperative (ie, user clicked a link).
    //       // - popstate (ie, browser controlled change such as Back button).
    //       // - hashchange
    //       // --
    //       // NOTE: I am not sure what triggers the "hashchange" type.
    //       console.log("trigger:", event.navigationTrigger);
    //
    //       // This "restoredState" property is defined when the navigation
    //       // event is triggered by a "popstate" event (ex, back / forward
    //       // buttons). It will contain the ID of the earlier navigation event
    //       // to which the browser is returning.
    //       // --
    //       // CAUTION: This ID may not be part of the current page rendering.
    //       // This value is pulled out of the browser; and, may exist across
    //       // page refreshes.
    //       if (event.restoredState) {
    //
    //         console.warn(
    //           "restoring navigation id:",
    //           event.restoredState.navigationId
    //         );
    //
    //       }
    //
    //       console.groupEnd();
    //
    //     }
    //   );
  }

  ngOnInit() {

    if (!isPlatformBrowser(this.platformId)) {
      const bases = this.document.getElementsByTagName('base');

      if (bases.length > 0) {
        bases[0].setAttribute('href', environment.baseHref);
      }
    }
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
