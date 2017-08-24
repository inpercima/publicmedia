import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Post } from '../model/post';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {}

  public get(): Observable<Post> {
    return this.http.get<Post>('./handler.php?getLast');
  }

}
