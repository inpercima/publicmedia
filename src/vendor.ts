// Angular
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

// Angular material theme, via nodejs process.env Variable
require('@angular/material/prebuilt-themes/' + process.env.THEME + '.css');

// RxJS
import 'rxjs';
