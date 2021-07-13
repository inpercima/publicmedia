import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSelectModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }
