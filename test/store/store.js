var action = require('./../action/action.js');
var Reflux = require('reflux');
module.exports = Reflux.createStore({
  listenables: [action],
  onToggleItem: function() {
  },
  onToggleAllItems: function() {
  },
  onAddItem: function() {
  },
  onRemoveItem: function() {
  },
  onClearCompleted: function() {
  },
  onEditItem: function() {
  }
});
