import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/dematerialize';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/mergeMap';

const jwt = require('jsonwebtoken');

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // wrap in delayed observable to simulate server api call
    return Observable.of(null).mergeMap(() => {
      // authenticate
      if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
        if (request.body.username === 'inpercima' && request.body.password === 'inpercima') {
          return Observable.of(new HttpResponse({
            status: 200, body: JSON.stringify({
              token: jwt.sign({
                username: request.body.username,
              }, 'secretKey', {
                expiresIn: '1h',
              })
            })
          }));
        } else {
          // else return 400 bad request
          return Observable.throw('Username or password is incorrect.');
        }
      }
      // pass through any requests not handled above
      return next.handle(request);
    })
      // call materialize, dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .materialize()
      .delay(500)
      .dematerialize();
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
