import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { FormService } from './form.service';

@Injectable()
export class AuthService {

  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(private formService: FormService, private http: HttpClient, private jwtHelper: JwtHelperService) { }

  public login(formGroup: FormGroup): Observable<boolean> {
    const body = this.formService.createBody(formGroup);
    const header = this.formService.createHeader();
    return this.http.post<string>('./auth.handler.php?authenticate', body, header).map(response => {
      if (response !== null) {
        // set the token property for validate token in the app
        localStorage.setItem('access_token', response);
        return true;
      } else {
        return false;
      }
    });
  }

  public logout(): void {
    localStorage.removeItem('access_token');
  }

  public isAuthenticated(): boolean {
    try {
      return !this.jwtHelper.isTokenExpired();
    } catch (e) {
      return false;
    }
  }

}
