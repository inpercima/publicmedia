import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LastPost } from './last-post';
import { environment } from '../../../environments/environment';

@Injectable()
export class LastPostService {

  constructor(private http: HttpClient) { }

  public get(userId: number): Observable<LastPost> {
    return this.http.get<LastPost>(`${environment.api}last-post${environment.apiSuffix}?type=2&userId=${userId}`);
  }

}
