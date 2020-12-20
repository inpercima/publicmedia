import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LastPost } from './last-post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LastPostService {

  constructor(private http: HttpClient) { }

  getLastPostByParamAOnServer(): Observable<LastPost> {
    return this.http.get<LastPost>(`${environment.api}last-post?type=paramA`);
  }

  getLastPostByGraphQlOnServer(): Observable<LastPost> {
    return this.http.get<LastPost>(`${environment.api}last-post?type=graphQl`);
  }

  getLastPostByParamAOnClient(): Observable<LastPost> {
    const url = `https://www.instagram.com/${environment.username}/?__a=1`;
    return this.http.get(url).pipe(
      map((response: any) => this.createPost(this.getLastItem(response.graphql.user.edge_owner_to_timeline_media.edges))),
    );
  }

  getLastPostByGraphQlOnClient(): Observable<LastPost> {
    const url = 'https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b';
    return this.http.get(`${url}&variables={"id": "${environment.userId}", "first": "50"}`).pipe(
      map((response: any) => this.createPost(this.getLastItem(response.data.user.edge_owner_to_timeline_media.edges))),
    );
  }

  private getLastItem(items: any): any {
    return items[0].node;
  }

  private createPost(item: any): LastPost {
    const lastPost = {} as LastPost;
    lastPost.id = item.id;
    lastPost.picture = item.display_url;
    lastPost.likes = item.edge_media_preview_like.count;
    lastPost.date = new Date(item.taken_at_timestamp * 1000);
    lastPost.responseCode = '200';
    return lastPost;
  }
}
