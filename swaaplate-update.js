'use strict';

/* requirements */
const shjs = require('shelljs');
const sTools = require('./swaaplate-tools');

/* init */
init();
sTools.load(false);

function init() {
  sTools.infoLog('initialize swaaplate-update');
  updatePackageJsonData();
}

function updatePackageJsonData() {
  sTools.infoLog('update package.json');
  const packageJson = 'package.json';
  const swaaplateUpdateJsonData = sTools.readJson('swaaplate-update.json');
  const packageJsonData = sTools.readJson(packageJson);
  packageJsonData.dependencies['@angular/animations'] = swaaplateUpdateJsonData.angular.main;
  packageJsonData.dependencies['@angular/common'] = swaaplateUpdateJsonData.angular.main;
  packageJsonData.dependencies['@angular/compiler'] = swaaplateUpdateJsonData.angular.main;
  packageJsonData.dependencies['@angular/core'] = swaaplateUpdateJsonData.angular.main;
  packageJsonData.dependencies['@angular/forms'] = swaaplateUpdateJsonData.angular.main;
  packageJsonData.dependencies['@angular/http'] = swaaplateUpdateJsonData.angular.main;
  packageJsonData.dependencies['@angular/platform-browser'] = swaaplateUpdateJsonData.angular.main;
  packageJsonData.dependencies['@angular/platform-browser-dynamic'] = swaaplateUpdateJsonData.angular.main;
  packageJsonData.dependencies['@angular/cdk'] = swaaplateUpdateJsonData.angular.cdk;
  packageJsonData.dependencies['@angular/flex-layout'] = swaaplateUpdateJsonData.angular.flex;
  packageJsonData.dependencies['@angular/material'] = swaaplateUpdateJsonData.angular.material;
  sTools.writeJson(packageJson, packageJsonData);
}
