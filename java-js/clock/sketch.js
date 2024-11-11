function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  stroke(0);
  fill(255);
  ellipse(0, 0, 600, 600); // Draw the clock face

  let h = hour();
  let m = minute();
  let s = second();

  let secondA = map(s, 0, 60, 0, 360) - 90;
  let minuteA = map(m, 0, 60, 0, 360) - 90;
  let hourA = map((h % 12) + m / 60, 0, 12, 0, 360) - 90;

  // Draw clock hands
  strokeWeight(8);
  noFill();
  ellipse(0, 0, 600, 600); // Draw the outer circle

  stroke(0);
  strokeWeight(8);
  line(0, 0, 200 * cos(radians(hourA)), 200 * sin(radians(hourA))); // Hour hand

  stroke(0);
  strokeWeight(5);
  line(0, 0, 250 * cos(radians(minuteA)), 250 * sin(radians(minuteA))); // Minute hand

  stroke(255, 0, 0);
  strokeWeight(3);
  line(
    -50 * cos(radians(secondA)),
    -50 * sin(radians(secondA)),
    240 * cos(radians(secondA)),
    240 * sin(radians(secondA))
  ); // Second hand

  // Draw hour markers
  stroke(0);
  strokeWeight(6);
  for (let i = 0; i < 12; i++) {
    let angle = (i / 12.0) * 360 - 90;
    let x = 300 * cos(radians(angle));
    let y = 300 * sin(radians(angle));
    let x1 = 270 * cos(radians(angle));
    let y1 = 270 * sin(radians(angle));
    line(x1, y1, x, y); // Draw lines for hour markers
  }

  // Draw minute markers
  strokeWeight(3);
  for (let j = 0; j < 60.0; j++) {
    let angle = (j / 60.0) * 360 - 90;
    let x = 300 * cos(radians(angle));
    let y = 300 * sin(radians(angle));
    let x1 = 290 * cos(radians(angle));
    let y1 = 290 * sin(radians(angle));
    line(x1, y1, x, y); // Draw lines for minute markers
  }

  // Draw the center dot for the clock
  stroke(255, 0, 0);
  fill(255, 0, 0);
  ellipse(0, 0, 20, 20); // Center of the clock
}
