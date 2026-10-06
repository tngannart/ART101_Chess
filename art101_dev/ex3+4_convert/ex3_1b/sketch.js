function setup() {
    background(0);
    createCanvas(500, 500);
    // making a random negative or positive value
    speedx = random(-2, 2);
    // another way of doing the same thing
    speedy = 2 - random(4);
    lox = height / 2;
    loy = width / 2;

    console.log(speedx + " " + speedy);
}

function draw() {
    background(0);
    fill(50);
    rect(100,100,300,300);
    // left border
    if (lox < 0) {
        lox = 400;
    }
    //right border
    if (lox > 400) {
        lox = 100;
    }
    //top border
    if (loy < 0) {
        loy = height;
    }
    //bottom border
    if (loy > height) {
        loy = 0;
    }

    // update the position of the ball and print to screen
    lox += speedx;
    loy += speedy;
    fill(255);
    ellipse(lox, loy, 20, 20);
}