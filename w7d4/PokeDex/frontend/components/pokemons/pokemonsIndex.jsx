var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var PokemonActions = require('../../actions/pokemonActions');
var PokemonIndexItem = require('./PokemonIndexItem');


var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return { pokemon : PokemonStore.all() };
  },
  _onChange : function () {
    this.setState({pokemon : PokemonStore.all()});

  },
  componentDidMount: function() {
    this.pokemonToken = PokemonStore.addListener(this._onChange);
    PokemonActions.retrieveAllPokemons();
  },
  componentWillUnmount : function () {
    this.pokemonToken.remove();
  },

  createPokemonsList: function() {
    var listOfPokemons = this.state.pokemon.map(function(el, idx) {
      return (
        <PokemonIndexItem key={idx} pokemon={el}/>
        // <li key={idx} pokemon={el}> {el.name + "----" + el.poke_type} </li>
      );
    });
    return listOfPokemons;
  },

  render: function() {
    return (
        <ul>
          {this.createPokemonsList()}
        </ul>
    );
  }

});

module.exports = PokemonsIndex;
