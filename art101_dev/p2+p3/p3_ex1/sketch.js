



// let oned= [Bee,Bee,Bee,Bee,Bee,Bee,Bee,Bee];

// let bees = new Array (10);

// for (let i = 0; i < array.length; i++){

// bee[i] = new Bee (random(100), random (100));

// }

// for (let i = 0; i < array.length; i++){

//   bee [i].update();
//   bee [i]. display();

// }

  //arr = [[item,item,item],[item,item,item],[item,item,item]]; __different line but it still in one []-> it still works together

        //8x3
  let oned= [ [99,0,0],
              [0,0,3],
              [0,9,2],
              [100,5,2],
              [0,1,0],
              [0,0,5],
              [9,3,9],
              [128,9,0] ];


function setup(){
  background(0);
  createCanvas(500, 500);
  
  console.log(oned[7][0]   ); // one[follow the line in oned from 0-7]

  for (let i = 0; i < oned.length; i++){
  //   let temp =   oned[i] [1]* 24;
  //  fill(temp); 
   fill(oned[i] [0]*24,oned[i] [1]*24,oned[i] [2]*24);
      rect( i* 18,20,20,20);

  }
}  
  function draw() {
  console.log("hi");
  background(0);
  //rect(width/2,height/2,30,30,5);
  
  }