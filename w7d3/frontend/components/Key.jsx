var React = require('react');
var KeyStore = require('../stores/KeyStore');
var Tones = require('../constants/Tones');
var Note = require('../util/Notes');

var Key = React.createClass({
  getInitialState: function() {
    return { playing: "note" };
  },
  _keyChanged: function(){
    var keys = KeyStore.all();
    if (keys.indexOf(this.props.noteName) !== -1) {
      this.note.start();
      this.setState({ playing: "note playing-note" });
    } else {
      this.note.stop();
      this.setState({ playing: "note" });
    }
  },
  componentDidMount: function() {
    this.listnerToken = KeyStore.addListener(this._keyChanged);
    this.note = new Note(Tones[this.props.noteName]);
  },
  componentWillUnmount: function() {
    this.listnerToken.remove();
  },
  render: function() {
    return (
      <div id={this.props.noteName} className={this.state.playing}>
        {this.props.noteName}
      </div>
    );
  }

});

module.exports = Key;
