let tileNum;
let randomSeedValue = 0;
let noiseMult = 0.1;
let r, g, b;

function setup() {
  createCanvas(800, 800);
  background(0); // 배경을 검은색으로 초기화
  noStroke(); // 기본적으로 stroke를 없애기
}

function draw() {
  randomSeed(randomSeedValue); // 랜덤 시드를 설정
  background(0); // 매 프레임마다 배경을 다시 그리기

  // 마우스 위치에 따른 타일 수 계산
  tileNum = int(map(mouseX, 0, width, 3, 16 + 1));
  noiseMult = pow(10, map(mouseY, 0, height, -1, -4)); // Y 위치에 따른 noise 배율
  let tileSize = width / float(tileNum);

  // 타일을 그리기
  for (let row = 0; row < tileNum; row++) {
    for (let col = 0; col < tileNum; col++) {
      let rectX = tileSize * col;
      let rectY = tileSize * row;
      let centerX = rectX + tileSize * 0.5;
      let centerY = rectY + tileSize * 0.5;

      // 노이즈 값을 사용하여 회전 값 계산
      let noiseVal = noise(
        centerX * noiseMult + frameCount * 0.022,
        centerY * noiseMult
      );

      // 색상 계산
      r = tileSize * col * 0.3;
      g = tileSize * row * 0.3;
      b = tileSize * 0.7;

      fill(255); // 타일의 배경을 흰색으로 채우기
      rect(rectX, rectY, tileSize, tileSize); // 타일 그리기

      fill(r, g, b); // 타일의 색상 설정
      ellipse(centerX, centerY, tileSize * 0.9); // 원 그리기

      fill(0); // 검은색 설정
      fill(255); // 다시 흰색으로 설정
      ellipse(centerX, centerY, tileSize * 0.5); // 작은 원 그리기

      push(); // 변환을 저장
      translate(centerX, centerY); // 원의 중심으로 이동
      rotate(radians(180 * noiseVal)); // 회전 각도 설정

      line(0, 0, tileSize * 0.8 * 0.5, 0); // 선 그리기

      fill(0); // 검은색 설정
      ellipse(tileSize * 0.4 * 0.25, 0, tileSize * 0.3); // 작은 원 그리기
      fill(255); // 흰색 설정

      ellipse(tileSize * 0.1, tileSize * 0.1, tileSize * 0.065); // 작은 원들 그리기
      fill(r, g, b); // 색상 설정
      ellipse(-tileSize * 0.4, -tileSize * 0.1, tileSize * 0.3, tileSize * 0.2); // 타일 안에 타원 그리기
      ellipse(-tileSize * 0.4, tileSize * 0.1, tileSize * 0.3, tileSize * 0.2);

      ellipse(
        -tileSize * 0.05,
        -tileSize * 0.4,
        tileSize * 0.05,
        tileSize * 0.17
      ); // 타원 그리기
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
      ); // 타원 그리기
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
      ); // 작은 타원 그리기
      fill(255); // 흰색 설정
      ellipse(
        tileSize * 0.338,
        tileSize * 0.05,
        tileSize * 0.04,
        tileSize * 0.02
      ); // 작은 원들 그리기
      ellipse(
        tileSize * 0.338,
        -tileSize * 0.05,
        tileSize * 0.04,
        tileSize * 0.02
      );
      pop(); // 변환 되돌리기
    }
  }
}
