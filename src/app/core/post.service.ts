import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Post } from './post';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  public get(username: string): Observable<Post> {
    return this.http.get<Post>(`./instagram.handler.php?username=${username}`);
  }

}
