import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';

import { AuthGuard } from '../../services/auth-guard.service';
import { AuthService } from '../../services/auth.service';
import { FormService } from '../../services/form.service';

import { LoginComponent } from '../../components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
    AuthGuard,
    AuthService,
    FormService,
  ]
})

export class LoginModule { }
