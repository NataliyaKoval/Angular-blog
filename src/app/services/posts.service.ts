import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pluck} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  public search(): any {
    return this.http.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'random',
        rnlimit: '20',
        // action: 'query',
        // format: 'json',
        // generator: 'random',
        // grnnamespace: '0',
        // prop: 'revisons',
        // rvprop: 'content',
        // grnlimit: '20',
        // list: 'random',
        // utf8: '1',
        origin: '*'
      }
    }).pipe(pluck('query'));
  }
}
