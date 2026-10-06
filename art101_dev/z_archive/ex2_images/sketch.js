let b;
let b2

function setup() { 
  createCanvas(300, 300);
  // simple net test
//b = loadImage("https://images.contentstack.io/v3/assets/bltbb619fd5c667ba2d/blt2094c59e43e6f946/60ce79bbe1b3f7481347ddb0/Pizza.jpg");
// // Images must be in a "assets" directory to load correctly
b = loadImage("assets/pizza.png"); 
b2 = loadImage("assets/pineapple.png");
} 

function draw() { 
  background(0);
    //img,x,y,w,h
  image(b, 0, 0, 75,75);

  image(b, 100, 100, 100,100);
// when you have the images placed/loaded correctly, uncomment the line below, to show the pineapple
  image(b2, 200, 200, 100,100);
} 
