var _und = require("underscore");

function sum (nums) {
  var newarr = [].slice.call(arguments);
  var output = _und.reduce(newarr, function(memo, num) {
    return memo + num;
  });
  return output;
}

Function.prototype.myBind = function(context) {
  var func = this; //referring to "says"\
  var args = [].slice.call(arguments); // arguments passed when declaring it

  var residue = args.slice(1);
  return function() {
    console.log(residue);
    var fixed = residue.concat([].slice.call(arguments));

    console.log(arguments);

    return func.apply(context, fixed);
  };
};

function Cat(name) {
  this.name = name;
}

Cat.prototype.says = function (sound, person) {
  console.log(this.name + " says " + sound + " to " + person + "!");
  return true;
};

var markov = new Cat("Markov");
var breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true


var boundMarkov = markov.says.myBind(breakfast); // decloared it
boundMarkov("meow", "a tree"); // called it

markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

var notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true
