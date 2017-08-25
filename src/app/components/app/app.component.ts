import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Routes } from "@angular/router";

import { AppRoutingModule } from '../../modules/app/app-routing.module';
import { LoginRoutingModule } from '../../modules/login/login-routing.module';
import { FeaturesRoutingModule } from '../../modules/features/features-routing.module';

import * as config from '../../../../config/config.json';

@Component({
  selector: 'at-app',
  templateUrl: './app.component.html',
  // require('./app.component.css').toString() to avoid Error: Expected 'styles' to be an array of strings.
  styles: [require('./app.component.css').toString()],
})
export class AppComponent {

  public appName = (<any>config).appname;

  public routes: Routes;

  public constructor(private titleService: Title) {
    this.routes = AppRoutingModule.ROUTES;
    if ((<any>config).routes.showFeatures) {
      this.routes = this.routes.concat(FeaturesRoutingModule.ROUTES);
    }
    if ((<any>config).routes.showLogin) {
      this.routes = this.routes.concat(LoginRoutingModule.ROUTES);
    }
    this.titleService.setTitle(this.appName);
  }

}
