let fruitAmt = new Array(5);
let fruitNames = ['Mango', 'Strawberry', 'Kiwi', 'Plum', 'Banana'];
let fruitColor = [
  [255, 200, 0],
  [230, 20, 20],
  [140, 200, 0],
  [100, 0, 190],
  [255, 255, 130],
];

function setup() {
  createCanvas(1280, 720);

  for (let idx = 0; idx < fruitAmt.length; idx++) {
    fruitAmt[idx] = int(random(5, 100));
  }
}

let barWidth = 24;
let graphBegin = 0.1;
let graphGap = 0.15;

function draw() {
  background(0);
  strokeWeight(barWidth);
  stroke(255);
  strokeCap(SQUARE);
  textAlign(CENTER);
  textSize(24);
  fill(255);

  let totalSum = 0;
  for (let amt of fruitAmt) {
    totalSum += amt;
  }
  let avg = totalSum / float(fruitAmt.length);

  text('Total Fruit Inventory: ' + totalSum, width * 0.5, 40);
  text('Average Number of Fruits: ' + nf(avg, 0, 2), width * 0.5, 70);

  let totalWidth = (fruitAmt.length - 1) * width * graphGap;
  let graphBegin = (width - totalWidth) / 2.0;

  for (let idx = 0; idx < fruitAmt.length; idx++) {
    let x = graphBegin + idx * width * graphGap;
    stroke(fruitColor[idx][0], fruitColor[idx][1], fruitColor[idx][2]);
    line(x, height * 0.5, x, height * 0.5 - fruitAmt[idx]);
    let y = height * 0.5 - fruitAmt[idx];

    strokeWeight(2);
    fill(0);
    ellipse(x, y - 23, 40, 40);

    strokeWeight(23);
    fill(fruitColor[idx][0], fruitColor[idx][1], fruitColor[idx][2]);
    text(fruitNames[idx], x, height * 0.5 + 50);
    text(fruitAmt[idx], x, height * 0.5 - fruitAmt[idx] - 16);
  }
}
