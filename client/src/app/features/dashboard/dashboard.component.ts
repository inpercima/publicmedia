import { Component, OnInit } from '@angular/core';

import { LastPost } from './last-post';
import { LastPostService } from './last-post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public lastPost: LastPost;

  constructor(private lastPostService: LastPostService) {}

  ngOnInit(): void {
    this.lastPost = {} as LastPost;
    this.lastPostService.get(environment.userId).subscribe(lastPost => this.lastPost = lastPost);
  }
}
