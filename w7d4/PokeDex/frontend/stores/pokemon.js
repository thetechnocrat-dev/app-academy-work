var Dispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var _pokemons = {};
var PokemonStore = new Store(Dispatcher);

PokemonStore.resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach(function(pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
};

PokemonStore.find = function(id) {
    return _pokemons[id];
};

PokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'POKEMONS_RECIEVED':
      this.resetPokemons(payload.pokemons);
      this.__emitChange();
      break;
    case 'A_POKEMON_RECIEVED':
      _pokemons[payload.pokemon.id] = payload.pokemon;
      this.__emitChange();
      break;
  }
};

PokemonStore.all = function() {
  var allPokemons = [];
  Object.keys(_pokemons).forEach(function(pokemonKey) {
    allPokemons.push(_pokemons[pokemonKey]);
  });
  return allPokemons;
};



module.exports = PokemonStore;
