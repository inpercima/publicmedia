import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../../core/config.service';
import { Post } from '../../core/post';
import { PostService } from '../../core/post.service';

@Component({
  selector: 'pm-last-post',
  templateUrl: './last-post.component.html',
})
export class LastPostComponent implements OnInit {

  private post: Post;

  constructor(private configService: ConfigService, private postService: PostService) {
    this.post = new Post;
  }

  ngOnInit(): void {
    this.postService.get(this.configService.getUsername()).subscribe(post => this.post = post);
  }
}

