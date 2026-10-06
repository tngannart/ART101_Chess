// example 2.3.4 --  Nested Transform tools and Nested (parent/child) functions intro 
let counter = 0;

function setup() {
    createCanvas(500,800);
    background(0);
   }
  
   function draw() {
    background(0);
   // wraphead();
   nesthead(300,counter,-5,1.2); // chang in group, not just one thing
   
counter+=5;
}
  
   function wraphead() {
       // no real anchor for each other 
       // just relative positioning
       face(50,120,0,1); //1 = scale
       hat(50,80,5,1);
   }
  
   function nesthead(lx,ly,rot,sc) {
       push();
       noStroke();
       translate(lx,ly);
       rotate(radians(rot));
       scale(sc);
       //  face is now anchor
       face(0,0,0,1); //0,0: location, rotation 0, 1 = scale
       // hat moves relative
       hat(0,-35,10,1);
       tie (0,200,0,1);

       pop();
   }
  
   function hat(lx,ly,rot,sc) {
  
       push();
       noStroke();
       translate(lx,ly);
       rotate(radians(rot));
       scale(sc);
       fill(70);
       // anchor of hat
       rect(0,0,100,40); // 0,0
       // relative move
       rect(25,-80,50,90);
       pop();
  
   }
  
   function face(lx,ly,rot,sc) {
  
       push();
       noStroke();
       translate(lx,ly);
       rotate(radians(rot));
       scale(sc);
  
       fill(240,110,0);
      // rect(0,0,100,200,28);  // changed location to 0,0
       quad(-10, 0, 110, 0, 100, 200, 0, 200);
  
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
       triangle(50,70, 35,110, 65,110);
       pop();
   }

   function tie(lx,ly,rot,sc) {
  
    push();
    noStroke();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    fill(90,0,0);
    // anchor of hat
    rect(0,0,40,140); // 0,0
    // relative move
    fil(0,0,255);
    rect(15,90,90,20,5);
    
    pop();

}