var AppDispatcher = require("../dispatcher/Dispatcher");

var TrackActions = {
  saveTrack : function(track) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_TRACK",
      track: track
    });
  },
  deleteTrack: function(track) {
    AppDispatcher.dispatch({
      actionType: "DELETE_TRACK",
      track: track
    });
  }
};

module.exports = TrackActions;
