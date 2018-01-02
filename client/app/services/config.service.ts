import { Injectable } from '@angular/core';

import * as config from '../../../config/config.json';

@Injectable()
export class ConfigService {

  private activateLogin: boolean;

  private appname: string;

  private defaultRoute: string;

  private showFeatures: boolean;

  private showLogin: boolean;

  private theme: string;

  private username: string;

  constructor() {
    this.activateLogin = (<any>config).activateLogin;
    this.appname = (<any>config).appname;
    this.defaultRoute = (<any>config).routes.defaultRoute;
    this.showFeatures = (<any>config).routes.showFeatures;
    this.showLogin = (<any>config).routes.showLogin;
    this.theme = (<any>config).theme;
    this.username = (<any>config).username;
  }

  public isActivateLogin() {
    return this.activateLogin;
  }

  public getAppname() {
    return this.appname;
  }

  public getDefaultRoute() {
    return this.defaultRoute;
  }

  public isShowFeatures() {
    return this.showFeatures;
  }

  public isShowLogin() {
    return this.showLogin;
  }

  public getTheme() {
    return this.theme;
  }

  public getUsername() {
    return this.username;
  }

}
