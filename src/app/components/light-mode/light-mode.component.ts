import { Component, OnInit } from '@angular/core';
import {Greentee918Service} from "../../services/greentee918.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-light-mode',
  templateUrl: './light-mode.component.html',
  styleUrls: ['./light-mode.component.css']
})
export class LightModeComponent implements OnInit {

  constructor(private greentee918Service: Greentee918Service,
              private router: Router) { }

  ngOnInit() {
    this.greentee918Service.setDarkMode(false);
    this.router.navigate(['../home']);
  }

}
