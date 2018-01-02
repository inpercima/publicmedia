import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { FormService } from './form.service';

@Injectable()
export class AuthService {

  public isAuthenticated = false;

  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(private formService: FormService, private http: HttpClient) { }

  public login(formGroup: FormGroup): Observable<boolean> {
    return this.http.post<boolean>('./auth.handler.php?authenticate', this.formService.createBody(formGroup),
      this.formService.createHeader()).map(
        response => this.isAuthenticated = response
      );
  }

  public logout(): void {
    this.isAuthenticated = false;
  }

}
