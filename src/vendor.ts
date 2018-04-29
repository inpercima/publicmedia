/** angular */
import '@angular/animations';
// peer dependency of @angular/material
import '@angular/cdk';
import '@angular/common';
// peer dependency of @angular/platform-browser-dynamic
import '@angular/compiler';
import '@angular/core';
import '@angular/forms';
import '@angular/flex-layout';
import '@angular/material';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/router';

/** angular material theme, via nodejs process.env Variable */
require('@angular/material/prebuilt-themes/' + process.env.THEME + '.css');
