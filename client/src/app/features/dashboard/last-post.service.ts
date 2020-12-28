import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from './post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LastPostService {

  constructor(private http: HttpClient) { }

  getLastPostByParamAOnServer(): Observable<Post> {
    return this.http.get<Post>(`${environment.api}last-post?type=paramA`);
  }

  getLastPostByGraphQlOnServer(): Observable<Post> {
    return this.http.get<Post>(`${environment.api}last-post?type=graphQl`);
  }

  getLastPostByParamAOnClient(): Observable<Post> {
    const url = `https://www.instagram.com/${environment.username}/?__a=1`;
    return this.http.get(url).pipe(
      map((response: any) => this.createPost(response.graphql.user.edge_owner_to_timeline_media.edges[0].node, response.status)),
    );
  }

  getLastPostByGraphQlOnClient(): Observable<Post> {
    const url = 'https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b';
    return this.http.get(`${url}&variables={"id": "${environment.userId}", "first": "50"}`).pipe(
      map((response: any) => this.createPost(response.data.user.edge_owner_to_timeline_media.edges[0].node, response.status)),
    );
  }

  private createPost(item: any, status: string): Post {
    const lastPost = {} as Post;
    lastPost.id = item.id;
    lastPost.picture = item.display_url;
    lastPost.video = item.is_video ? item.video_url : null;
    lastPost.likes = item.edge_media_preview_like.count;
    lastPost.date = new Date(item.taken_at_timestamp * 1000);
    if (status === 'ok' || (status === undefined && item !== undefined)) {
      lastPost.responseCode = 'HTTP/1.1 200 OK';
    }
    return lastPost;
  }
}
