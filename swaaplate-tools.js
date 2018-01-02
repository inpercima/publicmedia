'use strict';

/* requirements */
const colors = require('colors');
const fs = require('fs');
const shjs = require('shelljs');

/* module */
module.exports = {
  load: function(create) {
    this.infoLog((create ? 'load' : 'update') + ' dependencies');
    if (!shjs.which('yarn')) {
      if (!shjs.which('npm')) {
        this.errorLog('Sorry, this script requires yarn or npm.');
        shjs.exit(1);
      } else {
        shjs.exec('npm install');
      }
    } else {
      shjs.exec('yarn');
    }
    this.infoLog('project successfully ' + (create ? 'created' : 'updated'), true);
  },
  infoLog: function (value, highlight) {
    let log = `[INFO ] ${value}`;
    shjs.echo(highlight ? log.green : log.white.bold);
  },
  errorLog: function(value) {
    shjs.echo(`[ERROR] ${value}`.red);
  },
  readJson: function(filename) {
    return JSON.parse(fs.readFileSync(filename));
  },
  writeJson: function(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
  },
  writeFile: function(filename, data) {
    fs.writeFileSync(filename, data);
  }
}
