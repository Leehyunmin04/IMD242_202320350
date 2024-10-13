

void setup() {
  
  size(800, 800);
  
}
void draw() {
  background(255);
  translate(width / 2, height / 2);
  
  stroke(0);
  fill(255);
  ellipse(0, 0, 600, 600);
  //circle(0, 0, 300);
  int h = hour();
  int m = minute();
  int s = second();
  
  float secondA = map(s, 0, 60, 0, 360) - 90;
  float minuteA = map(m, 0, 60, 0, 360) - 90;
  float hourA = map(h % 12 + m / 60, 0, 12, 0, 360) - 90;
  
  strokeWeight(8);
  noFill();
  ellipse(0, 0, 600, 600);
  
  stroke(0);
  strokeWeight(8);
  line(0, 0, 200 * cos(radians(hourA)), 200 * sin(radians(hourA)));
  
  stroke(0);
  strokeWeight(5);
  line(0, 0, 250 * cos(radians(minuteA)), 250 * sin(radians(minuteA)));
  
  stroke(255, 0, 0);
  strokeWeight(3);
  line(-50 * cos(radians(secondA)), -50 * sin(radians(secondA)), 240 * cos(radians(secondA)), 240 * sin(radians(secondA)));
  
  
  stroke(0);
  strokeWeight(6);
  
  for (int i = 0; i < 12; i++) {
    float angle = (i / 12.0) * 360 - 90;
    float x = 300 * cos(radians(angle));
    float y = 300 * sin(radians(angle));
    float x1 = 270 * cos(radians(angle));
    float y1 = 270 * sin(radians(angle));
    line(x1, y1, x, y);
  }
  strokeWeight(3);
  for (int j = 0; j < 60.0; j++) {
    float angle = (j / 60.0) * 360 - 90;
    float x = 300 * cos(radians(angle));
    float y = 300 * sin(radians(angle));
    float x1 = 290 * cos(radians(angle));
    float y1 = 290 * sin(radians(angle));
    line(x1, y1, x, y);
  }
  stroke(255, 0, 0);
  fill(255, 0, 0);
  ellipse(0, 0, 20, 20);
  
  
  
  
}
