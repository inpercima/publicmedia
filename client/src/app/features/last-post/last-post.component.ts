import { Component, OnInit } from '@angular/core';

import { LastPost } from './last-post';
import { LastPostService } from './last-post.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'pm-last-post',
  templateUrl: './last-post.component.html',
})
export class LastPostComponent implements OnInit {

  public lastPost: LastPost;

  constructor(private lastPostService: LastPostService) {}

  ngOnInit(): void {
    this.lastPost = {} as LastPost;
    this.lastPostService.get(environment.userId).subscribe(lastPost => this.lastPost = lastPost);
  }
}

