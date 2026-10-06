    // 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 
let gridarr1 = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0],
    [0,0,0,2,2,2,3,3,1,3,3,2,2,2,2,2,0,0,0,0],
    [0,0,0,2,2,2,3,3,3,1,3,3,3,3,3,2,0,0,0,0],
    [0,0,2,3,3,2,3,3,3,1,1,2,3,3,2,0,0,0,0,0],
    [0,2,3,3,2,3,3,3,2,3,1,2,3,2,2,0,0,0,0,0],
    [0,0,2,3,2,2,4,2,3,3,2,4,2,3,2,2,2,2,0,0],
    [0,0,0,2,2,4,5,4,4,2,4,5,5,2,3,2,2,2,0,0],
    [0,0,0,2,4,4,5,6,4,5,4,5,6,4,2,3,3,2,0,0],
    [0,0,0,0,4,5,5,4,5,6,4,5,4,4,2,3,3,2,0,0],
    [0,0,0,0,4,5,6,4,5,4,4,4,4,4,2,3,3,2,0,0],
    [0,0,0,0,4,5,5,4,4,5,4,6,5,6,4,2,2,2,0,0],
    [0,0,0,0,4,4,5,6,4,5,5,5,5,5,4,0,0,0,0,0],
    [0,0,0,0,4,4,5,5,4,4,5,5,4,4,4,0,0,0,0,0],
    [0,0,0,0,4,5,6,4,5,4,5,4,5,5,4,0,0,0,0,0],
    [0,0,0,0,4,5,5,4,4,5,5,6,5,4,4,0,0,0,0,0],
    [0,0,0,0,0,4,4,5,4,5,5,5,4,4,0,0,0,0,0,0],
    [0,0,0,0,0,0,4,5,5,4,5,4,4,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];  

// 0: board, 1:pen, 2:eraser , 3:ruler , 4:marker, 5:highlight, 6:bag
let textarr =[
    ["board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board"],
    ["board","board","board","board","eraser","eraser","eraser","board","eraser","eraser","eraser","board","board","board","board","board","board","board","board","board"],
    ["board","board","board","eraser","eraser","eraser","ruler","ruler","pen","ruler","ruler","eraser","eraser","eraser","eraser","eraser","board","board","board","board"],
    ["board","board","board","eraser","eraser","eraser","ruler","ruler","ruler","pen","ruler","ruler","ruler","ruler","ruler","eraser","board","board","board","board"],
    ["board","board","eraser","ruler","ruler","eraser","ruler","ruler","ruler","pen","pen","eraser","ruler","ruler","eraser","ruler","eraser","board","board","board"],
    ["board","eraser","ruler","ruler","eraser","ruler","ruler","ruler","eraser","ruler","pen","eraser","ruler","eraser","eraser","board","board","board","board","board"],
    ["board","board","eraser","ruler","eraser","eraser","marker","eraser","ruler","ruler","eraser","marker","eraser","ruler","eraser","eraser","eraser","eraser","board","board"],
    ["board","board","board","eraser","eraser","marker","light","marker","marker","eraser","marker","light","light","eraser","ruler","eraser","eraser","eraser","board","board"],
    ["board","board","board","eraser","marker","maker","light","bag","marker","light","marker","light","bag","marker","eraser","ruler","ruler","eraser","board","board"],
    ["board","board","board","board","marker","light","light","marker","light","bag","marker","light","marker","marker","eraser","ruler","ruler","eraser","board","board"],
    ["board","board","board","board","marker","light","bag","marker","light","marker","maker","marker","marker","marker","eraser","ruler","ruler","eraser","board","board"],
    ["board","board","board","board","marker","light","light","marker","marker","light","marker","bag","light","bag","marker","eraser","eraser","eraser","board","board"],
    ["board","board","board","board","marker","marker","light","bag","marker","light","light","light","light","light","marker","board","board","board","board","board"],
    ["board","board","board","board","marker","marker","light","light","marker","maker","light","light","marker","marker","marker","board","board","board","board","board"],
    ["board","board","board","board","marker","light","bag","marker","light","marker","light","marker","light","light","marker","board","board","board","board","board"],
    ["board","board","board","board","marker","light","light","marker","marker","light","light","bag","light","marker","marker","board","board","board","board","board"],
    ["board","board","board","board","board","marker","marker","light","marker","light","light","light","marker","maker","board","board","board","board","board","board"],
    ["board","board","board","board","board","board","marker","light","light","marker","light","marker","marker","board","board","board","board","board","board","board"],
    ["board","board","board","board","board","board","board","marker","marker","marker","marker","marker","board","board","board","board","board","board","board","board"],
    ["board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board"]
  
  ];

