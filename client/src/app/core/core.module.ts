import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { RequestService } from './request.service';

@NgModule({
  providers: [
    AuthService,
    AuthGuard,
    RequestService,
  ],
})
export class CoreModule { }
