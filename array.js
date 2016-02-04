// Array.prototype = {
//   myUniq: function() {
//     var seenValues = [];
//     for(var i = 0; i < this.length; i++) {
//       if (!seenValues.includes(this[i])) {
//         seenValues.push(this[i]);
//       }
//     }
//     return seenValues;
//   }
//
// };

Array.prototype.myUniq = function() {
  var seenValues = [];
  for(var i = 0; i < this.length; i++) {
    if (!seenValues.includes(this[i])) {
      seenValues.push(this[i]);
    }
  }

  return seenValues;
};

Array.prototype.myTwoSum = function(target) {
  for(var i = 0; i < this.length-1; i++) {
    for(var i2 = i+1; i2 < this.length; i2++) {
      if (this[i] + this[i2] === target) {
        return [i, i2];
      }
    }
  }
  return null;
};

Array.prototype.myTranspose = function() {
  var transpose = [];
  for(var row = 0; row < this.length; row++) {
    var newCol = [];
    for(var col = 0; col < this[row].length; col++) {
      newCol.push(this[col][row]);
    }
    transpose.push(newCol);
  }
  return transpose;
};

Array.prototype.myEach = function(funct) {
  for(var i = 0; i < this.length; i++) {
    funct(this[i]);
  }
  return this;
};

Array.prototype.myMap = function(funct) {
  var newAry = [];
  this.myEach(function(element) {
    newAry.push(funct(element));
  });
  return newAry;
};

Array.prototype.myInject = function(funct, acc) {

  this.myEach(function(element) {
    acc += funct(element);
  });

  return acc;
};
