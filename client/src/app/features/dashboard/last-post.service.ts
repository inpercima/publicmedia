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
        result = source == 'client' ? this.getByPathMediaClientside(username) : this.getByPathMediaServerside(username);
        break;
      case '2':
        result = source == 'client' ? this.getByParamAClientside(username) : this.getByParamAServerside(username);
        break;
      case '3':
        result = source == 'client' ? this.getByInlineScriptClientside(username) : this.getByInlineScriptServerside(username);
        break;
      default:
        result = source == 'client' ? this.getByGraphQlClientside(userId) : this.getByGraphQlServerside(userId);
        break;
    }
    return result;
  }

  getByPathMediaClientside(username: string): Observable<Post> {
    const url = `https://www.instagram.com/${username}/media`;
    this.usingType = url;
    return this.http.get(url).pipe(
      map((response: any) => this.createPost(response.graphql.user.edge_owner_to_timeline_media.edges[0].node, response.status)),
    );
  }

  getByParamAClientside(username: string): Observable<Post> {
    const url = `https://www.instagram.com/${username}/?__a=1`;
    this.usingType = url;
    return this.http.get(url).pipe(
      map((response: any) => this.createPost(response.graphql.user.edge_owner_to_timeline_media.edges[0].node, response.status)),
    );
  }

  getByInlineScriptClientside(username: string): Observable<Post> {
    const url = `https://www.instagram.com/${username}`;
    this.usingType = url;
    return this.http.get(url).pipe(
      map((response: any) => {
        const jsonObject = response.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1);
        return this.createPost(jsonObject.graphql.user.edge_owner_to_timeline_media.edges[0].node, jsonObject.status);
      }),
    );
  }

  getByGraphQlClientside(userId: string): Observable<Post> {
    const url = 'https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b';
    const params = `&variables={"id": "${userId}", "first": "50"}`;
    this.usingType = url + params;
    return this.http.get(`${url}${params}`).pipe(
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
    let code = status ?? undefined;
    lastPost.responseCode = ((code && code === 'ok') || (code === undefined && item !== undefined)) ? 'HTTP/1.1 200 OK' : '';
    return lastPost;
  }
}
