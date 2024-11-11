function setup() {
  createCanvas(640, 360);
  rectMode(CENTER);
}

function draw() {
  background(0);

  if (mouseY < height / 4) {
    line(300, 65, 350, 15);
  } else if (mouseY < (height / 4) * 2) {
    square(320, 135, 50);
  } else if (mouseY < (height / 4) * 3) {
    rect(320, 225, 120, 45, 10);
  } else {
    circle(320, 315, 50);
  }

  stroke(127);
  strokeWeight(4);
  line(0, height / 4, width, height / 4);
  line(0, (height / 4) * 2, width, (height / 4) * 2);
  line(0, (height / 4) * 3, width, (height / 4) * 3);
}
