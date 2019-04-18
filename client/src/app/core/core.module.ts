import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  providers: [
    AuthService,
    AuthGuard,
  ],
})
export class CoreModule { }
