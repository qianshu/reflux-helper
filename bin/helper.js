#!/usr/bin/env node

var helper = require('../');
var fs = require('fs');
var path = require('path');
var cwd = fs.realpathSync('.');
var target = path.join(cwd, process.argv[2]);
var src = path.join(cwd, process.argv[3]);
helper.createStore(target, src);
console.log('create success!');
