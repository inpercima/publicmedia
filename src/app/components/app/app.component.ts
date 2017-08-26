import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Routes } from "@angular/router";

import { AppRoutingModule } from '../../modules/app/app-routing.module';
import { LoginRoutingModule } from '../../modules/login/login-routing.module';
import { FeaturesRoutingModule } from '../../modules/features/features-routing.module';

import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'at-app',
  templateUrl: './app.component.html',
  // require('./app.component.css').toString() to avoid Error: Expected 'styles' to be an array of strings.
  styles: [require('./app.component.css').toString()],
})
export class AppComponent {

  public appname: string;

  public routes: Routes;

  public constructor(private configService: ConfigService, private titleService: Title) {
    this.appname = configService.getAppname();
    this.routes = AppRoutingModule.ROUTES;
    if (configService.isShowFeatures()) {
      this.routes = this.routes.concat(FeaturesRoutingModule.ROUTES);
    }
    // should a login will be used the login route could be added
    if (configService.isActivateLogin() && configService.isShowLogin()) {
      this.routes = this.routes.concat(LoginRoutingModule.ROUTES);
    }
    this.titleService.setTitle(this.appname);
  }

}
