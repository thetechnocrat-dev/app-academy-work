var React = require('react');
var ReactDom = require('react-dom');
var keyListener = require('./util/KeyListener');
var Organ = require('./components/Organ');

keyListener.setListener();

document.addEventListener('DOMContentLoaded', function(){
  ReactDom.render(
    <Organ />,
    document.getElementById('content')
  );
});
