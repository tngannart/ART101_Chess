// Spring drawing constants for top bar
let springHeight = 32,
    left,
    right,
    maxHeight = 200,
    minHeight = 100,
    over = false,
    move = false;

// Spring simulation constants
let M = 0.8,  // Mass
    K = 0.2,  // Spring constant
    D = 0.92, // Damping
    R = 150;  // Rest position

// Spring simulation variables
let ps = R,   // Position
    vs = 0.0, // Velocity
    as = 0,   // Acceleration
    f = 0;    // Force

// Variables for flowers
let flowers = [];  // Array to store flowers (each flower is an object)

// Flower object properties
function Flower(x, y, speedX, speedY) {
  this.x = x;
  this.y = y;
  this.speedX = speedX;
  this.speedY = speedY;
  this.size = random(10, 20);  // Random size for each flower

  // Update position of each flower
  this.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY += 0.1; // Simulate gravity

    // Remove flower if it moves off-screen
    if (this.y > height || this.x < 0 || this.x > width) {
      return true;
    }
    return false;
  };

  // Draw the flower
  this.show = function() {
    fill(random(255), random(255), random(255));
    noStroke();
    ellipse(this.x, this.y, this.size);
    
    };
  }


function setup() {
  createCanvas(710, 400);
  rectMode(CORNERS);
  noStroke();
  left = width / 2 - 100;
  right = width / 2 + 100;
}

function draw() {
  background(0, 191, 255);
  updateSpring();
  drawSpring();
  updateFlowers();
}

function drawSpring() {
  // Draw base
  fill(51,102,0);
  let baseWidth = 0.5 * ps + -8;
  rect(width / 2 - baseWidth, ps + springHeight, width / 2 + baseWidth, height);

  // Set color and draw top bar
  if (over || move) {
    fill(77, 153, 0);
  } else {
    fill(89, 179, 0);
  }

  rect(left, ps, right, ps + springHeight); // Draw the top bar
}

function updateSpring() {
  // Update the spring position based on physics
  if (!move) {
    f = -K * (ps - R); // Calculate force using Hooke's law: f = -k * (x - R)
    as = f / M;        // Calculate acceleration using Newton's second law: F = ma
    vs = D * (vs + as); // Update velocity with damping factor
    ps = ps + vs;      // Update position based on velocity
  }

  if (abs(vs) < 0.1) {
    vs = 0.0; // Stop moving if velocity is too low
  }

  // Check if mouse is over the top bar
  if (mouseX > left && mouseX < right && mouseY > ps && mouseY < ps + springHeight) {
    over = true;
  } else {
    over = false;
  }

  // If in "move" state, position the top bar at mouse position, constrained to minHeight and maxHeight
  if (move) {
    ps = mouseY - springHeight / 2;
    ps = constrain(ps, minHeight, maxHeight); // Constrain the position between minHeight and maxHeight
  }
}

function updateFlowers() {
  // Update and draw all flowers
  for (let i = flowers.length - 1; i >= 0; i--) {
    let flower = flowers[i];
    flower.update(); // Update position based on speed and gravity
    flower.show();   // Draw flower

    // Remove flower if it moves off-screen
    if (flower.update()) {
      flowers.splice(i, 1);  // Remove flower from array if it's off-screen
    }
  }
}

function mousePressed() {
  if (over) {
    move = true; // Begin moving the spring if mouse is over the bar
  
  }
}

function mouseReleased() {
  move = false; // Stop moving the spring when mouse is released
  // When released, create flowers (bubbles) at the current position of the spring
  let numFlowers = 10; // Number of flowers to shoot
  for (let i = 0; i < numFlowers; i++) {
    // Randomize the speed and direction of each flower
    let speedX = random(-2, 2);
    let speedY = random(-5, -10);

    flowers.push(new Flower(width / 2, ps, speedX, speedY));
    
  }
}
