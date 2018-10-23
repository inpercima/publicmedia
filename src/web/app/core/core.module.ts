import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { ConfigService } from './config.service';
import { FormService } from './form.service';
import { PostService } from './post.service';

@NgModule({
  providers: [
    AuthService,
    AuthGuard,
    ConfigService,
    FormService,
    PostService,
  ],
})
export class CoreModule { }
