import { Component, OnInit } from '@angular/core';

import { Post } from './post';
import { LastPostService } from './last-post.service';

@Component({
  selector: 'pm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lastPostParamA = {} as Post;
  lastPostGraphQl = {} as Post;

  source!: string;

  constructor(private lastPostService: LastPostService) {}

  ngOnInit(): void {
    this.source = 'client';
    this.load();
  }

  changeSource(): void {
    this.lastPostParamA = {} as Post;
    this.lastPostGraphQl = {} as Post;
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
