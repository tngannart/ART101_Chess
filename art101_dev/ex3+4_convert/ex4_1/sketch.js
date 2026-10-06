let lox = 50;
let loy = 50;
let speedx = 2;
let speedy = 2;

let lox2 = 400;
let loy2 = 400;
let speedx2 = -2;
let speedy2 = -2;

function setup() {
  createCanvas(500, 500);
  noStroke();
  fill(200);
}

function draw() {
  background(59, 222, 158);

  // Draw first lion with transformations and bounce
  lion(lox, loy, frameCount * 0.02, 0.75);
  lox += speedx;
  loy += speedy;

  if (lox <= 0 || lox >= width) speedx *= -1;
  if (loy <= 0 || loy >= height) speedy *= -1;

  // Draw second lion with different transformations and bounce
  lion2(lox2, loy2, frameCount * -0.03, 0.6);
  lox2 += speedx2;
  loy2 += speedy2;

  if (lox2 <= 0 || lox2 >= width) speedx2 *= -1;
  if (loy2 <= 0 || loy2 >= height) speedy2 *= -1;
}

function lion(lx, ly, rot, sc) {
  push();
  translate(lx, ly);
  rotate(rot);
  scale(sc);
  mane(); // Child function
  head();
  eye();
  ear();
  nose();
  mouth();
  cutieCheek();
  pop();
}

function lion2(lx, ly, rot, sc) {
  push();
  translate(lx, ly);
  rotate(rot);
  scale(sc);
  customMane(); // Different mane
  head();
  customEye(); // Different eye style
  ear();
  nose();
  mouth();
  pop();
}

// ✅ Custom function without arguments
function mane() {
  push();
  fill(255, 165, 0);
  for (let i = 0; i < 360; i += 36) {
    let x = cos(radians(i)) * 100;
    let y = sin(radians(i)) * 100;
    ellipse(0 + x, 0 + y, 80, 80);
  }
  pop();
}

// ✅ Custom function with arguments
function customMane() {
  push();
  fill(200, 100, 0);
  for (let i = 0; i < 360; i += 30) {
    let x = cos(radians(i)) * 90;
    let y = sin(radians(i)) * 90;
    ellipse(0 + x, 0 + y, 60, 60);
  }
  pop();
}

// ✅ Custom function without arguments
function head() {
  push();
  fill(255, 255, 0);
  stroke(1);
  ellipse(0, 0, 160, 160);
  pop();
}

function ear() {
  push();
  fill(255, 255, 0);
  stroke(1);
  ellipse(50, -70, 50, 50); // Right ear
  ellipse(-50, -70, 50, 50); // Left ear
  pop();
}

// ✅ Custom function with arguments
function eye() {
  push();
  fill(255);
  stroke(1);
  ellipse(-30, -20, 25, 25);
  ellipse(30, -20, 25, 25);
  fill(0);
  ellipse(-25, -20, 10, 10);
  ellipse(25, -20, 10, 10);
  pop();
}

function customEye() {
  push();
  fill(255);
  stroke(1);
  ellipse(-30, -20, 30, 30);
  ellipse(30, -20, 30, 30);
  fill(0);
  ellipse(-25, -20, 12, 12);
  ellipse(25, -20, 12, 12);
  pop();
}

function nose() {
  push();
  fill(205, 127, 50);
  triangle(-10, 5, 10, 5, 0, 25);
  pop();
}

function mouth() {
  push();
  noFill();
  stroke(0);
  arc(-10, 30, 20, 10, 0, PI);
  arc(10, 30, 20, 10, 0, PI);
  pop();
}

function cutieCheek() {
  push();
  fill(253, 49, 5);
  ellipse(45, 20, 40, 20); // Right cheek
  ellipse(-45, 20, 40, 20); // Left cheek
  pop();
}
