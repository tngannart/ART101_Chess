let b1;
let lions;
let slowerMovement = false;
let isPastelActive = false;  
let jumpEffect = false; 

function setup() {
  createCanvas(500,500);
  background(20,10,20,3);
  fill(255);
  angleMode(DEGREES);

  lions = new Array(18);

  b1 = new oLion(color(255,random(255),0), 250,250,0,random(2),0 );
  for (let i = 0; i < lions.length; i++) {
    lions[i] = new oLion(color(random(255), random(255), random(255)), random(width), random(height), random(255), random(0.5, 1.5), 1);
  }
}

function draw() {
  background(10,23,20,10);

  for (let i = 0; i < lions.length; i++) {
    lions[i].displayLion();
    lions[i].updateLion();
  }
  for (let i = 0; i < lions.length; i++) {
    lions[i].displayLion();
    if (!slowerMovement) lions[i].updateLion();
  }
}

function randomPastelColor() {
  return color(random(200, 255), random(200, 255), random(200, 255));  // Lighter color range for pastel
}

function keyPressed() {
//   // for (let i = 0; i < lions.length; i++) {
//   //     lions[i].setNose(1); 
//   // }
  if (key === 's' || key === 'S') {
  slowerMovement = !slowerMovement;
  }
  if (key === 'r' || key === 'R') {  
    isPastelActive = !isPastelActive;  

    for (let i = 0; i < lions.length; i++) {
      if (isPastelActive) {
        lions[i].k = randomPastelColor();  
      } else {
        lions[i].k = color(random(255), random(255), random(255)); 
      } 
    }

    if (isPastelActive) {
      b1.k = randomPastelColor();  
    } else {
      b1.k = random(255);  
    }
  }
  if (key === 'm' || key === 'M') { 
    jumpEffect = !jumpEffect;
    if (jumpEffect) {
      for (let i = 0; i < lions.length; i++) {
        lions[i].sx = random(-5, 5);
        lions[i].sy = random(-5, 5);
      }
      b1.sx = random(-5, 5);
      b1.sy = random(-5, 5);
    } else {
      // Reset speed
      for (let i = 0; i < lions.length; i++) {
        lions[i].sx = random(-3, 3);
        lions[i].sy = random(-3, 3)
      }
      b1.sx = random(-3, 3);
      b1.sy = random(-3, 3);
    }
  }
}
function mousePressed() {
  // Reset each lion's position 
  for (let i = 0; i < lions.length; i++) {
    lions[i].lx = random(width);  
    lions[i].ly = random(height);
    lions[i].pastelColor = color(random(255), random(255), random(255));
  }
  b1.lx = random(width);  
  b1.ly = random(height);
  b1.pastelColor = randomPastelColor(); 
}