// let gridarr1 = 
// // 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4
//   [0,0,0,0,0,0,0,0,0,0,6,8,8,8,8,8,8,6,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,6,8,8,8,8,8,8,6,6,6,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,6,6,8,8,8,8,8,6,6,6,1,1,1,0,0,0],  
//   [0,0,0,0,0,0,0,0,6,6,8,8,8,8,8,8,6,1,5,5,5,1,0,0],
//   [0,0,0,0,0,0,0,0,6,6,8,8,8,8,8,6,1,5,5,7,7,1,1,0],
//   [0,0,0,0,0,0,0,0,6,6,8,8,8,8,6,6,1,1,7,7,7,4,1,0],
//   [0,0,5,5,5,0,0,2,2,6,6,8,6,6,6,6,1,1,7,1,1,4,0,0],
//   [0,5,3,3,9,5,0,5,5,5,5,6,6,6,6,2,2,4,4,4,4,0,0,0],
//   [5,5,3,3,9,9,5,3,3,9,5,5,5,2,2,4,4,4,1,1,0,0,0,0],
//   [5,4,3,9,9,5,5,3,9,5,5,3,9,5,4,4,4,5,1,1,1,0,0,0],
//   [5,4,3,9,9,5,5,3,9,5,5,9,9,4,4,4,4,5,5,5,1,1,0,0],
//   [4,4,3,9,9,5,4,3,9,5,5,9,9,1,5,4,5,7,7,5,5,1,0,0],
//   [4,4,3,3,9,5,4,3,9,5,5,9,9,4,5,5,5,7,7,5,5,1,0,0],
//   [4,4,3,3,3,4,4,3,3,4,4,3,9,4,4,4,5,5,5,4,5,1,0,0],
//   [2,4,4,3,3,4,4,3,3,4,4,3,3,9,4,4,4,5,5,4,4,4,0,0],
//   [0,2,4,4,4,2,2,4,4,2,4,3,3,3,4,4,1,1,1,4,4,0,0,0],
//   [0,0,2,2,2,2,2,2,2,2,2,4,4,4,2,2,1,1,4,4,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,0,0,0,0]
  
// ];

let font1;
let images =[];
function preload()  {

  font1 = loadFont('assets1/sigokae.ttf');
  images[0] = loadImage('assets1/0.png');
  images[1] = loadImage('assets1/1.png');
  images[2] = loadImage('assets1/2.png');
  images[3] = loadImage('assets1/3.png');
  images[4] = loadImage('assets1/4.png');
  images[5] = loadImage('assets1/5.png');
  images[6] = loadImage('assets1/6.png');
  
}



function setup() {
  createCanvas(1600, 1525);
  background(120);
  textFont(font1);

  mapToMonoPixels(gridarr1, 15, 15, 0,1)
  mapToColorText(textarr, 530, 30, -102, 1.2);
  mapToBitMaps(gridarr1,images, 15, 525, 0, 2.3);


  console.log(gridarr1[0][20]);

  // mapToMonoPixels(gridarr1,100,50,50,0.4, 250);
  // mapToColorShapes(gridarr1,700,500,150,1,100);


}

function mapToMonoPixels(arr,lx,ly,rot,sc) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
           let value = arr[i][j];
            
           if ( value == 0 ) {
                fill(96, 130, 182);
            } else if ( value == 1 ){
                fill(60, 40, 30);
            } else if ( value == 2 ) {
                fill(0,128,0);
              } else if ( value == 3 ) {
                fill(50,205,50 );
              } else if ( value == 4 ) {
                fill(128,0,128);  
              } else if ( value == 5 ) {
                fill(159,43,104);
              } else {
               fill(218,112,214); 
      
            }
          rect(j * 25, i * 25, 20, 20);
      }
  }


 pop();

}
// 0: board, 1:pen, 2:eraser , 3:ruler , 4:marker, 5:highlight, 6:bag

function mapToColorText(arr,lx,ly,rot,sc) {
  textSize(15);
  textAlign(CENTER);
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
           let value = arr[i][j];
            if ( value == "board" ) {
                fill(241,67,54);
            } else if ( value == "pen" ){
                fill(255, 195,0);
            } else if ( value == "eraser" ){
                fill(243,156,18); 
            } else if ( value == "ruler" ){
                fill(247,220,111);
            } else if ( value == "marker" ){
                fill(52, 152, 219);
            } else if ( value == "light" ){
                fill(69,179,157);
            } else {
                fill(125,60,152);
            }
             text(value, j * 50, i * 15,100);
      }
  }
  pop();

}

function mapToBitMaps(arr,imgarr,lx,ly,rot,sc) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  let nuimg;
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
           let value = arr[i][j];
            if ( value == 0 ) {
              nuimg = imgarr[0];
            } else if ( value == 1 ){
              nuimg = imgarr[1];
            } else if ( value == 2 ) {
              nuimg = imgarr[2];
            } else if ( value == 3 ) {
              nuimg = imgarr[3];
            } else if ( value == 4 ) {
              nuimg = imgarr[4];
            } else if ( value == 5 ) {
              nuimg = imgarr[5];
            } else {
              nuimg = imgarr[6];
            }
          image(nuimg, j * 14, i * 14, 15, 15);
      }
  }
  pop();

}



