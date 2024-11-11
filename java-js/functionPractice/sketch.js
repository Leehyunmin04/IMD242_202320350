let randomSeedValue;

function setup() {
  createCanvas(800, 800);
  randomSeedValue = int(random(10000));
}

function mousePressed() {
  randomSeedValue = int(random(10000));
}

function draw() {
  randomSeed(randomSeedValue);
  background(230);
  for (let n = 0; n < 5; n++) {
    flower(
      random(0.01 * width, 0.9 * width),
      random(height * 0.25, height * 0.1),
      random(10, 50),
      random(100, 700)
    );
  }
}

function flower(x, y, w, h) {
  push();

  translate(x, height);
  strokeWeight(2);
  let r = random(150, 200);
  let g = random(100, 170);
  let b = random(100, 120);

  fill(r, g, b);
  stroke(120, 50, 50);

  let houseSize = random(300, 700);
  rect(0, 0, 200, -houseSize);
  fill(130, 110, 100);
  let doorX = random(30, 50);
  let doorY = random(80, 120);
  rect(doorX, 0, doorY, -houseSize / 3);

  fill(200);
  ellipse(doorX + 15, -doorY / 2, 20);

  fill(200, 220, 250);
  let windowX = random(20, 30);
  let windowY = random(30, 50);
  let windowH = random(250, 250);
  rect(windowX, -windowH, windowY, -houseSize / 7);
  rect(windowX + 60, -windowH, windowY, -houseSize / 7);
  rect(windowX + 120, -windowH, windowY, -houseSize / 7);

  push();
  translate(0, -h);

  let doorX2 = random(30, 70);
  let doorY2 = random(10, 50);
  pop();

  pop();
}
