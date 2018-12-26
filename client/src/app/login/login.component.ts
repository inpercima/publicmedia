import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  protected loginForm: FormGroup;

  protected hide = true;

  protected wrongLogin = false;

  protected message: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm).subscribe(() => {
      if (this.isAuthenticated()) {
        this.wrongLogin = false;
        this.message = '';
        // get the redirect URL from auth service
        // if no redirect has been set, use default
        this.router.navigate([this.authService.redirectUrl ? this.authService.redirectUrl : environment.defaultRoute]);
      }
    }, error => {
      this.wrongLogin = true;
      this.message = error.error.message;
    });
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
