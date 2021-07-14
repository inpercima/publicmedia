import { Component, OnInit } from '@angular/core';

import { Post } from './post';
import { LastPostService } from './last-post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pm-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  lastPost = {} as Post;

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, public lastPostService: LastPostService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      source: ['client'],
      type: ['4'],
      userId: [{ value: environment.userId, disabled: false }],
      username: [{ value: environment.username, disabled: true }],
    });
  }

  changeType(): void {
    if (this.form.value.type === '4') {
      this.form.get('userId')?.enable();
      this.form.get('username')?.disable();
    } else {
      this.form.get('userId')?.disable();
      this.form.get('username')?.enable();
    }
  }

  run(): void {
    const value = this.form.value;
    this.lastPostService.getLastPost(value.type, value.source, value.userId, value.username).subscribe(lp => this.lastPost = lp);
  }

  isSuccess(): boolean {
    const code = this.lastPost.responseCode ?? undefined;
    return code !== undefined && code.includes('200');
  }
}
