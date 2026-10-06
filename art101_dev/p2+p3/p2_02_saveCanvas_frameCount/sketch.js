let recMode = false;

let can;  // create a canvas reference
let s1,s2;

function setup() {
    can = createCanvas(1920, 1080);
    background(20);
    fill(255);
    frameRate(30); // slow down the framerate so everything can be drawn. no hurry.
    noLoop();


    s1 = new sdSine(6,200,0.0,100,200,80, color(200,100,0));
    s2 = new sdSine(6,200,0.5,100,200,80,color(100,200,0));

    // 30 frames   times 10
    console.log(frameCount);
}

function draw() {
    
  background(0,5);
 
 
    
    //  start as true until 99
    if (frameCount < 150) {
        console.log("the first act");
        fill(0, 255, 0);
        ellipse(width / 2, height / 3, 80, 80);

        s1.calcWave();
        let tempy = s1.getsineball(3);
        fill(200,0,0);
        ellipse(50,tempy+200, 40,20);

        // true between 100 and 199
    } else if (frameCount < 300) {
        console.log("the second act");
        s1.calcWave();
        s1.renderWave(100,100,5,.75);
        fill(255, 255, 0);
        ellipse(width / 2, height / 3, 80, 80);


        // true once it reaches frame 300
    } else {
        console.log("the third act");
        fill(255, 0, 0);
        ellipse(width / 2, height / 3, 80, 80);
        s1.calcWave();
        s1.renderWave(100,100,5,.75);

        s2.calcWave();
        s2.renderWave(150,110,5,.75);
    }



   //recordit();

}


/////////////////////// use both keyPressed and recordit ///////////

function keyPressed() {

    if (keyIsPressed === true) {
        let k = key;
        console.log("k is " + k);

        if (k == 's' || k == 'S') {
            console.log("Stopped Recording");
            recMode = false;
            noLoop();
        }

        if (k == ' ') {
            console.log("Start Recording");
            recMode = true;
            loop();
        }
    }
}

function recordit() {  // new version
    if (recMode == true) {
        let ext = nf(frameCount, 4);
        saveCanvas(can, 'frame-' + ext, 'jpg');
        console.log("rec " + ext);
    }
}


// sine to class conversion example
// xspacing = 50; // Distance between each horizontal location
// w; // Width of entire wave
// theta = 0.0; // Start angle at 0
// amplitude = 100.0; // Height of wave
// period = 500.0; // How many  before the wave repeats
// dx; // Value for incrementing x
// yvalues; // Using an array to store the balls





class sdSine {


 xspacing; 
 w; 
 theta; 
 amplitude; 
 period; 
 dx; 
 yvalues; 
 k;


  constructor(lxs,lw,lt,la,lp,llen,lk) {

    this.xspacing = lxs; 
    this.w = lw;
    this.theta = lt; 
    this.amplitude = la;
    this.period = lp; 
    this.dx = (TWO_PI / this.period) * this.xspacing;
    this.yvalues = new Array(llen);

    this.k = lk;


   
  }

  // display 

   calcWave() {
    // Increment theta (try different values for
    // 'angular velocity' here)
    this.theta += 0.02;
  
    // For every x value, calculate a y value with sine function
    let x = this.theta;
    for (let i = 0; i < this.yvalues.length; i++) {
      this.yvalues[i] = sin(x) * this.amplitude;
      x += this.dx;
    }
  }
  
   renderWave(lx,ly,rot,sc) {
    noStroke();
    fill(this.k);

    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);

    // A simple way to draw the wave with an ellipse at each location
    for (let x = 0; x < this.yvalues.length; x++) {
      ellipse(x * this.xspacing, this.yvalues[x], 16, 16);
    }

    pop();
  }
  
  getsineball(wb) {
     // wb = 0;
   return  this.yvalues[wb];

  }

  // action


}