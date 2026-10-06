let gridarr1 = [
// 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,1,0,0,0,0,2,2,0,0,0,0],
  [0,0,0,0,0,2,2,0,1,1,0,0,0,2,2,2,2,0,0,0],
  [0,0,0,0,2,2,2,2,1,1,0,0,2,2,2,1,1,1,0,0],
  [0,0,0,1,1,1,1,2,2,1,1,2,2,2,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,1,2,1,1,2,2,1,1,1,0,0,0,0],
  [0,0,1,0,0,1,1,1,2,2,1,2,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,3,4,3,4,3,4,3,4,0,0,0,0,0,0,0],
  [0,0,0,0,0,4,3,4,3,4,3,4,3,4,0,0,0,0,0,0],
  [0,0,0,0,0,3,4,3,4,3,4,3,4,3,0,0,0,0,0,0],
  [0,0,0,0,0,4,3,4,3,4,3,4,3,4,0,0,0,0,0,0],
  [0,0,0,0,0,3,4,3,4,3,4,3,4,3,0,0,0,0,0,0],
  [0,0,0,0,0,4,3,4,3,4,3,4,3,4,0,0,0,0,0,0],
  [0,0,0,0,0,3,4,3,4,3,4,3,4,3,0,0,0,0,0,0],
  [0,0,0,0,0,4,3,4,3,4,3,4,3,4,0,0,0,0,0,0],
  [0,0,0,0,0,0,4,3,4,3,4,3,4,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,4,3,4,3,4,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

//1:star, 2:moon, 3: cloud, 4: sun

let textarr =[
  ["field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field"],
  ["field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field"],
  ["field","field","field","field","field","field","field","field","star","star","field","field","field","field","field","field","field","field","field","field"],
  ["field","field","field","field","field","field","field","field","star","star","field","field","field","field","moon","moon","field","field","field","field"],
  ["field","field","field","field","field","moon","moon","field","star","star","field","field","field","moon","moon","moon","moon","field","field","field"],
  ["field","field","field","field","moon","moon","moon","moon","star","star","field","field","moon","moon","moon","star","star","star","field","field"],
  ["field","field","field","star","star","star","star","moon","moon","star","star","moon","moon","moon","star","star","star","field","field","field"],
  ["field","field","star","star","star","star","star","star","moon","star","star","moon","moon","star","star","star","field","field","field","field"],
  ["field","field","star","field","field","star","star","star","moon","moon","star","moon","star","field","field","field","field","field","field","field"],
  ["field","field","field","field","cloud","sun","cloud","sun","cloud","sun","cloud","sun","field","field","field","field","field","field","field","field"],
  ["field","field","field","field","sun","cloud","sun","cloud","sun","cloud","sun","cloud","sun","field","field","field","field","field","field","field"],
  ["field","field","field","field","cloud","sun","cloud","sun","cloud","sun","cloud","sun","cloud","field","field","field","field","field","field","field"],
  ["field","field","field","field","sun","cloud","sun","cloud","sun","cloud","sun","cloud","sun","field","field","field","field","field","field","field"],
  ["field","field","field","field","cloud","sun","cloud","sun","cloud","sun","cloud","sun","cloud","field","field","field","field","field","field","field"],
  ["field","field","field","field","sun","cloud","sun","cloud","sun","cloud","sun","cloud","sun","field","field","field","field","field","field","field"],
  ["field","field","field","field","cloud","sun","cloud","sun","cloud","sun","cloud","sun","cloud","field","field","field","field","field","field","field"],
  ["field","field","field","field","sun","cloud","sun","cloud","sun","cloud","sun","cloud","sun","field","field","field","field","field","field","field"],
  ["field","field","field","field","field","field","sun","cloud","sun","cloud","sun","field","field","field","field","field","field","field","field","field"],
  ["field","field","field","field","field","field","field","sun","cloud","sun","cloud","sun","field","field","field","field","field","field","field","field"],
  ["field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field"]

];


let font1;
let images =[];
function preload()  {

  font1 = loadFont('assets/nausea.otf');
  images[0] = loadImage('assets/0.png');
  images[1] = loadImage('assets/1.png');
  images[2] = loadImage('assets/2.png');
  images[3] = loadImage('assets/3.png');
  images[4] = loadImage('assets/4.png');

}

function setup() {
  createCanvas(1550, 1100);
  background(120);
  textFont(font1);

  mapToMonoPixels(gridarr1, 15, 15, 0,1);
  mapToColorText(textarr, 530, 30, 0, 1.2);
  mapToColorText(textarr, 300, 130, 40, 5,100);
  mapToBitMaps(gridarr1,images, 15, 525, 0, 2.3);
  mapToCircles(gridarr1, 700, 425, 0, 1.5);
  

  console.log(gridarr1[0][20]);
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
                fill(0, 150, 255);
            } else if ( value == 1 ){
                fill(50,205,50);
            } else if ( value == 2 ) {
                fill(34,139,34);
            } else if ( value == 3 ) {
                fill(255,195,0);

            } else {
               fill(255,234,0); 
      
            }
          rect(j * 25, i * 25, 20, 20);
      }
  }


 pop();

}
//1:star, 2:moon, 3: cloud, 4: sun

