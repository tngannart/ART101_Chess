
function setup(){
  createCanvas(720,400);
  background (255);
}

// the parameter at which x and y depends is usually taken as either t or symbol of theta
let t = 0;
function draw(){
  background(255,255,255,10);
  translate(width/2,height/2);
  stroke(color(random(255),random(255),random(255)));
  strokeWeight(1.5);
      rect(0,0,0,0);

  //loop for adding 100 lines
  for(let i = 0;i<50;i++){

    rect(x1(t+i),y1(t+i),x2(t+i)+20,y2(t+i)+20);
  
    rect(x1(t-i),y1(t-i),x2(t+i)-20,y2(t+i)-20);

  }
  t+=0.2;
}
// function to change initial x co-ordinate of the line
function x1(t){
  return tan(t/10)*125+sin(t/20)*125+cos(t/30)*125;
}

// function to change initial y co-ordinate of the line
function y1(t){
  return cos(t/10)*125+cos(t/20)*125+cos(t/30)*125;
}

// function to change final x co-ordinate of the line
function x2(t){
  return sin(t/15)*125+tan(t/50)*100+sin(t/35)*125;
}

// function to change final y co-ordinate of the line
function y2(t){
  return cos(t/15)*125+cos(t/25)*125+cos(t/35)*125;
}



//I change from the line to the rectangle and its opacity
//  I add one more rectangle to make it work together
//I used the random color to make it would be changed when it moving

//for the second one, it move like a water drop from the top
//I change it to make it reverse, work like evaporation moving from
//the bottom to the to and add loop for it
//also I change the color to make it look like a water. 
