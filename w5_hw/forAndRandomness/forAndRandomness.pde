//과제의 난이도를 낮춘;ㅡㄴ 가장 쉬운 방법. 1. 정사각하ㅕㅇ
//1. 마우스 위치에 따라 최소 3개에서 최대 16개위 사각 타일로 채운

int tileNum;
int randomSeed = 0;
float noiseMult = 0.1;
//float r = random(180, 250);
//float g = random(180, 250);
//float b = random(180, 250);
float r, g, b;
//float noiseOf = 0;

//float[] angles;

void setup() {
  background(0);
  size(800, 800);

  //angles = new float[16 * 16];
}
void draw() {
  randomSeed(randomSeed);
  background(0);
  tileNum = int(map(mouseX, 0, width, 3, 16 + 1));
  noiseMult = pow(10, map(mouseY, 0, height, -1, -4));
  float tileSize = width / float(tileNum);
  for (int row = 0; row < tileNum; row++) {
    for (int col = 0; col < tileNum; col++) {
      float rectX = tileSize * col;
      float rectY = tileSize * row;
      float centerX = rectX + tileSize * .5;
      float centerY = rectY + tileSize * .5;

      //float randomVal = random(1);
      //float noiseVal = noise(centerX * noiseMult + (frameCount * 0.0005), centerY * noiseMult);
      float noiseVal = noise(centerX * noiseMult + (frameCount * 0.022), centerY * noiseMult);
      //float noiseVal = noise(centerX * noiseMult, centerY * noiseMult);
      //angles[row * tileNum + col] += map(noiseVal, 0, 1, -PI/20, PI/20);
      //fill(255);
      r = tileSize * col * 0.3;
      g = tileSize * row * 0.3;
      b = tileSize * .7;

      noStroke();
      fill(255);
      rect(rectX, rectY, tileSize, tileSize);
      //fill(255 * noiseVal);
      fill(r, g, b);
      circle(centerX, centerY, tileSize * .9);
      //[여기 삼각형]
      //triangle(centerX, centerY, -centerX * .2, centerY * .5, centerX * .2, centerY * .5);
      fill(0);
      
      fill(255);

      circle(centerX, centerY, tileSize * .5);
      fill(255);
      //float lineMove = map(noise(noiseOf * 100), 0, 1, -0.5, 0.5);
      //아 뭐지 음ㅠㅠ
      //angle += lineMove;
      //float rR = random(-0.1, 0.1);
      //float noiseOf = radians(170 * noiseVal) * rR;
      //float rR = random(30);
      //rR = rR + 1;
      pushMatrix();
      //rotate(radians());
      translate(centerX, centerY);
      //rotate(radians(30 * randomVal));
      rotate(radians(180 * noiseVal));
      //float rR = random(30);
      //rR++;
      //float rR = random(-0.006, 0.006);
      //float rR2 = random(0.06, -0.06);
      //rotate(rR * 0.005 + radians(170 * noiseVal));
      //rotate(frameCount * rR + radians(170 * noiseVal));
      //rotate(frameCount * 0.005 + noiseOf);
      //rotate(radians(170 * noiseVal) * rR);
      //rotate(frameCount * 0.005 + radians(170 * noiseVal));
      //rotate(radians(random(300)));
      line(0, 0, tileSize * .8 * .5, 0);
      
      fill(0);
      circle(tileSize * .4 * .25, 0, tileSize * 0.3);
      fill(255);

      circle(tileSize * .1, tileSize * .1, tileSize * 0.065);
      fill(r, g, b);
      ellipse(-tileSize * .4, -tileSize * 0.1, tileSize * 0.3, tileSize * 0.2);
      ellipse(-tileSize * .4, tileSize * 0.1, tileSize * 0.3, tileSize * 0.2);
      
      ellipse(-tileSize * .05, -tileSize * 0.4, tileSize * 0.05, tileSize * 0.17);
      ellipse(tileSize * .05, tileSize * 0.4, tileSize * 0.05, tileSize * 0.17);
      
      ellipse(tileSize * .42, tileSize * 0.15, tileSize * 0.1, tileSize * 0.05);
      ellipse(tileSize * .42, -tileSize * 0.15, tileSize * 0.1, tileSize * 0.05);
      fill(200, 100, 100);
      ellipse(tileSize * .33, tileSize * 0.001, tileSize * 0.07, tileSize * 0.17);
      fill(255);
      ellipse(tileSize * .338, tileSize * 0.05, tileSize * 0.04, tileSize * 0.02);
      ellipse(tileSize * .338, -tileSize * 0.05, tileSize * 0.04, tileSize * 0.02);
      popMatrix();
    }
  }


  //noiseOf += 0.01;
}
