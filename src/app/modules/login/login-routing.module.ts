import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../services/auth-guard.service';
import { AuthService } from '../../services/auth.service';

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
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})

export class LoginRoutingModule {

  public static ROUTES = routes;

}
