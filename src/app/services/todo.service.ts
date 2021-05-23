import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  rootUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  getTodos() {
    return this.http.get<Todo[]>(`${this.rootUrl}/todos`);
  }
}
