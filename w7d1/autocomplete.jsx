var React = require("react");

var Names = React.createClass({
  render: function(){
    var input = this.props.input;
    var names = this.props.names;

    var matchedNames = [];
    names.forEach( function(name, index) {
      var matcher = new RegExp( "^" + input, "i" );
      if (name.match(matcher) && input.length >= 1) {
        matchedNames.push(
          <li><strong>{input[0].toUpperCase() + input.slice(1).toLowerCase()}</strong>{name.replace(matcher,"")}</li>
        );
      }
    });
    return (
      <ul>
        {matchedNames}
      </ul>
    );
  }
});

var Autocomplete = React.createClass({
  getInitialState: function() {
    return { input: ""};
  },
  handleChange: function(event) {
    this.setState({input: event.target.value});
  },

  render: function(){
    return(
      <div className="widget">
        <input type="text" value={this.state.input} onChange={this.handleChange}/>
        <Names names={this.props.names} input={this.state.input}/>
      </div>
    );
  }
});

module.exports = Autocomplete;
