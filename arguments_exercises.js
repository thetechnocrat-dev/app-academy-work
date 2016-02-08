var _und = require("underscore");

function sum (nums) {
  var newarr = [].slice.call(arguments);
  var output = _und.reduce(newarr, function(memo, num) {
    return memo + num;
  });
  return output;
}

console.log(sum(1,2,3,4,5));
