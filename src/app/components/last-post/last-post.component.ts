import { Component, OnInit } from '@angular/core';

import { Post } from '../../model/post';

import { PostService } from '../../service/post.service';

@Component({
  selector: 'at-last-post',
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
