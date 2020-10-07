import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  exports: [ DashboardComponent ],
})
export class FeaturesModule { }
