function ClockScene() {
  this.digits = [];
  this.currentDigit = 0;
  this.finished = false;
  this.lastMinute = -1;
  this.btBack = { x: 20, y: 20, w: 120, h: 40 };

  // Fireworks
  this.fireworks = [];
  this.gravity = createVector(0, 0.2);
  this.launched = false;
  this.fireworkDone = false;

   this.textSizeVal = 95;
this.showCongrats = false;

  this.setup = function () {
    stroke(135, 206, 250);
    strokeWeight(4);
    noFill();
    textFont('Georgia');
  };

  this.enter = function () {
    this.launched = false;
    this.fireworkDone = false;
    this.fireworks = [];
    this.currentDigit = 0;
    this.updateTimeDigits();
  };

  this.draw = function () {
    background(0, 0, 0,25);

  if (!this.fireworksLaunched) {
    colorMode(HSB);
    for (let i = 0; i < 80; i++) {
      this.fireworks.push(new Firework());
    }
    this.fireworksLaunched = true;
  }

  // Update & show fireworks if any
  if (!this.fireworksDone) {
    colorMode(RGB);
    background(0, 0, 0, 25);
    for (let i = this.fireworks.length - 1; i >= 0; i--) {
      this.fireworks[i].update();
      this.fireworks[i].show();
      if (this.fireworks[i].done()) {
        this.fireworks.splice(i, 1);
      }
    }

    // Show "Congratulations" text while fireworks active
    if (this.textSizeVal === undefined) {
      this.textSizeVal = 64;  // initialize if not set
    }
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(this.textSizeVal);
    text("Congratulations", width / 2, height / 2 - 200);
    this.textSizeVal -= 0.5;  // gradually shrink text

    if (this.textSizeVal < 32) this.textSizeVal = 64; // loop text size if you want, or remove this line to keep shrinking

    if (this.fireworks.length === 0) {
      this.fireworksDone = true;
      this.textSizeVal = 0;  // hide text after fireworks done
    }
    return; // skip clock until fireworks + congrats done
  }

  // 3. Hiển thị chữ "Congratulations" khi pháo hoa đã xong
  if (this.showCongrats) {
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(this.textSizeVal);
    text("Congratulations", width / 2, height / 2);
    this.textSizeVal -= 1; // giảm kích thước chữ

    if (this.textSizeVal <= 0) {
      this.showCongrats = false;  // tắt chữ đi
      this.finished = false;      // reset trạng thái đồng hồ nếu cần
    }
    return; // chỉ vẽ chữ thôi ở bước này
  }
    // Draw Back Again! button
    fill(255);
    stroke(135, 206, 250);
    strokeWeight(4);
    rect(this.btBack.x, this.btBack.y, this.btBack.w, this.btBack.h, 10);
    noStroke();
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Math Again", this.btBack.x + this.btBack.w / 2, this.btBack.y + this.btBack.h / 2);

    let nowMin = minute();
    if (nowMin !== this.lastMinute) {
      this.updateTimeDigits();
    }

    // Dấu hai chấm
    this.drawColon(this.xStart + 2 * 100 - 10, 250);

    // Vẽ từng chữ số
    for (let i = 0; i < this.digits.length; i++) {
      if (i > this.currentDigit) break;
      let d = this.digits[i];
      if (!Array.isArray(d.shape) || d.shape.length < 2) continue;

      push();
      translate(d.x, d.y);
      scale(1.5);

      let totalSegments = d.shape.length - 1;
      let segToDraw = floor(map(d.progress, 0, 1, 0, totalSegments));

      for (let j = 0; j < segToDraw; j++) {
        let p1 = d.shape[j];
        let p2 = d.shape[j + 1];
        if (!p1 || !p2) continue;
        line(p1[0], p1[1], p2[0], p2[1]);
      }

      if (segToDraw < totalSegments) {
        let p1 = d.shape[segToDraw];
        let p2 = d.shape[segToDraw + 1];
        if (p1 && p2) {
          let t = map(d.progress * totalSegments - segToDraw, 0, 1, 0, 1);
          let x1 = lerp(p1[0], p2[0], t);
          let y1 = lerp(p1[1], p2[1], t);
          line(p1[0], p1[1], x1, y1);
        }
      }
      pop();

      d.progress += 0.02;

      if (d.progress >= 1 && i === this.currentDigit) {
        this.currentDigit++;
      }
    }

    if (this.currentDigit >= this.digits.length && !this.finished) {
      this.finished = true;
    }

    let h = hour();
    let m = minute();
    if (this.finished && (h >= 0 && h <= 24) && (m === 0 || m === 15 || m === 30 || m === 45)) {
      this.drawFlower(width / 2, height - 50);
    }
  }

  this.mousePressed = function () {
    if (
      mouseX > this.btBack.x &&
      mouseX < this.btBack.x + this.btBack.w &&
      mouseY > this.btBack.y &&
      mouseY < this.btBack.y + this.btBack.h
    ) {
      this.sceneManager.showScene(Maths);
    }
  }

  this.updateTimeDigits = function () {
    this.digits = [];
    this.currentDigit = 0;
    this.finished = false;
    this.lastMinute = minute();

    let totalWidth = 4 * 100 + 20;
    let xStart = (900 - totalWidth) / 2;
    this.xStart = xStart;

    let y = 250;
    let h = nf(hour(), 2);
    let m = nf(minute(), 2);
    let timeStr = h + m;

    let x = xStart;
    for (let i = 0; i < timeStr.length; i++) {
      let shape = this.getDigitPath(timeStr[i]);
      this.digits.push({
        char: timeStr[i],
        x: x,
        y: y,
        progress: 0,
        shape: shape
      })
      x += 100;
      if (i === 1) x += 20;
    }
  }

  this.drawColon = function (x, y) {
    fill(135, 206, 250);
    noStroke();
    ellipse(x, y + 20, 6, 6);
    ellipse(x, y + 50, 6, 6);
    noFill();
    stroke(135, 206, 250);
  };

  this.getDigitPath = function (d) {
    if (d === "0") return [[10,0],[0,20],[0,60],[10,80],[30,80],[40,60],[40,20],[30,0],[10,0]];
    if (d === "1") return [[20,0],[20,80]];
    if (d === "2") return [[0,20],[10,0],[30,0],[40,20],[0,80],[40,80]];
    if (d === "3") return [[0,10],[20,0],[40,20],[20,40],[40,60],[20,80],[0,70]];
    if (d === "4") return [[40,80],[40,0],[0,40],[40,40]];
    if (d === "5") return [[40,0],[0,0],[0,40],[30,40],[40,60],[30,80],[0,70]];
    if (d === "6") return [[30,0],[0,40],[0,70],[20,80],[40,60],[0,40]];
    if (d === "7") return [[0,0],[40,0],[20,80]];
    if (d === "8") return [[20,0],[0,20],[20,40],[0,60],[20,80],[40,60],[20,40],[40,20],[20,0]];
    if (d === "9") return [[40,40],[20,0],[0,20],[0,40],[20,40],[40,40],[0,80]];
    return [];
  };

  this.drawFlower = function (x, y) {
    push();
    translate(x, y);
    for (let i = 0; i < 8; i++) {
      let angle = TWO_PI / 8 * i;
      let px = cos(angle) * 20;
      let py = sin(angle) * 20;
      fill(255, 105, 180);
      noStroke();
      ellipse(px, py, 20, 20);
    }
    fill(255, 215, 0);
    ellipse(0, 0, 15, 15);
    pop();
  };
}


class Firework {
  constructor() {
    this.hu = random(255);
    this.firework = new Particle(random(width), height, this.hu, true);
    this.exploded = false;
    this.particles = [];
    this.textSizeVal = 64;      // kích thước chữ ban đầu
this.showCongrats = false;
  }

  done() {
    return this.exploded && this.particles.length === 0;
  }

  update() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  explode() {
    for (let i = 0; i < 100; i++) {
      let p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }
  }

  show() {
    if (!this.exploded) {
      this.firework.show();
    }
    for (let p of this.particles) {
      p.show();
    }
  }
}

class Particle {
  constructor(x, y, hu, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;
    this.acc = createVector(0, 0);
    this.vel = firework
      ? createVector(0, random(-12, -8))
      : p5.Vector.random2D().mult(random(2, 10));
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    if (!this.firework) {
      this.lifespan -= 4;
    }
  }

  done() {
    return this.lifespan < 0;
  }

  show() {
    colorMode(HSB);
    if (!this.firework) {
      stroke(this.hu, 255, 255, this.lifespan);
      strokeWeight(2);
    } else {
      stroke(this.hu, 255, 255);
      strokeWeight(10);
    }
    point(this.pos.x, this.pos.y);
  }
}
