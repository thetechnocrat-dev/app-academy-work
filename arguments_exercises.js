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

var curriedSum = function(numArgs) {
  var numbers = [];
  var _curriedSum = function (num) {

    numbers.push(num);
    if (numbers.length === numArgs) {
      var output = _und.reduce(numbers, function(memo, eachNum) {
        return memo + eachNum;
      });
      return output;
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
};

Function.prototype.curry = function(numArgs) {
  var func = this;

  var numbers = [];
  var _curried = function (num) {

    numbers.push(num);
    if (numbers.length === numArgs) {
      var output = func.apply(null, numbers);
      return output;
    } else {
      return _curried;
    }
  };

  return _curried;
};

function summy(numArr) {
  var output = numArr.reduce( function(memo, num) {
    return memo + num;
  });
  return output;
}

console.log(summy.apply(this, [[1,2,3,4]]));
console.log(summy([1,2,3,4]));
//
// var sum2 = summy.curry(4);
//
// console.log(sum2(5)(30)(20)(1));
