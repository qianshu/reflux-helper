npm install reflux-helper -g


rh [action.js] [store.js]

```
var Reflux = require('reflux');
module.exports = Reflux.createActions([
  'toggleItem',     // called by button in TodoItem
  'toggleAllItems', // called by button in TodoMain (even though you'd think TodoHeader)
  'addItem',        // called by hitting enter in field in TodoHeader
  'removeItem',     // called by button in TodoItem
  'clearCompleted', // called by button in TodoFooter
  'editItem'        // called by finishing edit in TodoItem
]);
```

```
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

```