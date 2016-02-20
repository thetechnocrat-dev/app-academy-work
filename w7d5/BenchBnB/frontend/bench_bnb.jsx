var React = require('react');
var ReactDOM = require('react-dom');
var Dispatcher = require('./dispatcher/dispatcher');
var ApiUtil = require('./util/api/api_util');
var BenchStore = require('./stores/bench');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

// Components
var Index = require('./components/index');
var Map = require('./components/map');
var Search  = require('./components/Search');

// var routes = (
//   <Route component={ } path ='/'>

//   </Route>
// );


document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('#root');
  ReactDOM.render(<Search />, root);
});
