import {Injectable} from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedReq = request.clone({
      withCredentials: true
    });

    return next.handle(modifiedReq)
      .pipe(
        tap(val => {
          if (val.type === HttpEventType.Sent) {
            console.log('Request was sent to server');
          }

          if (val.type === HttpEventType.Response) {
            console.log('Got a response from the API', val);
          }
        })
      );
  }
}
