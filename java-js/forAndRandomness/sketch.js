let tileNum;
let randomSeed = 0;
let noiseMult = 0.1;
let r, g, b;

function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  randomSeed(randomSeed);
  background(0);

  tileNum = int(map(mouseX, 0, width, 3, 16 + 1));
  noiseMult = pow(10, map(mouseY, 0, height, -1, -4));

  let tileSize = width / float(tileNum);

  for (let row = 0; row < tileNum; row++) {
    for (let col = 0; col < tileNum; col++) {
      let rectX = tileSize * col;
      let rectY = tileSize * row;
      let centerX = rectX + tileSize * 0.5;
      let centerY = rectY + tileSize * 0.5;

      let noiseVal = noise(
        centerX * noiseMult + frameCount * 0.022,
        centerY * noiseMult
      );

      r = tileSize * col * 0.3;
      g = tileSize * row * 0.3;
      b = tileSize * 0.7;

      noStroke();
      fill(255);
      rect(rectX, rectY, tileSize, tileSize);

      fill(r, g, b);
      circle(centerX, centerY, tileSize * 0.9);

      // 삼각형 그리기
      fill(255, 0, 0); // 빨간색 삼각형
      triangle(
        centerX - tileSize * 0.2,
        centerY,
        centerX + tileSize * 0.2,
        centerY,
        centerX,
        centerY - tileSize * 0.4
      );

      fill(0);
      fill(255);

      circle(centerX, centerY, tileSize * 0.5);
      fill(255);

      push();
      translate(centerX, centerY);
      rotate(radians(180 * noiseVal));
      line(0, 0, tileSize * 0.8 * 0.5, 0);

      fill(0);
      circle(tileSize * 0.4 * 0.25, 0, tileSize * 0.3);
      fill(255);

      circle(tileSize * 0.1, tileSize * 0.1, tileSize * 0.065);
      fill(r, g, b);
      ellipse(-tileSize * 0.4, -tileSize * 0.1, tileSize * 0.3, tileSize * 0.2);
      ellipse(-tileSize * 0.4, tileSize * 0.1, tileSize * 0.3, tileSize * 0.2);

      ellipse(
        -tileSize * 0.05,
        -tileSize * 0.4,
        tileSize * 0.05,
        tileSize * 0.17
      );
      ellipse(
        tileSize * 0.05,
        tileSize * 0.4,
        tileSize * 0.05,
        tileSize * 0.17
      );

      ellipse(
        tileSize * 0.42,
        tileSize * 0.15,
        tileSize * 0.1,
        tileSize * 0.05
      );
      ellipse(
        tileSize * 0.42,
        -tileSize * 0.15,
        tileSize * 0.1,
        tileSize * 0.05
      );

      fill(200, 100, 100);
      ellipse(
        tileSize * 0.33,
        tileSize * 0.001,
        tileSize * 0.07,
        tileSize * 0.17
      );
      fill(255);
      ellipse(
        tileSize * 0.338,
        tileSize * 0.05,
        tileSize * 0.04,
        tileSize * 0.02
      );
      ellipse(
        tileSize * 0.338,
        -tileSize * 0.05,
        tileSize * 0.04,
        tileSize * 0.02
      );
      pop();
    }
  }
}
