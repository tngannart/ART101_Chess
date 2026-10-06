


// let temp = 100;

// function setup(){
 
//  //local variable
//   //let temp = random (200,255);

// //12345 657 -234 interger
//  // 12,345 24,345 float
//  // "text" in quote
//  //true false  boolean
//  //"that" "cat" "jumped" "on" "a" "dog" / "that cat jumped on a dog"
 
//  //let temp = "hello World";
//  //concatanation      (smoosh  together into text)  
//  let temp = 99 + " beers"; //_ 99 beers in comsole

//  console.log(temp); // in console temp/() is string
      
      
//   createCanvas(500,500);
//   background (20);
//   fill (temp); //fill(value,200,50,50);
//   //rect(value,value,0,100);
//   frameRate(1);
      
//         } //temp is dead rip
      
// function draw () {
//       //let temp = random (100);

//  console.log(temp);
//  ellipse(temp/2,height/2,50,50);
      
// } //temp is dead


let value = 0;
        let bc;
        function setup() {
          createCanvas(400, 400);
          rectMode(CENTER);
          bc = color('#008800');
        }
        function draw() {
         background(bc);
          fill(value);
          rect(200, 200, 50, 50);
        } 

        function mouseMoved() {
          console.log(value );
          value = value + 5;
          if (value > 255) {
            value = 0;
          }
        }

