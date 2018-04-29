import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { ConfigService } from './config.service';
import { FormService } from './form.service';

@NgModule({
  providers: [
    AuthService,
    AuthGuard,
    ConfigService,
    FormService,
  ],
})
export class CoreModule { }
