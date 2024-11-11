let faceX;
let faceY;

function setup() {
  createCanvas(1000, 800);
  noStroke();
  faceX = width / 2;
  faceY = height / 2;
}

function draw() {
  background(50, 50, 50);
  noStroke();

  fill(135, 200, 240);
  ellipse(faceX - 100, faceY - 120, 70, 100);
  ellipse(faceX + 100, faceY - 120, 70, 100);

  fill(150, 240, 150);
  ellipse(faceX - 15, faceY - 200, 30, 20);
  ellipse(faceX + 15, faceY - 200, 30, 20);
  stroke(150, 240, 150);
  line(faceX, faceY, faceX, faceY - 200);

  noStroke();
  fill(205, 230, 250);
  ellipse(faceX - 105, faceY - 133, 50, 70);
  ellipse(faceX + 95, faceY - 133, 50, 70);

  // 귀안
  fill(80, 105, 130);
  ellipse(faceX - 110, faceY - 113, 30, 50);
  ellipse(faceX + 110, faceY - 113, 30, 50);

  fill(135, 200, 240);
  ellipse(faceX, faceY, 300, 300);

  noStroke();
  fill(205, 230, 250);
  ellipse(faceX - 12, faceY - 12, 270, 270);

  fill(80, 105, 130);
  ellipse(faceX, faceY - 30, 30, 20);
  fill(255, 200, 200, 100);
  ellipse(faceX - 100, faceY - 30, 30, 20);
  fill(255, 200, 200, 100);
  ellipse(faceX + 100, faceY - 30, 30, 20);

  stroke(250, 255, 250);
  line(faceX - 100, faceY, faceX - 180, faceY - 20);
  line(faceX + 100, faceY, faceX + 180, faceY - 20);
  line(faceX - 100, faceY + 20, faceX - 180, faceY + 20);
  line(faceX + 100, faceY + 20, faceX + 180, faceY + 20);
  noStroke();

  let eyeOffsetX = 60;
  let eyeOffsetY = 50;
  let eyeSize = 50;

  let leftEyeX = faceX - eyeOffsetX;
  let rightEyeX = faceX + eyeOffsetX;
  let eyeY = faceY - eyeOffsetY;

  let maxOffset = 20;

  let leftPupilX = constrain(
    map(mouseX, 0, width, leftEyeX - maxOffset, leftEyeX + maxOffset),
    leftEyeX - maxOffset,
    leftEyeX + maxOffset
  );
  let rightPupilX = constrain(
    map(mouseX, 0, width, rightEyeX - maxOffset, rightEyeX + maxOffset),
    rightEyeX - maxOffset,
    rightEyeX + maxOffset
  );
  let pupilY = constrain(
    map(mouseY, 0, height, eyeY - maxOffset, eyeY + maxOffset),
    eyeY - maxOffset,
    eyeY + maxOffset
  );

  fill(255);
  ellipse(leftEyeX, eyeY, eyeSize, eyeSize);
  ellipse(rightEyeX, eyeY, eyeSize, eyeSize);

  fill(50, 50, 80);
  ellipse(leftPupilX, pupilY, 20, 20);
  ellipse(rightPupilX, pupilY, 20, 20);

  fill(255, 200, 200);
  strokeWeight(5);

  let mouthDiameter = 90;
  let mouthY = faceY + 50;

  let distanceToMouse = dist(mouseX, mouseY, faceX, mouthY);

  let mouthOpen = map(distanceToMouse, 0, 200, 1.5, 1.0);
  mouthOpen = constrain(mouthOpen, 1.0, 1.5);

  ellipse(faceX, mouthY, mouthDiameter * mouthOpen, mouthDiameter * mouthOpen);
}

function mousePressed() {
  faceX = mouseX;
  faceY = mouseY;
}
