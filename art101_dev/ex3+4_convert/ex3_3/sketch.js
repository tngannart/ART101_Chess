//example 2.3.3 this introduce the transformation  function set


let counter = 0;
let counter2 = .10;

function setup() {
    createCanvas(500,500);
    background(0);
   }

   function draw() {
    background(0);
    //oldface(-100,0); // width/2, height/2
    //newface1(-100,0);
    newface2(width/2,height/2, counter, counter2);

    counter += 5.8;
    counter2 += .00;
   }

   function oldface(lxo,lyo) {
    // ----------------------- face start 
       noStroke();
       // the head is the anchor graphic
       fill(230,130,0);
       rect(275 + lxo,100 + lyo,100,200,28);
       fill(255);
       // eyes
       fill(90,120,220);
       ellipse(300 + lxo,150 + lyo,20,20);
       ellipse(350 + lxo,150 + lyo,20,20);
       fill(70,0,0);
       // mouth
       ellipse(325 + lxo,260 + lyo,45,30);
       // x1,y1,x2,y2,x3,y3
       fill(180,90,0);
       triangle(325 + lxo,170 + lyo, 310 + lxo,210 + lyo, 340 + lxo,210 + lyo );
     // ------------------------face end
   }

   function newface1(lxo,lyo) {

       push();
       translate(lxo,lyo);
        // the head is still the anchor graphic
       fill(230,130,0);
       rect(275,100,100,200,28);
       fill(255);
       // eyes
       fill(90,120,220);
       ellipse(300,150,20,20);
       ellipse(350,150,20,20);
       fill(70,0,0);
       // mouth
       ellipse(325,260,60,37);
       // x1,y1,x2,y2,x3,y3
       fill(180,90,0);
       triangle(325,170, 310,210, 340,210);
       pop();

   }


   function newface2(lxo,lyo,rot,sc) {

       push();
       translate(lxo,lyo);
      rotate(radians(rot));
      scale(sc);

       fill(240,110,0);
        // the head is the anchor graphic
       //  - 275,- 100
       rect(0,0,100,200,28);  // changed location to 0,0
       fill(255);
       // eyes
       fill(20,80,250);
       //  - 275,- 100
       ellipse(25,50,20,20);
       ellipse(75,50,20,20);
       fill(70,0,0);
       // mouth
       //  - 275,- 100
       ellipse(50,160,70,60);
       // x1,y1,x2,y2,x3,y3
       fill(80,60,0);
       //  - 275,- 100
       triangle(50,70, 35,110, 90,140);
       pop();

   }




// let ofx, ofy;

// function setup() {
//     background (0);
//     createCanvas (500,500);
//     ofx = 50;
//     ofy = 50;

// }

// function draw (){
//     //console.log ("hi");
//     background (0);

// push(); //start transform tools

//     fill (255);
//     //the base the anchor
// translate(200,200);
// rotate(radians(45) );
// scale(2.0); //100%: 1.0

//     //anchor image
//     rect(0, 0, 30, 30, 10);
//     fill(20);
//     translate(0,5);
//     ellipse(5 ,7 ,6,6);
//     ellipse(20 ,7 ,6,6);
//     fill (255,0,0);
//     ellipse(5,20,5,5);

// pop(); //stop them

// fill(255);
// ellipse(width - 50, height - 50, 30,30);

// }