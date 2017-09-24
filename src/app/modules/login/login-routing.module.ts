import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../../components/login/login.component';
import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';

const routes: Routes = [{
  component: LoginComponent,
  path: 'login',
},
{
  component: PageNotFoundComponent,
  path: '**',
}];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
})

export class LoginRoutingModule {

  public static ROUTES = routes;

}
