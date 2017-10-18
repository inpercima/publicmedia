import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../services/auth-guard.service';

import { LastPostComponent } from '../../components/last-post/last-post.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'last-post',
},
{
  component: LastPostComponent,
  path: 'last-post',
  canActivate: [AuthGuard],
}];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
})
export class AppRoutingModule {

  public static ROUTES: Routes = routes;

}
