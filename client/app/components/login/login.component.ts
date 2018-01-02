import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {

  public loginForm: FormGroup;

  public hide = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private configService: ConfigService,
    private router: Router) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.authService.login(this.loginForm).subscribe(() => {
      if (this.authService.isAuthenticated) {
        // get the redirect URL from auth service
        // if no redirect has been set, use default
        this.router.navigate([this.authService.redirectUrl ? this.authService.redirectUrl : this.configService.getDefaultRoute()]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
