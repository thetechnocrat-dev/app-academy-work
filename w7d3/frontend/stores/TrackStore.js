var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');

var _tracks = [];

var TrackStore = new Store(AppDispatcher);

function _deleteTrack(track) {
  var idx = _tracks.indexOf(track);
  if(idx === -1){return;}
  _tracks.splice(idx,1);
}

TrackStore.all = function() {
  return _tracks.slice();
};

TrackStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "RECEIVE_TRACK":
      _tracks.push(payload.track);
      TrackStore.__emitChange();
      break;
    case "DELETE_TRACK":
      _deleteTrack(payload.track);
      TrackStore.__emitChange();
      break;
  }
};

module.exports = TrackStore;
