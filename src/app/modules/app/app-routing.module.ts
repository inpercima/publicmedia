import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginRoutingModule } from '../login/login-routing.module';

import { LastPostComponent } from '../../components/last-post/last-post.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'last-post',
},
{
  component: LastPostComponent,
  path: 'last-post',
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {

  public static ROUTES: Routes = routes;

}
