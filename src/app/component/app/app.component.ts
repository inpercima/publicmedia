import { Component } from '@angular/core';
import { Routes } from "@angular/router";

import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'at-app',
  templateUrl: './app.component.html',
  // require('./app.component.css').toString() to avoid Error: Expected 'styles' to be an array of strings.
  styles: [require('./app.component.css').toString()],
})
export class AppComponent {

  public routes: Routes = AppRoutingModule.ROUTES;

}
