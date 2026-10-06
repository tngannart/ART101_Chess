// let xcounter = 0;
// let ycounter = 0;
// function setup(){
// createCanvas(1000, 500);
// background(0);
// fill(0,255,0);
//  textSize(15);
//  //frameRate(30);
// //  for (let i = 0; i < 20; i++) {
// //     console.log( sin(i) );
// //     text(i + "  __  " + sin(9000)  , 50,20*i +50, 300, 20); 
// //  }

// }


// function draw() {
//    background(0,0,0,25); //25 is opacity
//      // sinewave is inc *scale + offset
//   let lox = xcounter;
//   let  loy = sin(ycounter)*100 + 250;

//    push();
//    translate(lox,loy);
//    ellipse (0,0,15,15);
//    pop();
 
//  // console.log(counter + " " + loy);
//   xcounter+=5;
//   ycounter+=.10;

//   if ( xcounter > width) {
//     xcounter = 0;
//   }
// }

let u1, u2, u3;
function setup() {
    background(0);
    createCanvas(500, 500);
      //  constructor(k,llx,lly, lcoms )
    u1 = new Ufo( color(180), 200,200, "take me to your leader"     );  
    u2 = new Ufo( color(100), 100,300, "how do you taste?"     );  
    u3 = new Ufo( color(200), 50, 400, "where is the bathroom");  // making an instance of Ufo from the class
}

function draw() {
   // console.log("hi");
    background(0);
    u1.display();   // dot notation
    u1.update();
    u2.display();   
    u2.update();
    u3.display(); 
    u3.update();
}

function keyPressed() {
    if ( key == ' ') {
        u1.aggitate(); 
        u2.aggitate(); 
        u3.aggitate();      
    }

}
class Ufo  {
   // class variables
    lx;
    ly;
    spx;
    spy;
    col;
    coms;
    txt;
    // a class setup
    constructor(k,llx,lly, lcoms ) {
        this.col = k;
        this.lx = llx;
        this.ly = lly;
        this.spx = random(-1,1);
        this.spy = random(-1,1);
        this.coms = lcoms;
        this.txt = "blork..blork..";
        console.log("im a ufo " + int(random(100)) + ", born and ready to roll. humans..");
    }

    display() {
        push();
        translate(this.lx,this.ly);
        fill(this.col);
        ellipse(0,0,40,20);
        fill(255,0,0);
        ellipse(0,-10,5,5);
        fill(200);
        text(this.txt, 0,-30, 300);
        pop();
    }

    update() {
        this.lx += this.spx;
        this.ly += this.spy;
        if ( this.lx < 0   || this.lx > width )  {
          this.spx = -this.spx;

        }
        if ( this.ly < 0   || this.ly > height )  {

            this.spy = -this.spy;
        }
    }
    aggitate() {
        this.col = color( random(200,255), 0,0);
        this.spx = random(-6,6);
        this.spy = random(-6,6);
        this.lx = random(50,width-50);
        this.ly = random(50,height-50);
        this.txt = this.coms;
    }
}





//PROJECT 2

function setup(){
    createCanvas(720,400);
  }
  
  // the parameter at which x and y depends is usually taken as either t or symbol of theta
  let t = 10;
  function draw(){
    background('#fff',20,4);
    translate(width/2,height/2);
    //stroke('#0f0f0f');
    //strokeWeight(1.5);
    ellipse(0,0,20,20)
    //loop for adding 100 lines
    for(let i = 0;i<100;i++){
      ellipse(x1(t+i),y1(t+i),x2(t+i)+20,y2(t+i)+50);
    }
    t+=0.5;
  }
  // function to change initial x co-ordinate of the line
  function x1(t){
    return sin(t/10)*125+sin(t/20)*125+sin(t/30)*125;
  }
  
  // function to change initial y co-ordinate of the line
  function y1(t){
    return cos(t/10)*125+cos(t/20)*125+cos(t/30)*125;
  }
  
  // function to change final x co-ordinate of the line
  function x2(t){
    return sin(t/15)*125+sin(t/25)*125+sin(t/35)*125;
  }
  
  // function to change final y co-ordinate of the line
  function y2(t){
    return cos(t/15)*125+cos(t/25)*125+cos(t/35)*125;
  }