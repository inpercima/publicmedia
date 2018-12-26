import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { FormService } from './form.service';

@NgModule({
  providers: [
    AuthService,
    AuthGuard,
    FormService,
  ],
})
export class CoreModule { }
