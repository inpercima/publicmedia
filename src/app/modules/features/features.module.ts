import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgModule } from '@angular/core';

import { FeaturesRoutingModule } from './features-routing.module';
import { MaterialModule } from '../material/material.module';

import { PostService } from '../../services/post.service';

import { LastPostComponent } from '../../components/last-post/last-post.component';

@NgModule({
  declarations: [
    LastPostComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [
    PostService,
  ],
})

export class FeaturesModule { }
