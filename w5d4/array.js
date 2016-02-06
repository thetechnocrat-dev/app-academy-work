// open -a "Google Chrome" test.html NB

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

// ask about setting defaults
Array.prototype.myInject = function(funct, acc) {
  this.myEach(function(element) {
    acc = funct(acc, element);
  });

  return acc;
};

Array.prototype.bubbleSort = function() {
  do {
    var swapped = false;
    for (var i = 0; i < this.length - 1; i++){
      if (this[i] > this[i+1]) {
        var temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return this;
};

String.prototype.substrings = function() {
  var subStrings = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length + 1; j++) {
      subStrings.push(this.substring(i,j));
    }
  }

  return subStrings;
};

var exp = function(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return exp(base, exponent - 1) * base;
};

var fib = function(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  }
  var prevFibs = fib(n - 1);
  var currentFib = prevFibs[prevFibs.length - 1] +
                   prevFibs[prevFibs.length - 2];

  prevFibs.push(currentFib);
  return prevFibs;
};

// ask about tab conventions ask if there is a differnece between
//this and var = function
function binarySearch(array, target) {
  if (array.length === 0) {
    return null;
  } else if (array.length === 1 && array[0] !== target) {
    return null;
  }

  var mid = Math.floor(array.length / 2);

  if (array[mid] < target) {
    var right = array.slice(mid, array.length);
    return binarySearch(right, target) + mid;
  } else if (array[mid] > target) {
      var left = array.slice(0, mid);
      return binarySearch(left, target);
  } else {
      return mid;
  }
}

function mergeSort(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  }

  var pivot = Math.floor(array.length / 2);
  var left = array.slice(0, pivot);
  var right = array.slice(pivot, array.length);

  return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
  var mergedArray = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      mergedArray.push(right.shift());
    } else {
      mergedArray.push(left.shift());
    }
  }

  return mergedArray.concat(left).concat(right);
}

function Cat(name, owner) {
  this.name = name;
  this.owner =  owner;
}

Cat.prototype = {
  cuteStatement: function() {
    console.log(this.owner + ' loves ' + this.name);
  }
};

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype = {
  name: function() { return this.firstName + ' ' + this.lastName; },

  enroll: function(course) {
    this.courses.push(course);
    course.students.push(this);
  },

  course_load: function() {
    var deptHash = {};

    var makeDepartmentHash = function(course) {
        if (deptHash[course.department] === undefined) {
          deptHash[course.department] = 0;
        }

        deptHash[course.department] += course.numOfCredits;
    };

    this.courses.forEach(makeDepartmentHash);
    return deptHash;
  }
};

function Course(name, department, numOfCredits) {
  this.name = name;
  this.department = department;
  this.numOfCredits = numOfCredits;
  this.students = [];
}

Course.prototype = {
  add_student: function(student) {
    student.enroll(this);
  }
};

var americanHist = new Course("American History", "History", 4);
var europeanHist = new Course("European History", "History", 3);
var ned = new Student("Ned", "LastName");
