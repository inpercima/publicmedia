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

  constructor(private lastPostService: LastPostService) {}

  ngOnInit(): void {
    this.lastPostService.getLastPostByParamAOnClient().subscribe(lastPost => this.lastPostParamA = lastPost);
    this.lastPostService.getLastPostByGraphQlOnClient().subscribe(lastPost => this.lastPostGraphQl = lastPost);
  }
}
