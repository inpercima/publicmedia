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

  usingType!: string;

  constructor(private http: HttpClient) { }

  getLastPost(type: string, source: string, userId: string, username: string): Observable<Post> {
    let result!: Observable<Post>;
    switch (type) {
      case '1':
        this.usingType = `https://www.instagram.com/${username}/media`;
        result = source == 'client' ? this.getByPathMediaClientside() : this.getByPathMediaServerside(username);
        break;
      case '2':
        this.usingType = `https://www.instagram.com/${username}/?__a=1`;
        result = source == 'client' ? this.getByParamAClientside() : this.getByParamAServerside(username);
        break;
      case '3':
        this.usingType = `https://www.instagram.com/${username}`;
        result = source == 'client' ? this.getByInlineScriptClientside() : this.getByInlineScriptServerside(username);
        break;
      default: {
        // other working query_hash: 56a7068fea504063273cc2120ffd54f3
        const url = 'https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b';
        const params = `&variables={"id": "${userId}", "first": "50"}`;
        this.usingType = url + params;
        result = source == 'client' ? this.getByGraphQlClientside() : this.getByGraphQlServerside(userId);
        break;
      }
    }
    return result;
  }

  getByPathMediaClientside(): Observable<Post> {
    return this.http.get(this.usingType).pipe(
      map((response: any) => this.createPost(response.graphql.user.edge_owner_to_timeline_media.edges[0].node, response.status)),
    );
  }

  getByParamAClientside(): Observable<Post> {
    return this.http.get(this.usingType).pipe(
      map((response: any) => this.createPost(response.graphql.user.edge_owner_to_timeline_media.edges[0].node, response.status)),
    );
  }

  getByInlineScriptClientside(): Observable<Post> {
    return this.http.get(this.usingType).pipe(
      map((response: any) => {
        const jsonObject = response.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1);
        return this.createPost(jsonObject.graphql.user.edge_owner_to_timeline_media.edges[0].node, jsonObject.status);
      }),
    );
  }

  getByGraphQlClientside(): Observable<Post> {
    return this.http.get(this.usingType).pipe(
      map((response: any) => this.createPost(response.data.user.edge_owner_to_timeline_media.edges[0].node, response.status)),
    );
  }

  getByPathMediaServerside(username: string): Observable<Post> {
    return this.http.get<Post>(`${environment.api}last-post?type=1&username=${username}`);
  }

  getByParamAServerside(username: string): Observable<Post> {
    return this.http.get<Post>(`${environment.api}last-post?type=2&username=${username}`);
  }

  getByInlineScriptServerside(username: string): Observable<Post> {
    return this.http.get<Post>(`${environment.api}last-post?type=3&username=${username}`);
  }

  getByGraphQlServerside(userId: string): Observable<Post> {
    return this.http.get<Post>(`${environment.api}last-post?type=4&userId=${userId}`);
  }

  private createPost(item: any, status: string): Post {
    const lastPost = {} as Post;
    lastPost.id = item.id;
    lastPost.picture = item.display_url;
    lastPost.video = item.is_video ? item.video_url : null;
    lastPost.likes = item.edge_media_preview_like.count;
    lastPost.date = new Date(item.taken_at_timestamp * 1000);
    const code = status ?? undefined;
    lastPost.responseCode = ((code && code === 'ok') || (code === undefined && item !== undefined)) ? 'HTTP/1.1 200 OK' : '';
    return lastPost;
  }
}
