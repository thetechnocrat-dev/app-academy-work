var Board = require('./board');
var Player = require('./player');
var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Game(player1, player2) {
  this.board = new Board();
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = this.player1;
}

Game.prototype.switchPlayers = function () {
  this.currentPlayer = this.currentPlayer === this.player1 ?
    this.player2 :
    this.player1;
};

Game.prototype.play = function () {

};

var p1 = new Player("Alice", "x", reader);
var p2 = new Player("Bob", "o", reader);

var game = new Game(p1, p2);

// console.log(game.currentPlayer.name);
// game.switchPlayers();
// console.log(game.currentPlayer.name);
// game.switchPlayers();
// console.log(game.currentPlayer.name);
