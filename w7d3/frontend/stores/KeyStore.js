var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');

var _keys = [];

var KeyStore = new Store(AppDispatcher);

function removeKey(noteKey) {
  var idx = _keys.indexOf(noteKey);

  if (idx === -1) { return; }

  _keys.splice(idx,1);
}

KeyStore.all = function() {
  return _keys.slice();
};

KeyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
      case "KEY_PRESSED":
        if (_keys.indexOf(payload.note) === -1) {
          _keys.push(payload.note);
        }
        KeyStore.__emitChange();
        break;
      case "KEY_OFF":
        removeKey(payload.note);
        KeyStore.__emitChange();
        break;
  }
};

module.exports = KeyStore;
