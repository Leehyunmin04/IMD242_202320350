class Firework {
  float x;
  float y;
  float startHeight;
  float nowHeight;
  float speed;
  boolean boom = false;
  int explosionTime = 0;
  int explosionDuration = 40;
  
  float opacity = 255;//불꽃이 떨어지면서 점점 흐려지게 하려고 opacity
  
  //int pressTime;
  //int releaseTime;
  //float maxRad = height * 0.03;
//마우스를 클릭한 곳에 폭죽이 터져야함 
  Firework(float targetX, float targetY) {
    x = targetX;
    y = targetY;
    startHeight = height * 0.75;
    nowHeight = startHeight;
    speed = height * 0.01;
  }

  void update() { 
    if (!boom) {//마우스로 클릭한 위치까지 이동.
      if (nowHeight > y) {
        nowHeight -= speed;
      } else {
        boom = true;
        explosionTime = explosionDuration;
        flashEffect = true;//화면 밝아지는 그거 
      }
    } else {
      if (opacity > 0) {
        opacity -= 5;
      }
      nowHeight += 2;
      explosionTime--;
    }
  }

  void display() {
    //일단 불꽃이 터지기 전에 쏘아올려지는 모션을 넣을거임. 폭발 한다와 안한다(?)로 나눠서 할 예정.
    
    if (boom == false) {
      stroke(255);
      line(x, nowHeight, x, nowHeight + height * 0.01);
    } else if (explosionTime > 0) {
      //여기가 불꽃이 터지는 모양.
      noStroke();
      fill(random(210,250), random(160, 230), random(10,120), opacity);
      for (int index = 0; index < 40; index++) {
        float angle = random(TWO_PI);
        float rad = random(height * 0.01, maxRad);
        ///그래 이 부분 ,뒤에 저기가 ....마우스 눌리는 시간에 따라 달라져야함 
        ellipse(x + cos(angle) * rad, nowHeight + sin(angle) * rad, height * 0.005, height * 0.005);
      }
    }
    
  }
  //int pressTime;
  //int releaseTime;
  //float maxRad = height * 0.03;
  
  //void mousePressed() {
  //    //마우스가 눌려져있는 시간에 따라 .....뭔가....어.....음...어.....여기서 뭔가 해야할것같은데...
  //    //지피티 피셜 마우스를 눌리기 시작한 시간과 땐 시간을 계산해서 원하는 수치 사이의 값으로 매핑해서(?)..
  //    pressTime = millis();//마우스 누르고있는 시간 기록 
  //  }
    
  //void mouseReleased() {
  //  releaseTime = millis();
  //  int duration = releaseTime - pressTime;
  //  maxRad = map(duration, 0, 1000, height * 0.03, height * 0.2);
  //  maxRad = constrain(maxRad, height * 0.03, height * 0.2);//이 부분이 범위 제한 
    
  //}

  boolean last() {
    return boom && explosionTime <= 0;
  }
}
