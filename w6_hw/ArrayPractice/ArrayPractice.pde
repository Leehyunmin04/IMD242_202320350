int[] fruitAmt = new int[5];
String[] fruitNames = {"Mango", "Strawberry", "Kiwi", "Plum", "Banana"};

int[][] fruitColor = {
  {255, 200, 0}, 
{230, 20, 20}, 
{140, 200, 0}, 
{100, 0, 190}, 
{255, 255, 130}
  //color(255, 200, 0);
  //color(255, 0, 0);
  //color(100, 200, 0);
  //color(150, 0, 150);
  //color(255, 255, 100);
};

void setup() {
  size(1280, 720);

  for (int idx = 0; idx < fruitAmt.length; idx++) {
    fruitAmt[idx] = int(random(5, 100));
  }
}

float barWidth = 24;
float graphBegin = 0.1;
float graphGap = 0.15;

void draw () {
  background(0);
  strokeWeight(barWidth);
  stroke(255);
  strokeCap(SQUARE);
  textAlign(CENTER);
  textSize(24);
  fill(255);
  
  int totalSum = 0;
  for (int amt : fruitAmt) {
    totalSum += amt;
  }
  float avg = totalSum / float(fruitAmt.length);
  
  text("Total Fruit Inventory: " + totalSum, width * .5, 40);
  text("Averge Number of Fruits: " + nf(avg, 0, 2), width * .5, 70);
  
  float totalWidth = (fruitAmt.length - 1) * width * graphGap;
  float graphBegin = (width - totalWidth) / 2.0;

  for (int idx = 0; idx < fruitAmt.length; idx++) {
    float x = graphBegin + idx * width * graphGap;
    stroke(fruitColor[idx][0], fruitColor[idx][1], fruitColor[idx][2]);
    line(x, height * 0.5, x, height * 0.5 - fruitAmt[idx]);
    float y = height * .5 - fruitAmt[idx];
    //stroke(255);
    //fill(255);
    strokeWeight(2);
    fill(0);
    ellipse(x, y - 23, 40, 40);
    //strokeWeight(5);
    strokeWeight(23);
    fill(fruitColor[idx][0], fruitColor[idx][1], fruitColor[idx][2]);
    text(fruitNames[idx], x, height * 0.5 + 50);
    text(fruitAmt[idx], x, height * 0.5 - fruitAmt[idx] - 16);
    
    //circle(fruitAmt[idx], x, height * 0.5 - fruitAmt[idx] - 16);
  }
}
