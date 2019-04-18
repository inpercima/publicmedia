import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FeaturesRoutingModule } from './features/features-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { environment } from '../environments/environment';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public routes: Routes;

  public appname: string;

  public constructor(private titleService: Title) {
    this.appname = environment.appname;
    this.routes = AppRoutingModule.ROUTES;
    if (environment.showFeatures) {
      this.routes = this.routes.concat(FeaturesRoutingModule.ROUTES);
    }
    // should a login will be used the login route could be added
    if (environment.activateLogin && environment.showLogin) {
      this.routes = this.routes.concat(LoginRoutingModule.ROUTES);
    }
    this.titleService.setTitle(this.appname);
  }

}
