import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LastPost } from './last-post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LastPostService {

  constructor(private http: HttpClient) { }

  public get(userId: string): Observable<LastPost> {
    return this.http.get<any>(environment.api + 'last-post', {
      params: { type: '2', userId },
    });
  }
}
