var React = require('react');
var ReactDOM = require('react-dom');
var Dispatcher = require('./dispatcher/dispatcher');
var ApiUtil = require('./util/api/api_util');
var BenchStore = require('./stores/bench');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

// var routes = (
//   <Route component={App} path ='/'>
//     <Route component={PokemonDetail} path ='pokemon/:pokemonId'>
//       <Route component={ToyDetail} path='toys/:toyId'>
//
//       </Route>
//     </Route>
//   </Route>
// );


document.addEventListener('DOMContentLoaded', function () {

  var root = document.querySelector('#root');
  ReactDOM.render(<div>test</div>, root);
});
