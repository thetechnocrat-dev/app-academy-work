
var MovingObject = function (mo) {
  this.pos = mo.pos;
  this.vel = mo.vel;
  this.radius = mo.radius;
  this.color = mo.color;
};

var ctx = document.getElementById('canvas').getContext('2d');


function draw(movingObject, ctx) {
  console.log(movingObject.color);
  var xCoord = movingObject.pos[0];
  var yCoord = movingObject.pos[1];
  ctx.beginPath();
  ctx.arc(xCoord,yCoord, movingObject.radius, 0, Math.PI*2);
  ctx.fillStyle = movingObject.color;
  ctx.fill();
}

function move(movingObject) {
  movingObject.pos[0] += movingObject.vel[0];
  movingObject.pos[1] += movingObject.vel[1];

  if (movingObject.pos[0] > 1000 || movingObject.pos[0] < 0) {
    var rand1 = 5 * Math.random();
    movingObject.vel[0] *= -1; // * rand1;
  }

  if (movingObject.pos[1] > 1000 || movingObject.pos[1] < 0) {
    var rand2 = 5 * Math.random();
    movingObject.vel[1] *= -1; //* rand2;
  }

  console.log("hello");
}

// testing

var mo = {
  pos: [600, 10],
  vel: [4, 5],
  radius: 50,
  color: "blue"
};

var mo1 = {
  pos: [40, 600],
  vel: [5, 5],
  radius: 50,
  color: "red"
};

var mo2 = {
  pos: [20, 600],
  vel: [6, 5],
  radius: 50,
  color: "green"
};

var mo3 = {
  pos: [600, 10],
  vel: [7, 5],
  radius: 50,
  color: "purple"
};

var testcircle = new MovingObject(mo);
var testcircle1 = new MovingObject(mo1);
var testcircle2 = new MovingObject(mo2);
var testcircle3 = new MovingObject(mo3);


function lastHope(movingObject, ctx) {
  move(movingObject);
  draw(movingObject, ctx);
}

var testMovCir = function() {
  var moveTest = lastHope.bind(null, testcircle, ctx);
  window.setInterval(moveTest, 20);
};
var testMovCir1 = function() {
  var moveTest1 = lastHope.bind(null, testcircle1, ctx);
  window.setInterval(moveTest1, 20);
};
var testMovCir2 = function() {
  var moveTest2 = lastHope.bind(null, testcircle2, ctx);
  window.setInterval(moveTest2, 20);
};
var testMovCir3 = function() {
  var moveTest3 = lastHope.bind(null, testcircle3, ctx);
  window.setInterval(moveTest3, 20);
};

draw(testcircle1, ctx);
draw(testcircle, ctx);

draw(testcircle2, ctx);
draw(testcircle3, ctx);

testMovCir();
testMovCir1();
testMovCir2();
testMovCir3();

// window.setTimeout(50000);
// move(testcircle);
//
// var moveTest = draw.bind(null, testcircle, ctx);
//
