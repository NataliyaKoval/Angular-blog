import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo} from '../interfaces/photo';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardsService {
  rootUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.rootUrl}/photos`);
  }
}
