import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URLS} from './config/api.url.config';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated = false;
  constructor(private http: HttpClient, private cookieServive: CookieService) { }
  authenticate(credentials, callback ) {
    if (credentials) {
      const token = btoa(credentials.username + ':' + credentials.password);
       this.cookieServive.set('token', token);
        /*const headers =  new HttpHeaders({
          authorization: 'Basic' + token
      });*/
      this.http.get(API_URLS.USER_URL).subscribe(response => {
        if (response && response['name']) {
          console.log(response);

          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
        return callback && callback();
      },
        (error: any) => {
          console.log(error)
        });
    } else {
      this.authenticated = false;
    }

  }
}
