import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesRoutingModule } from './features-routing.module';
import { LastPostComponent } from './last-post/last-post.component';

@NgModule({
  declarations: [
    LastPostComponent,
  ],
  imports: [
    FeaturesRoutingModule,
  ],
})
export class FeaturesModule { }

