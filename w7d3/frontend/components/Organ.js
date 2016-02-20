var React = require('react');
var Tones = require('../constants/Tones');
var Key = require('./Key');
var Recorder = require('./Recorder');
var JukeBox = require('./Jukebox');

var Organ = React.createClass({
  createKeys: function(){
    return Object.keys(Tones).map(function(el) {
      return <Key key={el} noteName={el} />;
    });
  },

  render: function() {
    return (
      <div>
        <Recorder />
        <div className="organ">
          {this.createKeys()}
        </div>
        <JukeBox />
      </div>
    );
  }

});

module.exports = Organ;
