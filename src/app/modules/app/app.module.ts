// BrowserModule, BrowserAnimationsModule - standard modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// FlexLayoutModule - needed b/c of LastPost, PageNotFound
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgModule } from '@angular/core';

// sub modules
import { AppRoutingModule } from './app-routing.module';
import { FeaturesModule } from '../features/features.module';
import { LoginModule } from '../login/login.module';
import { MaterialModule } from '../material/material.module';

// pipe for tabs
import { RealRouteMatchingPipe } from '../../pipes/real-route-matching.pipe';

import { ConfigService } from '../../services/config.service';
// PostService - needed b/c of LastPost
import { PostService } from '../../services/post.service';

import { AppComponent } from '../../components/app/app.component';
import { LastPostComponent } from '../../components/last-post/last-post.component';
import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    LastPostComponent,
    PageNotFoundComponent,
    RealRouteMatchingPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FeaturesModule,
    LoginModule,
    MaterialModule,
  ],
  providers: [
    ConfigService,
    PostService,
  ],
})

export class AppModule { }
