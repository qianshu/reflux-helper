
var module = {};

var Reflux = {
	createActions: function(actions) {
		actions = actions.map(function(action) {
			return action.substring(0, 1).toUpperCase() + action.substring(1);
		});
		return actions;
	}
};
var require = function(){
	return Reflux;
}

