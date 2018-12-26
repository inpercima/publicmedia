import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { FeaturesRoutingModule } from './features-routing.module';
import { LastPostComponent } from './last-post/last-post.component';

@NgModule({
  declarations: [
    LastPostComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatProgressBarModule,
  ],
})
export class FeaturesModule { }
