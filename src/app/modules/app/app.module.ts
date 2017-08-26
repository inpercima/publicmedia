import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FeaturesModule } from '../features/features.module';
import { LoginModule } from '../login/login.module';

import { RealRouteMatchingPipe } from '../../pipes/real-route-matching.pipe';

import { ConfigService } from '../../services/config.service';
import { PostService } from '../../services/post.service';

import { AppComponent } from '../../components/app/app.component';
import { LastPostComponent } from '../../components/last-post/last-post.component';
import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FeaturesModule,
    HttpClientModule,
    LoginModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    LastPostComponent,
    PageNotFoundComponent,
    RealRouteMatchingPipe,
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [
    ConfigService,
    PostService,
    Title,
  ]
})

export class AppModule { }
