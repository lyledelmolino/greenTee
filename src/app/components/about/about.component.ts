import {Component, OnInit} from '@angular/core';
import {Greentee918Service} from "../../services/greentee918.service";
import {CookieService} from "ngx-cookie-service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {trigger, transition, animate, style, query, group} from '@angular/animations'

const slideRight = [
  query(':leave', style({
    position: 'absolute',
    left: 0,
    right: 0,
    transform: 'translate3d(0%,0,0)'
  }), {optional: true}),
  query(':enter', style({
    position: 'absolute',
    left: 0,
    right: 0,
    transform: 'translate3d(100%,0,0)'
  }), {optional: true}),

  group([
    query(':leave', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({transform: 'translate3d(-100%,0,0)'})), // y: '-100%'
    ]), {optional: true}),
    query(':enter', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({transform: 'translate3d(0%,0,0)'})),
    ]), {optional: true})
  ])
]

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../../app.component.css'],
  animations: [
    trigger('routerAnimations', [
      transition('home => about', slideRight),
    ])
  ]
})

export class AboutComponent implements OnInit {

  aboutComponentVisible = false;
  privacyPolicyVisibility = false;

  constructor(private greenTee918Service: Greentee918Service,
              private cookieService: CookieService) {
  }

  ngOnInit() {

    this.greenTee918Service.castAboutComponentVisibility.subscribe(visibility => this.aboutComponentVisible = visibility);
    this.greenTee918Service.castPrivacyPolicyVisibility.subscribe(visibility => this.privacyPolicyVisibility = visibility);

    this.greenTee918Service.hideLoginComponent();
    this.greenTee918Service.hideMainMenu();
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
    this.greenTee918Service.showAboutComponent();
    this.greenTee918Service.hideScoringComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hidePostScoreComponent();
    this.greenTee918Service.hideScoringRecordComponent();
    this.greenTee918Service.hidePrivacyPolicyComponent();

    this.cookieService.set('last-route', '/about', 3000);
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

  showPrivacyPolicyComponent() {
    this.greenTee918Service.hideMainMenu();
    this.greenTee918Service.hideHomeComponent();
    this.greenTee918Service.hideGolferComponent();
    this.greenTee918Service.hideGolferMenu();
    this.greenTee918Service.hideClubAdminComponent();
    this.greenTee918Service.hideAdminComponent();
    this.greenTee918Service.hideFreeTrialComponent();
    this.greenTee918Service.hidePinFormComponent();
    this.greenTee918Service.hideRegisterFreeTrialUserComponent();
    this.greenTee918Service.hideAboutComponent();
    this.greenTee918Service.showPrivacyPolicyComponent();
  }
}
