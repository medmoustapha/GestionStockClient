import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URLS} from './config/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated = false;
  constructor(private http: HttpClient) { }
  authenticate(credentials, callback ) {
    if (credentials) {
      const token = btoa(credentials.username + ':' + credentials.passwored);
      const  headers =  new HttpHeaders({
        authentication: 'Basic' + token
      });
      this.http.get(API_URLS.USER_URL).subscribe(response => {
        if (response['name']) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
      });
    }
    return callback && callback();
  }
}
