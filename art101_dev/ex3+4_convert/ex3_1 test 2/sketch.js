// Example 2.3.2  Bounce Vector Movement Code
let speedx, speedy, lox, loy;

function setup() {
    background(0);
    createCanvas(500, 500);
    speedx = 1;//random(-5, 5);
    speedy = 1;//random(-5, 5);
    lox = height / 2;
    loy = width / 2;
}

function draw() {
    console.log(speedx + " "+ speedy);
    background(0);
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
    rect (lox,loy,30,30, 5);
    // ball(lox,loy);
    
}

  function ball(lx,ly) {
    fill(120);
    ellipse(lx,ly, 25, 25);
    fill(20,150,100);
    ellipse(lx-4,ly-4, 7, 7);
  }