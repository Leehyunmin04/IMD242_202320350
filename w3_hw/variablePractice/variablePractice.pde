//float x = random(width);
//float y = random(height);
//float r = random(255);
//float g = random(255);
//float b = random(255);
//float s = random(5, 50);
//color currentColor;
//color targetColor;
//int numStars = 50;
//Star[] stars = new Star[numStars];
float x;
float y;
float r;
float g;
float b;
float s;

color currentColor;
color targetColor;
int numStars = 50;
Star[] stars = new Star[numStars];

void setup() {
  size(1280, 720);
  noStroke();
  currentColor = color(10, 10, 100);
  targetColor = currentColor;
  for (int i = 0; i < numStars; i++) {
    stars[i] = new Star();
  }
}

void draw() {
  float gradientValue = map(mouseX, 0, width, 0, 1);
  color blue = color(10, 10, 100);
  color lightBlue = color(136, 205, 250);
  color orange = color(200, 130, 0);

  if (frameCount % 30 == 0) {
    if (gradientValue < 0.5) {
      targetColor = lerpColor(blue, lightBlue, gradientValue * 2);
    } else {
      targetColor = lerpColor(lightBlue, orange, (gradientValue - 0.5) * 2);
    }
  }

  currentColor = lerpColor(currentColor, targetColor, 0.05);


  background(currentColor);

  for (int i = 0; i < numStars; i++) {
    stars[i].update();
    stars[i].display();
  }

}

class Star {
    float x;
    float y;
    float r;
    float g;
    float b;
    float s;
    float speed;
  
  
  Star() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(220, 255);
    this.g = random(220, 255);
    this.b = random(0, 255);
    this.s = random(5, 30);
    this.speed = random(1, 5);
  }
  void update() {
    x += speed;
    if (x > width) {
      x = 0;
      y = random(height);
    }
  }
  void display() {
    fill(r, g, b);
    circle(x, y, s);
  }
}

  

  //Star() {
  //  x = random(width);
  //  y = random(height);
  //  r = random(230, 250);
  //  g = random(230, 250);
  //  b = random(0, 10);
  //  s = random(5, 30);
  //  speed = random(1, 5);

  //  void update() {
  //    x += speed;
  //    if (x > width) {
  //      x = 0;
  //      y = random(height);
  //    }
  //  }

  //  //int numCircles = 50;
  //  x = random(width);
  //  y = random(height);
  //  r = random(230, 250);
  //  g = random(230, 255);
  //  b = random(0, 10);
  //  s = random(1, 30);
  //  fill(r, g, b);
  //  circle(x, y, s);
  //}
