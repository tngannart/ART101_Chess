

function setup() {
  createCanvas (500,500);
  background(20);
  fill(255,0,0);
}
function draw() {
ellipse(width/2,height/2,50,50);
face();
    //lox,loy, nose color _ can make more object with different position
secondface(0,100,0);

secondface(50,20,200);

}

    //wrapper function
function face(){

  let lxo = -100;
  let lyo = 40;

// ----------------------- face start
fill("orange");
// anchor graphic
rect(275 + lxo,100 + lyo,100,200,20);
fill(255);
ellipse(300 + lxo,150 + lyo,20,20);
ellipse(350 + lxo,150 + lyo,20,20);
ellipse(325 + lxo,220 + lyo,50,20);
 // x1,y1,x2,y2,x3,y3
 fill(200);
triangle(325 + lxo,160 + lyo, 310 + lxo,200 + lyo, 340 + lxo,200 + lyo);
// ------------------------face end
}

      //wrapper with arguments
function secondface(lxo,lyo,nc){

  // let lxo = 10;
  // let lyo = 140;

// ----------------------- face start
fill("orange");
// anchor graphic
rect(275 + lxo,100 + lyo,100,200,20);
fill(255);
ellipse(300 + lxo,150 + lyo,20,20);
ellipse(350 + lxo,150 + lyo,20,20);
ellipse(325 + lxo,220 + lyo,50,20);
 // x1,y1,x2,y2,x3,y3
 fill(nc);
triangle(325 + lxo,160 + lyo, 310 + lxo,200 + lyo, 340 + lxo,200 + lyo);
// ------------------------face end
}