import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './component/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { LastPostComponent } from './component/last-post/last-post.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RealRouteMatchingPipe } from './pipe/real-route-matching.pipe';

import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { PostService } from './service/post.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    LastPostComponent,
    LoginComponent,
    PageNotFoundComponent,
    RealRouteMatchingPipe,
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    PostService,
    Title,
  ]
})

export class AppModule { }
