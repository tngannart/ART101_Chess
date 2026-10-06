
  // 8 x 3        r,g,b
let twoDarr = [  [7,0,2],
                 [9,5,2],
                 [5,1,1],
                 [9,9,9],
                 [5,5,1],
                 [0,5,2],
                 [1,7,3],
                 [2,1,8]];

function setup() {
    background(0);
    createCanvas(500, 500);

    console.log(twoDarr[0][0]);
    // twoDarr[0][0] = 3;
    //console.log(twoDarr[0][0] );

   for (let i = 0; i < twoDarr.length; i++) {
    //fill(twoDarr[i][0] * 25 ); //0-255
    fill( twoDarr[i][0] * 25,twoDarr[i][1] * 25,twoDarr[i][2] * 25 );
     
     
     rect(i*22,0,20,20); 
   }
   
}