import { Injectable, isDevMode } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DebugService {

  castDebugApp = new BehaviorSubject<boolean>(false && isDevMode()).asObservable();
  castDebugLoginComponent = new BehaviorSubject<boolean>(false && isDevMode()).asObservable();
  castDebugGreenTee918Service = new BehaviorSubject<boolean>(false && isDevMode()).asObservable();
  castDebugMainMenuComponent = new BehaviorSubject<boolean>(false && isDevMode()).asObservable();
  castDebugMainContentComponent = new BehaviorSubject<boolean>(false && isDevMode()).asObservable();
  castDebugPostScoreComponent = new BehaviorSubject<boolean>(false && isDevMode()).asObservable();

  constructor() { }

}
