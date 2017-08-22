import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LastPostComponent } from './component/last-post/last-post.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/last-post',
},
{
  component: LastPostComponent,
  path: 'last-post',
},
{
  component: PageNotFoundComponent,
  path: '**',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})

export class AppRoutingModule {

  public static ROUTES = routes;

}
