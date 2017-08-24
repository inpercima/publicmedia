import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Routes } from "@angular/router";

import { AppRoutingModule } from '../../app-routing.module';

import * as config from '../../../../config/config.json';

@Component({
  selector: 'at-app',
  templateUrl: './app.component.html',
  // require('./app.component.css').toString() to avoid Error: Expected 'styles' to be an array of strings.
  styles: [require('./app.component.css').toString()],
})
export class AppComponent {

  public appName = (<any>config).appname;

  public routes: Routes = AppRoutingModule.ROUTES;

  public constructor(private titleService: Title) {
    this.titleService.setTitle(this.appName);
  }

}
