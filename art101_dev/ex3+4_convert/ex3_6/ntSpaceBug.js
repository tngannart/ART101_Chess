

class ntSpaceBug {
    // class variable are the globals of a class
k;
lx;
ly;
rot;
sc;
showtongue;
sx;
sy;


constructor (lk,llx,lly,lrot,lsc,lst,lsx,lsy) {
    this.k = lk;
    this.lx = llx;
    this.ly = lly;
    this.rot = lrot;
    this.sc = lsc;
    this.showtongue = lst;
    this.sx = random(-1,1);
    this.sy = random(-1,1);


}   //end

            //spaceBug(color,x,y rotate,scale)
            //display(k,lx,ly,rot,sc){

 displayBug(k,lx,ly,rot,sc) {
   
    //console.log("toon1");
    // this bug has 4 legs and a tongue
   push();
      translate( this.lx, this.ly);
      //rotate(random(10,20));
      rotate( this.rot);
      scale( this.sc);
      body( this.k);
      head( this.k,20,-15);
      arm( this.k,-55,15); // left arm
      arm( this.k,35,15); // right arm
      arm( this.k,-55,45); // bot left arm
      arm( this.k,35,45); // bot tight arm
    
            // 1 or 0
      if (showtongue==1){
      tongue(color(200,100,0),18,-12, -20 ); // sticks out its tongue
      }
    pop();
 }

updateBug(){
    this.lx+=this.sx;
    this.ly+-this.sy;

        //left
    if (this.lx<0){
        this.lx = width;

    }
        //top
    if (this.ly<0){
        this.ly = height;
    }
    //bottom
    if (this.ly>height){
        this.ly = 0;
    }
    //bottom
    if (this.lx > width){
    this.lx = 0;
    }
}

 body(k){
    //console.log("body");
     fill(k);
     //rotate(45);
     rect(0,0,40,80, 15,15,25,25);
   }
   
head(c,lx,ly){
   //console.log("head");
   push();
   fill(c);
   translate(lx,ly)
   //head
   ellipse(0,0,40,40);
   //eyes
   fill(0,100,255);
   ellipse(-5,-10,10,10,);
   ellipse(5,-10,10,10,);
   
   pop();
   }
   
arm(c,lx,ly,rot){
   //console.log("arms");
   fill(c);
   push();
   translate(lx,ly);
   rotate(rot);
   rect(0,0,60,15,10);
   pop();
 
   }
 
tongue(c,lx, ly, rot ) {
     fill(c);
     push();
     translate(lx,ly);
     rotate(rot);
     rect(0,0,60,7,10);
     pop();
   }


setTongue (t) {
    this.showtongue = t;
}
    jumpBug(){
        this.lx = random(0,width);
        this.ly = random(0,height);
        this.rot = random(0,360);
        this.sx+=random(-1,1);
        this.sy+=random(-1,1);
        this.k = color(random(255),random(255),random(255));
    }



} // end of class