var React = require('react');
var ReactDOM = require('react-dom');
var Dispatcher = require('./dispatcher/dispatcher');
var ApiUtil = require('./util/apiUtil');
var PokemonStore = require('./stores/pokemon');
var PokemonsIndex = require("./components/pokemons/pokemonsIndex.jsx");
var PokemonDetail = require('./components/pokemons/pokemonDetail');
var ToyDetail = require('./components/toys/toyDetail');
var App = require('./components/app');

var Router = require('react-router').Router;
var Route = require('react-router').Route;

var routes = (
  <Route component={App} path ='/'>
    <Route component={PokemonDetail} path ='pokemon/:pokemonId'>
      <Route component={ToyDetail} path='toys/:toyId'>

      </Route>
    </Route>
  </Route>
);

window.ApiUtil = ApiUtil;
window.PokemonStore = PokemonStore;


document.addEventListener('DOMContentLoaded', function () {

  var root = document.querySelector('#root');
  ReactDOM.render(<Router>{routes}</Router>, root);
  // ReactDOM.render(<PokemonsIndex />, root);
});
