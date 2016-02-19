
var ApiUtil = {
  fetchAllPokemons: function(callback) {
    $.ajax({
      url: 'api/pokemon',
      dataType: 'json',
      success:
        callback
    });
  },

  fetchOnePokemon: function(pokemonId, callback) {
    $.ajax({
      url: 'api/pokemon/' + pokemonId,
      dataType: 'json',
      success:
        function(pokemon) {
          console.log(pokemon);
        }
    });
  }
};

module.exports = ApiUtil;
