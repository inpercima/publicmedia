import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as config from '../../config.json';
import { AuthGuard } from '../core/auth-guard.service';
import { LastPostComponent } from './last-post/last-post.component';

const routes: Routes = [{
  canActivate: [AuthGuard],
  component: LastPostComponent,
  path: (<any>config).routes.default,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FeaturesRoutingModule {

  public static ROUTES = routes;

}
