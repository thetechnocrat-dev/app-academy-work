var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');
var ApiUtil = require('../util/apiUtil');

var PokemonActions = {
  recieveAllPokemons: function (data) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECIEVED,
      pokemons: data
    });
  },
  retrieveAllPokemons: function() {
    ApiUtil.fetchAllPokemons(this.recieveAllPokemons);
  },
  recieveOnePokemon: function (data) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.A_POKEMON_RECIEVED,
      pokemon: data
    });
  },
  retrieveOnePokemons: function(pokemonId) {
    ApiUtil.fetchOnePokemon(pokemonId, this.recieveOnePokemon);
  },
};

module.exports = PokemonActions;
