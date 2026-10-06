let mgr;
let imgcrab, imgtr, imgrab;
let nt1, nt2, nt3, nt4, nt5;
let carrot;
let crab;

function preload() {
  nt1 = loadSound("assets/bell.mp3");
  nt2 = loadSound("assets/chewing.mp3");
  nt3 = loadSound("assets/srabbit.mp3");
  nt4 = loadSound("assets/ocean.mp3");
  nt5 = loadSound("assets/treasure.mp3");

  imgcrab = loadImage("assets/crab.png");
  imgtr = loadImage("assets/treasure.png");
  imgrab = loadImage("assets/rabbit.png");
}

function setup() {
  createCanvas(600, 400);

  carrot = createSprite(0, 0, -100, -110);
  carrot.addAnimation("idle", "assets/carrot.05.png", "assets/carrot.11.png");
  carrot.addAnimation("clicked", "assets/carrot.01.png", "assets/carrot.04.png");
  carrot.visible = false;
  carrot.scale = 0.03;

  mgr = new SceneManager();
  mgr.addScene(Crab);
  mgr.addScene(RabbitScene);
  mgr.addScene(help);
  mgr.showNextScene();
}

function draw() {
  mgr.draw();
  drawSprites();
}

function keyPressed() {
  mgr.handleEvent("keyPressed");
}

function mousePressed() {
  mgr.handleEvent("mousePressed");

  if (carrot.visible) {
    carrot.changeAnimation("clicked");
    if (!nt2.isPlaying()) {
      nt2.play(); 
    }
  }
}

// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

function Crab() {
  this.crab = { x: 50, y: 200, size: 70, speed: 25 };
  this.treasure = { x: 300, y: 150, size: 70 };
  this.btHelp = { x: 450, y: 330, w: 100, h: 40 };  // Vị trí và kích thước của nút Help

  this.setup = function() {
    // Cài đặt ban đầu nếu cần
  }

  this.enter = function() {
    this.randomizeTreasure();
    carrot.visible = false;
    if (!nt4.isPlaying()) {
      nt4.loop();
    }
  }

  this.randomizeTreasure = function() {
    this.treasure.x = random(50, width - this.treasure.size);
    this.treasure.y = random(50, height - this.treasure.size);
  }

  this.draw = function() {
    background(120, 180, 255);
    image(imgtr, this.treasure.x, this.treasure.y, this.treasure.size, this.treasure.size);
    image(imgcrab, this.crab.x, this.crab.y, this.crab.size, this.crab.size);

    // Kiểm tra va chạm với treasure
    let hit = collideRectRect(
      this.crab.x, this.crab.y, this.crab.size, this.crab.size,
      this.treasure.x, this.treasure.y, this.treasure.size, this.treasure.size
    );
    if (hit) {
      if (!nt5.isPlaying()) nt5.play();
      if (nt4.isPlaying()) nt4.stop();
      this.sceneManager.showNextScene();
    }

    // Vẽ nút Help (Chỉ hiển thị nếu con cua đang ở trong màn hình)
    checkButtonPress("Help", this.btHelp.x, this.btHelp.y, this.btHelp.w, this.btHelp.h, color(220, 100, 100), color(100), color(250));
  }

  this.keyPressed = function() {
    switch (key) {
      case "a": this.crab.x -= this.crab.speed; break;
      case "d": this.crab.x += this.crab.speed; break;
      case "w": this.crab.y -= this.crab.speed; break;
      case "s": this.crab.y += this.crab.speed; break;
    }
    this.crab.x = constrain(this.crab.x, 0, width - this.crab.size);
    this.crab.y = constrain(this.crab.y, 0, height - this.crab.size);
  }

  this.mousePressed = function() {
    // Kiểm tra nếu click vào nút Help
    if (mouseX > this.btHelp.x && mouseX < this.btHelp.x + this.btHelp.w && mouseY > this.btHelp.y && mouseY < this.btHelp.y + this.btHelp.h) {
      this.sceneManager.showScene(help);  // Chuyển sang scene Help
    }
  }
}

// ===================== Help Scene =====================

function help() {
  this.setup = function() {
    // Cài đặt ban đầu cho Help scene (nếu cần)
  }

  this.enter = function() {
    // Đặt trạng thái ban đầu khi vào scene help
  }

  this.draw = function() {
    background("lightblue");
    fill(200, 150, 0);
    ellipse(width / 2, height / 2 + 150, 260, 220);
    fill(0, 120, 200);
    rect(-5, height - 170, width + 5, 170);

    // Hiển thị thông tin hướng dẫn
    fill("black");
    textAlign(LEFT);
    textSize(20);
    text("Welcome to the Crab Adventure!", 150, 50);
    text("Here you control the crab to collect treasure.", 30, 100);
    text("Use WASD to move the crab around the screen.", 30, 150);
    text("When you collect the treasure, you will progress to the next level.", 30, 200);
    text("Click on the crab to go back to the main game.", 30, 250);

    // Nút quay lại game chính
    let btnevent1 = checkButtonPress("Back to Game", width / 2 - 70, height - 70, 140, 40, color(220, 100, 100), color(100), color(250));
    if (btnevent1) {
      this.sceneManager.showScene(Crab);  // Quay lại scene Crab
    }
  }

  this.mousePressed = function() {
    // Sự kiện khi nhấn chuột (nếu có)
  }
}

// ===================== Button Check =====================

function checkButtonPress(str, bx, by, boxW, boxH, upcolor, ovcolor, dncolor) {
  let btnc = "";
  let btnstate = false;

  // Test if the cursor is over the box
  if (mouseX > bx - boxW && mouseX < bx + boxW && mouseY > by - boxH && mouseY < by + boxH) {
    if (!mouseIsPressed) {
      stroke(255);
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }
  } else {
    stroke(255);
    btnc = upcolor;
  }

  push();
  translate(bx, by);
  fill(btnc);
  rect(0, 0, boxW, boxH, 10); // Draw the button
  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text(str, boxW / 2, 28);
  pop();

  return btnstate;
}
