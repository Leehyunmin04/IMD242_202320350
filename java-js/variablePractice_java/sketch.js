let stars = [];
let currentColor;
let targetColor;

function setup() {
  createCanvas(1280, 720);
  noStroke();
  currentColor = color(10, 10, 100);
  targetColor = currentColor;

  for (let i = 0; i < 50; i++) {
    stars.push(new Star());
  }
}

function draw() {
  let gradientValue = map(mouseX, 0, width, 0, 1);
  let blue = color(10, 10, 100);
  let lightBlue = color(136, 205, 250);
  let orange = color(200, 130, 0);

  if (frameCount % 30 == 0) {
    if (gradientValue < 0.5) {
      targetColor = lerpColor(blue, lightBlue, gradientValue * 2);
    } else {
      targetColor = lerpColor(lightBlue, orange, (gradientValue - 0.5) * 2);
    }
  }

  currentColor = lerpColor(currentColor, targetColor, 0.05);

  background(currentColor);

  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].display();
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(220, 255);
    this.g = random(220, 255);
    this.b = random(0, 255);
    this.s = random(5, 30);
    this.speed = random(1, 5);
  }

  update() {
    this.x += this.speed;
    if (this.x > width) {
      this.x = 0;
      this.y = random(height);
    }
  }

  display() {
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.s);
  }
}
