import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'last-post',
}];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
})
export class AppRoutingModule {

  public static ROUTES: Routes = routes;

}
