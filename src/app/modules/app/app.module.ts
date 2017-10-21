// BrowserModule, BrowserAnimationsModule - standard modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// sub modules
import { AppRoutingModule } from './app-routing.module';
import { FeaturesModule } from '../features/features.module';
import { LoginModule } from '../login/login.module';
import { MaterialModule } from '../material/material.module';

// pipe for tabs
import { RealRouteMatchingPipe } from '../../pipes/real-route-matching.pipe';

import { ConfigService } from '../../services/config.service';

import { AppComponent } from '../../components/app/app.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    RealRouteMatchingPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FeaturesModule,
    LoginModule,
    MaterialModule,
  ],
  providers: [
    ConfigService,
  ],
})

export class AppModule { }
