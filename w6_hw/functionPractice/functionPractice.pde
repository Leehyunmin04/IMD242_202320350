int randomSeed = int(random(10000));


void setup() {
  size(800, 800);
}

void mousePressed() {
  randomSeed = int(random(10000));
}

void draw() {
  randomSeed(randomSeed);
  background(230);
  for (int n = 0; n < 5; n++) {
    flower(random(0.01 * width, 0.9 * width), random(height * 0.25, height * 0.1), random(10, 50), random(100, 700));
  }
}

void flower(float x, float y, float w, float h) {
  
  pushStyle();

  pushMatrix();
  translate(x, height);
  strokeWeight(2);
  float r = random(150, 200);
  float g = random(100, 170);
  float b = random(100, 120);

  fill(r, g, b);
  stroke(120, 50, 50);
  
  float houseSize = random(300, 700);
  rect(0, 0, 200, -houseSize);
  fill(130, 110, 100);
  float doorxX = random(30, 50);
  float dooryY = random(80, 120);
  rect(doorxX, 0, dooryY, -houseSize / 3);
  fill(200);
  circle(doorxX + 15, -dooryY / 2, 20);
  fill(200, 220, 250);
  float windowX = random(20, 30);
  float windowY = random(30, 50);
  float windowH = random(250, 250);
  rect(windowX, -windowH, windowY, -houseSize / 7);
  rect(windowX + 60, -windowH, windowY, -houseSize / 7);
  rect(windowX + 120, -windowH, windowY, -houseSize / 7);
  pushMatrix();
  translate(0, -h);

  
  float doorX = random(30, 70);
  float doorY = random(10, 50);
  popMatrix();
  popMatrix();
  popStyle();
}
