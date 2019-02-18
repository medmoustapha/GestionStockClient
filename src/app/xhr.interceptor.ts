import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class XhrInterceptor implements HttpInterceptor{

  constructor(private cookieService: CookieService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.cookieService.get('token');

    const  xhr = req.clone({
      headers: req.headers.set('Authorization','Basic '+token)
    });
    console.log('Basic'+token);
    return next.handle(xhr) ;
  }


}
