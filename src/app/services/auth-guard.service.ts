import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';
import { ConfigService } from './config.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private configService: ConfigService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // should a login will be used the state will be checked otherwise it will return always logged in
    return this.configService.isActivateLogin() ? this.checkLogin(state.url) : true;
  }

  checkLogin(url: string): boolean {
    let result = this.authService.isAuthenticated;
    if (!result) {
      // store the attempted URL for redirecting
      this.authService.redirectUrl = url;

      // navigate to the login page with extras
      this.router.navigate(['login']);
    }
    return result;
  }

}