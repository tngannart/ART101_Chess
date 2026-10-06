class RabbitScene {
  constructor() {
    this.sceneManager = null;
    this.hovered = false;
    this.clicked = false;
  // nt3.stop();
  // nt3.loop();

//end when finish the sound
  nt2.onended(() => {
    if (this.clicked) {
      this.clicked = false;
      this.sceneManager.showScene(Crab);
    }
  });
}

  setup() {
    console.log("Setup RabbitScene");
  }

  enter() {
    carrot.visible = true;
    carrot.changeAnimation("idle");
    this.hovered = false;
    this.clicked = false;
if (!nt3.isPlaying()) {
      nt3.loop();
    }
    nt2.onended(() => {
      if (this.clicked) {
        this.sceneManager.showScene(Crab);
        this.clicked = false;
      }
    });
  }

  draw() {
    background(240, 220, 200);
    imageMode(CENTER);
    image(imgrab, width / 2, height / 2, 170, 170);
    fill(128,128,128);
    rect(215,270,170,170);
    fill(54, 69, 79);
    rect(150,270,300,35);
    // carrot position
    carrot.position.x = mouseX;
    carrot.position.y = mouseY;

    // hover
    if (carrot.mouse && carrot.mouse.hovering()) {
      if (!this.hovered && !this.clicked) {
        carrot.changeAnimation("clicked");
        this.hovered = true;
      }
    } else {
      if (this.hovered && !this.clicked) {
        carrot.changeAnimation("idle");
        this.hovered = false;
      }
    }

    // guide
    fill(255, 95, 31);
    textSize(50);
    textAlign(CENTER);
    textFont(font1);
    text("Click carrot to feed me!", width / 2, height -300);
  }

  // keyPressed() {
  //   if (key === 'b' || key === 'B') {
  //     this.sceneManager.showScene(Crab);
  //   }
  // }

  mousePressed() {
    if (carrot.visible && !this.clicked) {
      this.clicked = true;
      carrot.changeAnimation("clicked");

      if (!nt2.isPlaying()) {
        nt2.play();
            nt3.stop();


      }
    }
  }

exit() {
    nt3.stop();
  }
}