import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'pm-last-post',
  templateUrl: './last-post.component.html',
})
export class LastPostComponent implements OnInit {

  private post: Post;

  constructor(private postService: PostService) {
    this.post = new Post;
  }

  ngOnInit(): void {
    this.postService.get().subscribe(post => this.post = post);
  }
}
