import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  exports: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class FeaturesModule { }
