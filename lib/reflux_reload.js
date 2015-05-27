
var module = {};
var firstUpperCase = function(str) {
	return str.substring(0, 1).toUpperCase() + str.substring(1);
};

var Reflux = {
	createActions: function(actions) {
		if (!Array.isArray(actions)) {
			var tmpActions = [];
			Object.keys(actions).forEach(function(actionName) {
				tmpActions.push(actionName);
				var children = actions[actionName].children;
				children.forEach(function(subActionName) {
					tmpActions.push(actionName + firstUpperCase(subActionName));
				});
			});
			actions = tmpActions;
		}
		actions = actions.map(function(action) {
			return firstUpperCase(action);
		});
		return actions;
	}
};

var require = function() {
	return Reflux;
};

