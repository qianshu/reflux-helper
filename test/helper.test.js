/*eslint-env node, mocha */
var path = require('path');
var helper = require('../index');
var fs = require('fs');
describe('helper.test.js', function() {
	it('test/store/store.js is exist', function() {
		var src = path.join(__dirname, 'action/action.js');
		var target = path.join(__dirname, 'store/store.js');
		if (fs.existsSync(target)) {
			fs.unlinkSync(target);
		}
		helper.createStore(src, target);
		fs.existsSync(target);
	});
});
