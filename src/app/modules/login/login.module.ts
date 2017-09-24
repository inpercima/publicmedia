import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from '../material/material.module';

import { AuthGuard } from '../../services/auth-guard.service';
import { AuthService } from '../../services/auth.service';
import { FormService } from '../../services/form.service';

import { LoginComponent } from '../../components/login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    FormService,
  ],
})

export class LoginModule { }
