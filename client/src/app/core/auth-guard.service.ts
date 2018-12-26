import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // should a login will be used the state will be checked otherwise it will return always logged in
    return environment.activateLogin ? this.checkLogin(state.url) : true;
  }

  checkLogin(url: string): boolean {
    const result = this.authService.isAuthenticated();
    if (!result) {
      // store the attempted URL for redirecting
      this.authService.redirectUrl = url;

      // navigate to the login page
      this.router.navigate(['login']);
    }
    return result;
  }

}
