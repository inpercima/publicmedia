
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as config from '../../config.json';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [(<any>config).routes.notFound.redirect ? {
  path: '**',
  redirectTo: (<any>config).routes.default
} : {
  component: NotFoundComponent,
  path: '**',
}];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class NotFoundRoutingModule {

  public static ROUTES = routes;

}
