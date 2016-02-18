var React = require('react');
var PropTypes = React.PropTypes;
var TrackStore = require("../stores/TrackStore");
var TrackPlayer = require('./TrackPlayer');

var JukeBox = React.createClass({
  getInitialState: function() {
    return { tracks: TrackStore.all() };
  },

  componentDidMount: function() {
    TrackStore.addListener(this.handleTrackStore);
  },

  handleTrackStore: function() {
    this.setState({ tracks: TrackStore.all() });
  },

  createTracks: function(){

    return TrackStore.all().map(function(el,idx) {
      return <TrackPlayer key={idx} track={el} />;
    });
  },

  render: function() {
    return (
      <div>
        {this.createTracks()}
      </div>
    );
  }

});

module.exports = JukeBox;
