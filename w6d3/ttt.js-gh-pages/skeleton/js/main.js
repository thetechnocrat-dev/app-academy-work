var View = require('./ttt-view');
var Game = require('../../ttt-core-solution/game');

$(function () {
  // Your code here
  var $board = $(".ttt");
  var game = new Game();
  new View($board, game);
});
