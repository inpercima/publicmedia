import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

//https://github.com/angular/angular-cli/issues/1675#issuecomment-254027916
// works in production mode only
import 'intl';
import 'intl/locale-data/jsonp/en';

if (process.env.ENV === 'development') {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
