var MoveError = require("/Users/appacademy/Desktop/w6d3/ttt.js-gh-pages/ttt-core-solution/moveError.js");

var View = function ($el, game) {
  this.$el = $el;
  this.game = game;
  this.setupBoard();
  this.bindEvents();
};

View.prototype.bindEvents = function () {
  this.$el.find(".pos").on("click",this.makeMove.bind(this));
};

View.prototype.makeMove = function (e) {
  e.preventDefault();
  var $pos = $(e.currentTarget);
  try {
    this.game.playMove($pos.data("p"));
    $pos.text(this.game.currentPlayer);
  } catch (r) {
    if (r instanceof MoveError) {
      // console.log(e.msg);
      alert(r.msg);
    } else {
      throw r;
    }
  }
  if (this.game.isOver()) {
    if (this.game.winner() !== null) {
      alert(this.game.currentPlayer + " has won!");
    }
    else {
      alert("no winner");
    }
  }
};

View.prototype.setupBoard = function () {
  for(var i = 0; i < 3; i ++) {
    this.addRow();
  }
};

View.prototype.addRow = function() {
  var rowIdx = this.$el.find(".row").length;
  var $row = $("<ul>").addClass("row").addClass("group");
  for(var colIdx = 0; colIdx < 3; colIdx++) {
    var $pos = $("<li>").addClass("pos").data("p", [rowIdx, colIdx]);
    $row.append($pos);
  }
  this.$el.append($row);
};

module.exports = View;