function mapToColorText(arr,lx,ly,rot,sc,fade) {
  textSize(15);
  textAlign(CENTER);
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
           let value = arr[i][j];
            if ( value == "field" ) {
                fill(218, 247, 166,fade);
            } else if ( value == "star" ){
                fill(255, 195,0,fade);
            } else if ( value == "moon" ){
                fill(255, 87, 51,fade); 
            } else if ( value == "cloud" ){
                fill(137, 207, 240);

            } else {
                fill(207, 159, 255,fade);
            }
             text(value, j * 40, i * 15,100);
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
            } else {
              nuimg = imgarr[4];
            }
          image(nuimg, j * 12, i * 12, 14, 14);
      }
  }
  pop();

}

function mapToCircles(arr, lx, ly, rot, sc) {
  push();
  translate(lx, ly);
  rotate(radians(rot));
  scale(sc);
  noStroke();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      let value = arr[i][j];
      if (value == 1) fill(255, 255, 0);
      else if (value == 2) fill(100, 255, 100);
      else if (value == 3) fill(150, 150, 255);
      else if (value == 4) fill(255, 100, 100);
      else fill(50);
      ellipse(j * 20, i * 20, 15);
    }
  }
  pop();
}

//1_crown,2_black, 3_bone, 9_heart,  
  // [0,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,2,2,0],
  // [2,3,2,2,0,1,0,1,0,1,0,1,0,1,0,2,2,3,2,0],
  // [2,3,3,3,2,2,1,1,1,1,1,1,1,2,2,3,3,3,2,0],
  // [2,3,7,8,3,1,1,1,1,1,1,1,1,1,3,8,7,3,2,0],
  // [2,3,8,7,7,3,1,1,1,1,1,1,1,3,7,7,8,3,2,0],
  // [2,3,8,7,7,7,1,1,1,1,1,1,1,7,7,7,8,3,2,0],
  // [2,3,8,8,7,7,2,3,2,2,2,3,2,7,7,8,8,3,2,0],
  // [0,2,3,3,8,2,2,3,3,2,3,3,2,2,8,3,3,2,0,0],
  // [0,0,2,2,3,2,8,8,3,2,3,8,8,2,3,2,2,0,0,0],
  // [0,0,2,2,2,3,8,4,8,2,8,4,8,3,2,2,2,0,0,0],
  // [0,0,0,2,2,8,6,4,8,2,8,4,6,8,2,2,0,0,0,0],
  // [0,2,2,2,3,3,3,8,3,2,3,8,3,3,3,2,2,2,0,0],
  // [0,0,2,2,3,3,3,3,2,2,2,3,3,3,3,2,2,0,0,0],
  // [2,2,2,2,3,3,3,3,2,2,2,3,3,3,3,2,2,2,2,0],
  // [0,0,2,2,3,3,3,2,8,2,8,2,3,3,3,2,2,0,0,0],
  // [0,2,2,2,3,3,3,3,2,9,2,3,3,3,3,2,2,2,0,0],
  // [0,0,2,2,2,3,2,3,3,9,3,3,2,3,2,2,2,0,0,0],
  // [0,0,0,2,2,3,3,2,3,3,3,2,3,3,2,2,0,9,0,9],
  // [0,0,0,0,2,3,8,8,2,2,2,8,8,3,2,0,0,9,9,9],
  // [0,0,2,2,2,2,3,8,8,8,8,8,3,2,2,2,2,0,9,0]