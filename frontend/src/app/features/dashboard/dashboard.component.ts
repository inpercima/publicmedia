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
import { ResponsePipe } from './response.pipe';

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
    ResponsePipe,
  ],
})
export class DashboardComponent implements OnInit {
  loading = false;
  lastPost = {} as Post;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public lastPostService: LastPostService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      source: ['client'],
      type: ['4'],
      userId: [{ value: environment.userId, disabled: false }],
      username: [{ value: environment.username, disabled: true }],
    });
  }

  changeType(): void {
    const type = this.form.value.type as number;
    const fieldEnabled = type === 4 ? 'userId' : 'username';
    const fieldDisabled = type === 4 ? 'username' : 'userId';
    this.form.get(fieldEnabled)?.enable();
    this.form.get(fieldDisabled)?.disable();
  }

  onSubmit(): void {
    this.loading = true;
    const value = this.form.value;
    this.lastPostService.getLastPost(value.type, value.source, value.userId, value.username).subscribe((lp) => (this.lastPost = lp));
  }
}
