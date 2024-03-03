import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';

import { environment } from 'src/environments/environment';
import { FormModel } from './form.model';
import { MediaService } from './media.service';
import { Post } from './post';
import { ResponsePipe } from './response.pipe';
import { HttpErrorResponse } from '@angular/common/http';

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
  error = '';
  lastPost: Post | undefined;
  form!: FormGroup<FormModel>;

  constructor(
    private fb: FormBuilder,
    public mediaService: MediaService,
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
    const type = this.form.value.type;
    const fieldEnabled = type === '4' ? 'userId' : 'username';
    const fieldDisabled = type === '4' ? 'username' : 'userId';
    this.form.get(fieldEnabled)?.enable();
    this.form.get(fieldDisabled)?.disable();
  }

  onSubmit(): void {
    this.lastPost = undefined;
    this.error = '';
    this.loading = true;
    this.mediaService.determineLastPost(this.form.controls).subscribe(
      (lastPost) => {
        this.loading = false;
        this.lastPost = lastPost;
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        this.error = error.statusText;
      },
    );
  }
}
