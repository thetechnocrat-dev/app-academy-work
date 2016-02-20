var React = require('react');
var Index = require('./index');
var Map = require('./map');

var Search = React.createClass({

  render: function() {
    return (
      <div>
        <Index />
        <Map />
      </div>
    );
  }

});

module.exports = Search;
