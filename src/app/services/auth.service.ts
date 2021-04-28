import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

interface SigninCredentials {
  email: string;
  password: string;
}

@Injectable({providedIn: 'root'})

export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
  }

  signin(credentials: SigninCredentials): Observable<any> {
    const headers = {
      Authorization: `Basic ${btoa(credentials.email + ':' + credentials.password)}`
    };
    return this.http.post(this.rootUrl + '/auth/signin', null, {headers: headers})
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }

  signup(credentials: any): Observable<any> {
    return this.http.post<any>(this.rootUrl + '/auth/signup', credentials);
  }
}
