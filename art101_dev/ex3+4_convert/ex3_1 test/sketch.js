// Example 2.3.1  Wrap Around vector movement code
let lox, loy;

let speedx, speedy;


function setup(){
createCanvas(500,500);
lox = width/2;
loy = height/2;
speedx = random(-10,10);
speedy = random(-10,10);

console.log(speedx + " " + speedy);

}

function draw(){
    background(0,20);

    ellipse(lox,loy,20,20,50);

   

    if (lox >width){        //reset right
        lox = 0;        //back to left

    }
    if (lox <0){        //reset left
        lox = width;       //back to right

    }

    if (loy >height){       //reset bottom
        loy = 0;        //back to top

    }
    if (loy < 0){           //reset top
        loy = height;   //back to bottom

    }
     lox+= speedx;
    loy+= speedy;


}



// let speedx, speedy, lox, loy;

// function setup() {
//     background(0);
//     createCanvas(500, 500);
//     // making a random negative or positive value
//     speedx = random(-2, 2);
//     // another way of doing the same thing
//     speedy = 2 - random(4);
//     lox = height / 2;
//     loy = width / 2;
// }

// function draw() {
//     background(0);
//     if (lox < 0) {
//         lox = width;
//     }
//     if (lox > width) {
//         lox = 0;
//     }
//     if (loy < 0) {
//         loy = height;
//     }
//     if (loy > height) {
//         loy = 0;
//     }

//     // update the position of the ball and print to screen
//     lox += speedx;
//     loy += speedy;
//     fill(255);
//     ellipse(lox, loy, 20, 20);
// }