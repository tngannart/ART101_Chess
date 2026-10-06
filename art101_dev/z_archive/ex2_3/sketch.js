// let value = 0; 
//         let purpOn = false;

//          function setup() { 
//            createCanvas(500, 500);
//            console.log("click on B, P and X key" );
//          } 

//          function draw() { 
//            background(255-value); 
//            fill(value); 
//            ellipse(width/2, height/2, 100, 100);       

//            if (mouseIsPressed && purpOn) {  // tests true or false
//              console.log("show that purple");
//              fill(255,0,255);
//              let r = random(100,width-10);
//              ellipse(width/2, height/2, r, r);
//            }

//          } 


//          function keyPressed() { 
//                 console.log ( key);
// // == means equals
//            if ( key == 'b' || key == 'B' ) { 
//                 //example if toggle logic
                
//          // example of toggle logic 
//         //      if (value == 0) { 
//                 value = 100;
//         //      } else { 
//         //        value = 0;
//         //      }
//            }

//            if (  (key == 'p' || key == 'P') ) {
//             purpOn = true;    
//             console.log("value is " + value + " purpOn is On" );
//            }

//            if (  (key == 'x' || key == 'X' || key == " ") ) {
//              purpOn = false;    
//              console.log("value is " + value + " purpOn is Off" );
//             }

//          }

// let food = 0;

// function setup() { 
//   createCanvas(500, 500);
//   console.log("click on b, n and X key" );
// } 


// function draw() { 
//   background(255-value); 
//   fill(value); 
//   ellipse(width/2, height/2, 100, 100);       

//   fill(food,200,food);
//   rect (20,20,40,40);
  
//   if (mouseIsPressed && purpOn) {  // tests true or false
//     console.log("show that purple");
//     fill(255,0,255);
//     let r = random(100,width-10);
//     ellipse(width/2, height/2, r, r);
//   }

// } 

// function keyPressed() { 

//   if ( key == 'b' || key == 'B' ) { 
//     // example of toggle logic 
//     if (value == 0) { 
//       value = 255;
//     } else { 
//       value = 0;
//     }
//   }

//     if ( key == 'n' || key == 'N' ) { 
//       // example of toggle logic 
//       if (value == 0) { 
//         value = 255;
//       } else { 
//         value = 0;
//       }
//     }


let value = 0; 
 let purpOn = false;

         function setup() { 
           createCanvas(500, 500);
           console.log("click on B, P and X key" );
         } 

         function draw() { 
           background(255-value); 
           fill(value); 
           ellipse(width/2, height/2, 100, 100);       

           if (mouseIsPressed && purpOn) {  // tests true or false
             console.log("show that purple");
             fill(255,0,255);
             let r = random(100,width-10);
             ellipse(width/2, height/2, r, r);
           }

         } 


         function keyPressed() { 

           if ( key == 'b' || key == 'B' ) { 
             // example of toggle logic 
             if (value == 0) { 
               value = 255;
             } else { 
               value = 0;
             }
           }

           if (  (key == 'p' || key == 'P') ) {
            purpOn = true;    
            console.log("value is " + value + " purpOn is On" );
           }

           if (  (key == 'x' || key == 'X' || key == " ") ) {
             purpOn = false;    
             console.log("value is " + value + " purpOn is Off" );
            }

         }