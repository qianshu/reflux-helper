var action = require('{{actionPath}}');
var Reflux = require('reflux');
module.exports = Reflux.createStore({
  listenables: [action],{% for action in actions %}
  on{{action}}: function() {
  }{% if loop.index != actions.length %},{% endif %}{% endfor %}
});
