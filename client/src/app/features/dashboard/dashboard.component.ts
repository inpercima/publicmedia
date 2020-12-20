import { Component, OnInit } from '@angular/core';

import { LastPost } from './last-post';
import { LastPostService } from './last-post.service';

@Component({
  selector: 'pm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lastPostParamA = {} as LastPost;
  lastPostGraphQl = {} as LastPost;

  source!: string;

  constructor(private lastPostService: LastPostService) {}

  ngOnInit(): void {
    this.source = 'client';
    this.load();
  }

  changeSource(): void {
    this.lastPostParamA = {} as LastPost;
    this.lastPostGraphQl = {} as LastPost;
    this.load();
  }

  load(): void {
    if (this.source === 'client') {
      this.lastPostService.getLastPostByParamAOnClient().subscribe(lastPost => this.lastPostParamA = lastPost);
      this.lastPostService.getLastPostByGraphQlOnClient().subscribe(lastPost => this.lastPostGraphQl = lastPost);
    } else {
      this.lastPostService.getLastPostByParamAOnServer().subscribe(lastPost => this.lastPostParamA = lastPost);
      this.lastPostService.getLastPostByGraphQlOnServer().subscribe(lastPost => this.lastPostGraphQl = lastPost);
    }
  }
}
