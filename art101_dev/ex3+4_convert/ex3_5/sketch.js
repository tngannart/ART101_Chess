function setup() {
    createCanvas(600,600);
    background(40);
    rectMode(CENTER);
    noStroke();
    fill(200);
  }
  
  function draw() {
    pair();
  }
  
  function pair() {
    purpchar1();
    orangchar2();
  }
  
  function purpchar1() {
    let k = color(170,0,200);
    body(k,70,0);
    let k2 = color(200);
    head(k2,370,200,1,10);
    arm(k,110,10);
    // removed due to accident
    //arm(30,10,k);
    leg(k,45,0);
    leg(k,95,0);
  }
  
  function orangchar2() {
    let k = color(255,90,0);
    body(k,-70,0);
    head(k,230,200,0,0);
    arm(k, -110,10);
    arm(k, -30,10);
    leg(k,-90,0);
    leg(k,-50,0);
  }
  
  function body( c, xpos, ypos) {
     fill(c);
     rect(width/2+xpos,height/2+ypos,60,125,5);
  }
  
  function head(c, xpos, ypos, hat,rot ) {
    fill(c);
   push();
   translate(xpos,ypos);
   rotate(radians(rot));
   if (hat == 1) {
    rect(0, -40 ,80,10,7);
    rect(0, -80 ,40,70,7);
    }
   ellipse(0,0,60,80);
   pop();
  
  }
  
  function leg(c, xpos, ypos) {
    fill(c);
    rect(width/2+xpos,height/2+140 + ypos,27,150,5);
  }
  
  
  function arm(c, xpos, ypos ) {
    fill(c);
    rect(width/2+xpos,height/2-30 + ypos,15,80,5);
  }