let colours = ['#257180', '#F2E5BF', '#FD8B51', '#CB6040'];
let gravity = [0, 0.1];
let friction = 0.99;
let cnt = 0;
let mouse = [0, 0];
let confetties = [];

function setup() {
  createCanvas(800, 800);
}

function gen(x, y, n) {
  for (let i = 0; i < n; i++) {
    let randomW = random(4, 20);
    let randomH = random(4, 20);
    let randomForce = random(1, 10);
    let randomAngForce = random(-30, 30);
    let newConfetti = new Confetti(
      x,
      y,
      randomW,
      randomH,
      random(colours),
      randomForce,
      randomAngForce
    );
    confetties.push(newConfetti);
  }
}

function mousePressed() {
  cnt = 0;
  mouse[0] = mouseX;
  mouse[1] = mouseY;
}

function mouseReleased() {
  console.log('gen: ' + cnt);
  gen(mouse[0], mouse[1], cnt);
}

function keyPressed() {
  if (key === 'p' || key === 'P') {
    console.log('confetties: ' + confetties.length);
  }
}

function draw() {
  if (mouseIsPressed) {
    cnt++;
  }
  background(255);

  for (let i = confetties.length - 1; i >= 0; i--) {
    let aConfetti = confetties[i];
    aConfetti.update(gravity, friction);
    if (aConfetti.isOutOfScreen()) {
      confetties.splice(i, 1);
    }
  }

  for (let i = 0; i < confetties.length; i++) {
    confetties[i].display();
  }
}

class Confetti {
  constructor(x, y, w, h, colour, force, angForce) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colour = colour;
    this.force = force;
    this.angForce = angForce;
    this.velX = random(-force, force);
    this.velY = random(-force, force);
    this.angle = 0;
    this.angularVel = angForce / 100;
  }

  update(gravity, friction) {
    this.velX += gravity[0];
    this.velY += gravity[1];
    this.velX *= friction;
    this.velY *= friction;
    this.x += this.velX;
    this.y += this.velY;
    this.angle += this.angularVel;
  }

  isOutOfScreen() {
    return (
      this.x + this.w < 0 || this.x - this.w > width || this.y - this.h > height
    );
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    noStroke();
    fill(this.colour);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
