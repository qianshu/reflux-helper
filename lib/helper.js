/* Reflux:true*/
'use strict';
var nunjucks = require('nunjucks');
var vm = require('vm');
var fs = require('fs');
var path = require('path');


var helper = {
	createStore: function(srcPath, targetPath) {
		var code = fs.readFileSync(srcPath);
		var excuteCode = fs.readFileSync(path.join(__dirname, './reflux_reload.js'));
		var actions = vm.runInThisContext(excuteCode + code);
		var template = fs.readFileSync(path.join(__dirname, '../store.tpl'));
		var relative = path.relative(targetPath, srcPath);
		var option = {actions: actions, actionPath: relative.replace('../', './')};
		nunjucks.configure({ watch: false });
		var data = nunjucks.renderString(template.toString(), option);
		fs.writeFileSync(targetPath, data);
	}
};
module.exports = helper;
