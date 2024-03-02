import { Component, OnInit } from '@angular/core';

import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { environment } from 'src/environments/environment';
import { LastPostService } from './last-post.service';
import { Post } from './post';

@Component({
  selector: 'pm-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [
    DatePipe,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    ReactiveFormsModule,
  ],
})
export class DashboardComponent implements OnInit {
  loading = false;

  lastPost = {} as Post;

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public lastPostService: LastPostService,
  ) {}

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

  onSubmit(): void {
    this.loading = true;
    const value = this.form.value;
    this.lastPostService.getLastPost(value.type, value.source, value.userId, value.username).subscribe((lp) => (this.lastPost = lp));
  }

  isSuccess(): boolean {
    const code = this.lastPost.responseCode ?? undefined;
    return code !== undefined && code.includes('200');
  }
}
