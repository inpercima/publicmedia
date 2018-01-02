// Angular
import '@angular/animations';
import '@angular/cdk';
import '@angular/compiler';
import '@angular/common';
import '@angular/core';
import '@angular/flex-layout';
import '@angular/forms';
import '@angular/http';
import '@angular/material';
import '@angular/router';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';

// Angular material theme, via nodejs process.env Variable
require('@angular/material/prebuilt-themes/' + process.env.THEME + '.css');

// RxJS
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
