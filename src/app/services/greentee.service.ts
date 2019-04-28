import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

const HTTP_OPTIONS = {
    headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded'
//        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable({
  providedIn: 'root'
})

export class GreenteeService {

//    private theURL = 'https://www.greentee.info';
    private theURL = 'https://www.greentee.info/angular/api/index.php';
//    private theURL = 'http://angular.greentee.info/api/index.php';
//    private theURL = 'api';

    constructor( private http: HttpClient ) { }

//    loginUser(username, password): Observable<any> {
    loginUser(username, password) {

        // set header vars action...
        let body = new HttpParams();
//      body = body.set('username', USERNAME);
//      body = body.set('password', PASSWORD);
//        body = body.set('username', 'golfer1');
  //      body = body.set('password', 'password');
        body = body.set('username', username);
        body = body.set('password', password);
        body = body.set('action', 'login_api');
        console.log('In greentee.service.ts ---> loginUser(): Observable<User>');
        console.log(body.get('action'));
//        return this.http.post<User>(this.theURL, body, HTTP_OPTIONS);
        return this.http.post<any>(this.theURL, body, HTTP_OPTIONS);
//        return this.http.post<any>(this.theURL, body);

    }
}
