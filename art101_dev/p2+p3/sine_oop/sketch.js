/* // sine and additive oscill example 
let counter = 0;
let sincount = 0;
let addcount = 0;
let dir = 0;

function setup() {
 createCanvas(1500,500);
 background(20);
 fill(255);
 
 dir = random(-5,5);
 dir = 2;

}

function draw() {
 
 push();
 translate(frameCount,sincount);
// rotate ( counter);   0-360
 rect(0,0,20,20);
 console.log( sin(counter) );
 // remember * is scaling and + is offsetting
  //sincount = sin(counter) * 50  + 200 + addcount;
  sincount = sin(counter) * 50  + 200 + addcount;
 pop();

 counter+=.1;
 addcount += dir;

 if ( addcount < -50 ||  addcount > 150) {
   // background(0,0,random(200),10);
    dir = -dir;
 }
}
 */


// let xspacing = 10; // Distance between each horizontal location
// let w; // Width of entire wave
// let theta = 0.0; // Start angle at 0
// let amplitude = 190.0; // Height of wave
// let period = 500.0; // How many pixels before the wave repeats
// let dx; // Value for incrementing x
// let yvalues; // Using an array to store height values for the wave
// let s1,s2;


// function setup() {
//   createCanvas(710, 400);
//   // w = width + 16;
//   // dx = (TWO_PI / period) * xspacing;
//   // yvalues = new Array(floor(w / xspacing));
//         //xspacing, w theta, amp, peiod,array length
//   s1 = new ntSine(6,200,0.0,100,200,80,color(200,100,0));
//   s2 = new ntSine(6,200,0.5,100,200,80,color(200,100,0));


// }

// function draw() {
//   background(0);
//   s1.calcWave();
//   s1.renderWave(100,100,5,10);

//  s2.calcWave();
//   s2.renderWave(150,100,5,10);
  
//   let tempy = s1.getsineball(3);

//   fill(200,0,0);
//   ellipse(20,tempy + 200 ,40,20);
// //  s1.calWave();
// //  s1.renderWave(); 
// }

// // function calcWave() {
// //   // Increment theta (try different values for
// //   // 'angular velocity' here)
// //   theta += 0.02;

// //   // For every x value, calculate a y value with sine function
// //   let x = theta;
// //   for (let i = 0; i < yvalues.length; i++) {
// //     yvalues[i] = sin(x) * amplitude;
// //     x += dx;
// //   }
// // }

// // function renderWave() {
// //   noStroke();
// //   fill(255);
// //   // A simple way to draw the wave with an ellipse at each location
// //   for (let x = 0; x < yvalues.length; x++) {
// //     ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
// //   }
// // }





// class ntSine{

// xspacing; // Distance between each horizontal location
// w; // Width of entire wave
// theta; // Start angle at 0
// amplitude; // Height of wave
// period; // How many pixels before the wave repeats
// dx; // Value for incrementing x
// yvalues; // Using an array to store height values for the wave

// constructor(lxs,lw,lt,la,lp,llen,lk) {

//   this. xspacing = lxs; 
//   this. w =  lw;
//   this. theta = lt; 
//   this. amplitude = la; 
//   this. period = lp; 
//   this. dx = (TWO_PI / this.period) * this. xspacing;
//   this. yvalues = new Array(llen); 
//   this. k = lk;




  
// }

// //display

// calcWave() {
//   // Increment theta (try different values for
//   // 'angular velocity' here)
//   this. theta += 0.02;

//   // For every x value, calculate a y value with sine function
//   let x = this. theta;
//   for (let i = 0; i < this. yvalues.length; i++) {
//     this. yvalues[i] = sin(x) * this. amplitude;
//     x += this. dx;
//   }
// }
// renderWave(lx,ly,rot,sc) {
//   noStroke();
//   fill(this.k);
  
//   push();
//   translate(lx,ly);
//   rotate(radians(rot));
//   scale(sc);

  
//   // A simple way to draw the wave with an ellipse at each location
//   for (let x = 0; x < this. yvalues.length; x++) {
//     ellipse(x * this. xspacing, height / 2 + this. yvalues[x], 16, 16);
//   }
// }

// getsineball(wb){
//   //wb = 0
// return this.yvalues[wb];
// }


// //action




// }



// sine to class conversion example
// xspacing = 50; // Distance between each horizontal location
// w; // Width of entire wave
// theta = 0.0; // Start angle at 0
// amplitude = 100.0; // Height of wave
// period = 500.0; // How many  before the wave repeats
// dx; // Value for incrementing x
// yvalues; // Using an array to store the balls

let s1,s2;


function setup() {

  createCanvas(710, 400);

            //xspacing,width,theta,amp, period, array length
  s1 = new sdSine(6,200,0.0,100,200,80, color(200,100,0));
  s2 = new sdSine(6,200,0.5,100,200,80,color(100,200,0));
 
}

function draw() {
  background(0);

   s1.calcWave();
   s1.renderWave(100,100,5,.75);

  s2.calcWave();
  s2.renderWave(150,110,5,.75);


  let tempy = s1.getsineball(3);
   fill(200,0,0);
   ellipse(0,tempy+200, 40,20);



}


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