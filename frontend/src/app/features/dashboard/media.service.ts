import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { FormModel } from './form.model';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  query!: string;

  constructor(private http: HttpClient) {}

  determineLastPost(formModel: FormModel): Observable<Post> {
    if (formModel.source.value === 'server') {
      return this.determineLastPostServerside(formModel);
    }

    let result!: Observable<Post>;
    const username = formModel.username.value;
    switch (formModel.type.value) {
      case '1':
        result = this.determineLastPostByMediaPathOrParamA(username!, 'media');
        break;
      case '2':
        result = this.determineLastPostByMediaPathOrParamA(username!, '?__a=1');
        break;
      case '3':
        result = this.determineLastPostByInlineScript(username!);
        break;
      default:
        result = this.determineLastPostByGraphQL(formModel.userId.value!);
        break;
    }
    return result;
  }

  private determineLastPostByMediaPathOrParamA(username: string, type: string): Observable<Post> {
    this.query = `/api/${username}/${type}`;
    return this.http.get(this.query).pipe(
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      map((response: any) => this.createPost(response.graphql.user.edge_owner_to_timeline_media.edges[0].node, response.status)),
    );
  }

  private determineLastPostByInlineScript(username: string): Observable<Post> {
    this.query = `/api/${username}`;
    return this.http.get(this.query).pipe(
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      map((response: any) => {
        const jsonObject = response.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1);
        return this.createPost(jsonObject.graphql.user.edge_owner_to_timeline_media.edges[0].node, jsonObject.status);
      }),
    );
  }

  private determineLastPostByGraphQL(userId: string): Observable<Post> {
    // other working query_hash: 56a7068fea504063273cc2120ffd54f3
    const url = '/api/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b';
    const params = `&variables={"id": "${userId}", "first": "50"}`;
    this.query = `${url}${params}`;
    return this.http.get(this.query).pipe(
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      map((response: any) => this.createPost(response.data.user.edge_owner_to_timeline_media.edges[0].node, response.status)),
    );
  }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  private createPost(item: any, status: string): Post {
    const code = status ?? undefined;
    return {
      id: item.id,
      picture: item.display_url,
      video: item.is_video ? item.video_url : null,
      likes: item.edge_media_preview_like.count,
      date: new Date(item.taken_at_timestamp * 1000),
      responseCode: (code && code === 'ok') || (code === undefined && item !== undefined) ? 'HTTP/1.1 200 OK' : '',
    };
  }

  private determineLastPostServerside(formModel: FormModel): Observable<Post> {
    const type = formModel.type.value;
    const userParam = type === '4' ? `userId=${formModel.userId.value}` : `username=${formModel.username.value}`;
    return this.http.get<Post>(`${environment.api}last-post?type=${formModel.type.value}&${userParam}`);
  }
}
