
//let counter = 0;
let xcounter = 0;
let ycounter = 0;
let rotang = 0;
let ocounter = 0;

function setup (){

        createCanvas(1000,500);
        background(0,0,20);
        fill(0,200,0);
        textSize(20);
        //frameRate(30); //15 is more smooth

        // for(let i=0; i < 20; i++){
        // console.log(sin(i) );
        // text(i + "______" + sin(i),50,20*i + 50,300,20);           //normal counting, for loop

        // }


}


function draw(){
        background(0,10,20,4);
          //sinewave is inc * scale + offset
        let lox = xcounter;
        let loy = sin(ycounter)* 100 + 100;
if (frameCount < 500){
        fill(sin(ycounter)*255+128,255,0,60);

} else{
        fill(sin(ycounter)*255+228,0,200,60);

}

        fill(sin(ycounter)*255+128,255,0,60);
        push();
        translate(200,100);
        rotate(radians(rotang));
        translate(lox,loy);
        scale(.5);
        rect(0,0, 20,20);
        

        pop();

        console.log(frameCount); // it could work

        xcounter+=5;
        ycounter+=0.1; //faster
        //ocounter++;   the same with frameCount

        if(xcounter > width){
                xcounter = 100;
                rotang +=20;
        }

}