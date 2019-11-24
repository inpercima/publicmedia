import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LastPost } from './last-post';
import { RequestService } from 'src/app/core/request.service';

@Injectable()
export class LastPostService {

  constructor(private http: HttpClient, private requestService: RequestService) { }

  public get(userId: number): Observable<LastPost> {
    return this.http.get<LastPost>(this.requestService.url('last-post', `?type=2&userId=${userId}`));
  }

}
