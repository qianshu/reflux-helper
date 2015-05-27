/*eslint-env node, mocha */
var path = require('path');
var helper = require('../index');
var fs = require('fs');
describe('helper.test.js', function() {
	it('option is array', function() {
		var src = path.join(__dirname, 'action/action.js');
		var target = path.join(__dirname, 'store/store.js');
		helper.createStore(src, target);
		fs.existsSync(target).should.equal(true);
    fs.unlinkSync(target);
	});

	it('option has childrend', function() {
		var src = path.join(__dirname, 'action/action_child.js');
		var target = path.join(__dirname, 'store/store_child.js');
		helper.createStore(src, target);
		fs.existsSync(target).should.equal(true);
    fs.unlinkSync(target);
	});
});
