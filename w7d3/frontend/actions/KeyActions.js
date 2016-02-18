var AppDispatcher = require("../dispatcher/Dispatcher");

var KeyActions = {
  keyPressed : function(note) {
    AppDispatcher.dispatch({
      actionType: "KEY_PRESSED",
      note: note
    });
  },
  keyOff: function(note) {
    AppDispatcher.dispatch({
      actionType: "KEY_OFF",
      note: note
    });
  }
};

module.exports = KeyActions;
