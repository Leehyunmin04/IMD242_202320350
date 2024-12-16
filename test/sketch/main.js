// 종횡비를 고정하고 싶을 경우: 아래 두 변수를 0이 아닌 원하는 종, 횡 비율값으로 설정.
// 종횡비를 고정하고 싶지 않을 경우: 아래 두 변수 중 어느 하나라도 0으로 설정.
const aspectW = 3;
const aspectH = 2;
// html에서 클래스명이 container-canvas인 첫 엘리먼트: 컨테이너 가져오기.
const container = document.body.querySelector('.container-canvas');

// 카메라
let handPose;
let video;
const videoW = 640;
const videoH = 480;
let hands = [];
let snowflakeImg, icecubeImg;
let topImage;

// **추가: 파티클 관련 변수**
let particles = [];

// Callback function for when handPose outputs data
function gotHands(results) {
  hands = results;
}

// 파티클 클래스 정의 **추가**
class Particle {
  constructor(x, y, shape) {
    this.x = x;
    this.y = y;
    this.size = random(0.5, 10); // 파티클 크기를 더 작게 설정
    this.life = 500; // 파티클의 수명

    this.shape = shape; // 'circle' 또는 'rect'
    this.vx = random(-1, 1); // X축 이동 속도
    this.vy = random(-4, -0.5); // Y축 이동 속도
    // this.size = random(20, 40); // 이미지 크기
  }

  update() {
    this.x += this.vx; // 파티클이 수평으로 퍼지도록 수정
    this.y += this.vy; // 위로 이동
    this.life -= 5; // 더 빠르게 사라짐
  }

  display() {
    noStroke();
    // fill(150, 170, 250, this.life); // 파란빛
    if (this.shape === 'circle' && random() < 0.7) {
      ellipse(this.x, this.y, this.size);
      if (this.size < 1) {
        // 50% 확률로만 이미지를 그리기
        image(icecubeImg, this.x, this.y, this.size * 50, this.size * 50); // 크기 축소
      }
    } else if (this.shape === 'rect' && random() < 0.7) {
      rect(this.x, this.y, this.size, this.size);
      if (this.size < 1) {
        // 50% 확률로만 이미지를 그리기
        image(snowflakeImg, this.x, this.y, this.size * 70, this.size * 70); // 크기 축소
      }
    }
  }

  isDead() {
    return this.life <= 0;
  }
}

function preload() {
  handPose = ml5.handPose({
    maxHands: 6,
    flipped: true,
  });
  snowflakeImg = loadImage('assets/ic-1.png');
  icecubeImg = loadImage('assets/snow-1.png');
  topImage = loadImage('assets/screen.png');
}

function setup() {
  video = createCapture(VIDEO, { flipped: true });
  video.size(videoW, videoH);
  video.hide();
  handPose.detectStart(video, gotHands);

  const { width: containerW, height: containerH } =
    container.getBoundingClientRect();
  if (aspectW === 0 || aspectH === 0) {
    createCanvas(containerW, containerH).parent(container);
  } else if (containerW / containerH > aspectW / aspectH) {
    createCanvas((containerH * aspectW) / aspectH, containerH).parent(
      container
    );
  } else {
    createCanvas(containerW, (containerW * aspectH) / aspectW).parent(
      container
    );
  }
  init();
}

function init() {}

function draw() {
  tint(170, 190, 230);
  image(video, 0, 0, width, height);
  noTint();

  image(topImage, 0, 0, width, height);
  const scaleX = width / videoW;
  const scaleY = height / videoH;

  // 손 추적 데이터
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];

    // 손바닥 영역에서 파티클 생성 **수정**
    const palm = hand.keypoints[9]; // 손바닥 중심
    const palmBase = hand.keypoints[0]; // 손목(손바닥 아래쪽)
    const handTop = hand.keypoints[12];
    // const bandBottom = hand.keypoints[0];

    // 손바닥 영역 정의
    const minX = min(palm.x, palmBase.x) * scaleX;
    const maxX = max(palm.x, palmBase.x) * scaleX;
    const minY = min(palm.y, palmBase.y) * scaleY;
    const maxY = max(palm.y, palmBase.y) * scaleY;

    for (let j = 0; j < 10; j++) {
      const x = random(minX, maxX);
      const y = random(minY, maxY);

      if (hands.length === 2) {
        const otherPalm = hands[(i + 1) % 2].keypoints[9];
        const otherX = otherPalm.x * scaleX;
        const otherY = otherPalm.y * scaleY;
        const distance = dist(x, y, otherX, otherY);

        if (distance < 500) {
          fill(190, 220, 255, 200);
          particles.push(new Particle(x, y, 'rect')); 
          image(snowflakeImg, this.x, this.y, this.size, this.size);
        } else {
          fill(255, 255, 255, 200);
          particles.push(new Particle(x, y, 'circle'));
        }
      } else {
        particles.push(new Particle(x, y, 'circle'));
      }
    }
  }

  // 파티클 업데이트 및 렌더링
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
}

function windowResized() {
  const { width: containerW, height: containerH } =
    container.getBoundingClientRect();
  if (aspectW === 0 || aspectH === 0) {
    resizeCanvas(containerW, containerH);
  } else if (containerW / containerH > aspectW / aspectH) {
    resizeCanvas((containerH * aspectW) / aspectH, containerH);
  } else {
    resizeCanvas(containerW, (containerW * aspectH) / aspectW);
  }
  init();
}
