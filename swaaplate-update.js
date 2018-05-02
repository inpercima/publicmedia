'use strict';

/* requirements */
const lightjs = require('light-js');

/* init */
init();

function init() {
  lightjs.info('initialize swaaplate update');

  updatePackageJsonData();
}

function updatePackageJsonData() {
  lightjs.info('update package.json');

  const swaaplateUpdateJsonData = lightjs.readJson('swaaplate-update.json');
  const packageJson = 'package.json';
  const packageJsonData = lightjs.readJson(packageJson);
  packageJsonData.dependencies['@angular/animations'] = swaaplateUpdateJsonData.angular.common;
  packageJsonData.dependencies['@angular/common'] = swaaplateUpdateJsonData.angular.common;
  packageJsonData.dependencies['@angular/compiler'] = swaaplateUpdateJsonData.angular.common;
  packageJsonData.dependencies['@angular/core'] = swaaplateUpdateJsonData.angular.common;
  packageJsonData.dependencies['@angular/forms'] = swaaplateUpdateJsonData.angular.common;
  packageJsonData.dependencies['@angular/platform-browser'] = swaaplateUpdateJsonData.angular.common;
  packageJsonData.dependencies['@angular/platform-browser-dynamic'] = swaaplateUpdateJsonData.angular.common;
  packageJsonData.dependencies['@angular/router'] = swaaplateUpdateJsonData.angular.common;
  packageJsonData.dependencies['@angular/cdk'] = swaaplateUpdateJsonData.angular.cdk;
  packageJsonData.dependencies['@angular/flex-layout'] = swaaplateUpdateJsonData.angular.flex;
  packageJsonData.dependencies['@angular/material'] = swaaplateUpdateJsonData.angular.material;
  lightjs.writeJson(packageJson, packageJsonData);
}
