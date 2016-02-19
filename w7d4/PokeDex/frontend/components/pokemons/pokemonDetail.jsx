var React = require('react');
var PokemonStore = require('../../stores/pokemon');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return ({pokemon: this.getStateFromStore(this.props.params.pokemonId)});
  },

  getStateFromStore: function(id) {
    return PokemonStore.find(id);
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({pokemon: this.getStateFromStore(newProps.params.pokemonId)});
  },

  makePokemonStats: function() {
    console.log('store', PokemonStore.all());
    console.log('fromestore2', PokemonStore.find('1'));
    console.log('pokemon', this.state.pokemon);
    console.log('id', this.props.params.pokemonId);
    if (this.state.pokemon) {
      return(
        <div className='detail'>
          <img src={this.state.pokemon.image_url}/>
          <br />
          Name: {this.state.pokemon.name}
          <br />
          Atk: {this.state.pokemon.attack}
          <br />
          Def: {this.state.pokemon.defense}
          <br />
          Type: {this.state.pokemon.poke_type}
          <br />
          Moves: {this.state.pokemon.moves}


        </div>
      );
    } else {
      return(
        <div className='detail'></div>
      );
    }
  },

  render: function() {
    return (
      <div>
        <div className='pokemon-detail-pane'>
            {this.makePokemonStats()}
        </div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = PokemonDetail;
