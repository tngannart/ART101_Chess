

let value = 0;
        let bc;
        function setup() {
          createCanvas(400, 400);
          rectMode(CENTER);
          bc = color('#008800'); //color(number,number,number,number);
        }
        function draw() {
         background(bc);
          fill(value);
          rect(200, 200, 50, 50);
        } 

        function mouseMoved() {
          console.log(value );
          
          value = value + 5;
          
          
          
          //start as false
          if (value > 255) {
            value = 0;
          }
        }