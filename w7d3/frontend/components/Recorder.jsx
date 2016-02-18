var React = require('react');
var Track = require('../util/Track');
var KeyStore = require('../stores/KeyStore');
var TrackActions = require("../actions/TrackActions");

var Recorder = React.createClass({
  getInitialState: function() {
    return ({
      isRecording: false,
      track: new Track({name: 'joshs beats'})
    });
  },
  handleChangeNote: function() {
    if (this.state.isRecording) {
      this.state.track.addNotes(KeyStore.all());
    }
  },
  componentDidMount: function() {
    KeyStore.addListener(this.handleChangeNote);
  },
  toggleRecording: function() {
    if(!this.state.isRecording){
      this.state.track.StartRecording();
    }else if (this.state.isRecording) {
      this.state.track.StopRecording();
    }

    this.setState({isRecording: !this.state.isRecording});
  },
  playRecording: function() {
    this.state.track.play();
  },
  saveRecording: function() {
    TrackActions.saveTrack(this.state.track);
    this.setState({track: new Track({name: 'scotts Beat'})});
  },
  render: function() {
    return (
      <div>
        <button onClick={this.toggleRecording}>
          {this.state.isRecording ? "Stop Recording" : "Start Recording"}
        </button><br />
        <button onClick={this.playRecording}>
          Play
        </button><br />
        <button onClick={this.saveRecording}>
          Save
        </button>

      </div>
    );
  }

});

module.exports = Recorder;
