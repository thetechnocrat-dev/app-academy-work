var React = require('react');
var History = require('react-router').History;

var PokemonIndexItem = React.createClass({
  mixins: [History],

clickPokemon: function() {
  this.history.push("pokemon/" + this.props.pokemon.id);
},

  render: function() {
    return (
      <li className="poke-list-item" onClick={this.clickPokemon}> {this.props.pokemon.name}</li>
    );
  }

});

module.exports = PokemonIndexItem;
