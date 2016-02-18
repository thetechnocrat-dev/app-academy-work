var React = require('react');
var TrackActions = require('../actions/TrackActions');

var TrackPlayer = React.createClass({
  playRecording: function() {
    this.props.track.play();
  },
  deleteRecording: function() {
    TrackActions.deleteTrack(this.props.track);
  },
  render: function() {
    return (
      <div>
        {this.props.track.name}
        <button onClick={this.playRecording}>
          Play
        </button><br />
        <button onClick={this.deleteRecording}>
          Delete
        </button>
      </div>
    );
  }

});

module.exports = TrackPlayer;
