import { Component, OnInit } from '@angular/core';

import { LastPost } from './last-post';
import { LastPostService } from './last-post.service';

@Component({
  selector: 'pm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lastPost = {} as LastPost;

  constructor(private lastPostService: LastPostService) {}

  ngOnInit(): void {
    this.lastPost = {} as LastPost;
    this.lastPostService.get().subscribe(lastPost => this.lastPost = lastPost);
  }
}
