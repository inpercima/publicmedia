
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { environment } from '../../environments/environment';

const routes: Routes = [environment.redirectNotFound ? {
  path: '**',
  redirectTo: environment.defaultRoute
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
