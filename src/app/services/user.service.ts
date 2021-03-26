import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  postData(data: any): Observable<any> {
    const headers = {Authentication: '555'};
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post('https://reqres.in/api/login', body, {headers: headers});
  }

}
