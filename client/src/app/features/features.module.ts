import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { FeaturesRoutingModule } from './features-routing.module';
import { LastPostComponent } from './last-post/last-post.component';
import { LastPostService } from './last-post/last-post.service';

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
  providers: [
    LastPostService,
  ],
})
export class FeaturesModule { }
