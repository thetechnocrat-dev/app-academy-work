var KeyActions = require('../actions/KeyActions.js');

var Mapping = {
  82: 'A6', //r
  84: 'B6', //t
  81: 'C6', //q
  87: 'E6', //w
  69: 'G6', //e
  89: 'D7', //y
};

var keyListener = {
  setListener: function() {
    $(document).on("keydown", this.keyDowned);
    $(document).on("keyup", this.keyUpped);
  },
  keyDowned: function(e) {
    e.preventDefault();
    KeyActions.keyPressed(Mapping[e.keyCode]);
  },
  keyUpped: function(e) {
    e.preventDefault();
    KeyActions.keyOff(Mapping[e.keyCode]);
  }
};

module.exports = keyListener;
