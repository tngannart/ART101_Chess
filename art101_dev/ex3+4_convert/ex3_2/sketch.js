// Example 2.3.2  Bounce Vector Movement Code
let speedx, speedy, lox, loy;

function setup() {
    background(0);
    createCanvas(500, 500);
    speedx = random(-5, 5);
    speedy = random(-5, 5);
    lox = height / 2;
    loy = width / 2;
}

function draw() {
    background(0);

    console.log(speedx + " " + speedy);

    if (lox < 0) {
        speedx = -speedx;
    }
    if (lox > width) {
        speedx = -speedx;
    }
    // this is the short hand way of doing the same as the 2 'ifs' above
    // this uses or '||'
    if ((loy < 0) || (loy > height)) {
        speedy = -speedy;
    }

    // update the position of the ball and print to screen
    lox += speedx;
    loy += speedy;
    fill(lox,loy,loy);
    rect (lox,lox,lox,loy, 5);
    // ball(lox,loy);
    
}

  function ball(lx,ly) {
    fill(120);
    ellipse(lx,ly, 25, 25);
    fill(20,150,100);
    ellipse(lx-4,ly-4, 7, 7);
  }