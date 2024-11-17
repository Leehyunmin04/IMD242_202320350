//불꽃놀이. 마우스를 클릭한 자리에 불꽃이 터진다. 불꽃의 크기는 마우스를 눌리고있는 시간에 비례한다.(단 최소 최대크기 존재)
//화면구성: 화면의 하단에 잔디 위에 앉아있는 두 남여가 있다. 
//마우스를 눌리고있는 동안 마우스를 다른 방향으로 움직이면 마지막으로 클릭한 자리에 불꽃이 생긴다.
//불꽃은 불꽃이 터지는 지면으로 부터의 높이에 따라 딜레이 시간이 달라진다.(높이 쏘아올릴수록 올라가는 시간이 길다)
//불꽃이 터지기까지의 딜레이 시간 동안(마우스클릭을 해제한 시점으로 부터) 지면에서부터 수직으로 불꽃이
//발사되는 모션과 함께 불꽃이 쏘아올려진다. 그리고 마우스를 클릭한 위치에(높이에) 도달하면 터진다.
//불꽃이 터질 때 전체 화면이 밝아지는 효과가 있다.
//불꽃이 터진 다음 아래로 떨어진다. 점점 흐려지며 사라진다.
//실행 화면의 모서리를 드래그하여 화면의 크기를 자유롭게 조절 가능 


//arratlist
ArrayList<Firework> fireworks = new ArrayList<>();
boolean flashEffect = false;

PImage img;

float newWidth, newHeight;

void setup() {
  //fullScreen();
  //이 코드는 ai(ChatGPT)의 도움을 받아 작성함.(질문: 화면의 비율을 드래그해서 바꿀 수 있는 방법을 알려줘/ 의도: 화면 크기가 달라져도 정상작동 할 뿐만 아니라 화면의 크기를 자유롭게 조절(?)하면서 해보고싶었음.)
  surface.setResizable(true);//이건 지피티가 알려줌. 화면의 크기를 마우스 드래그로 바꾸도록 허용.
  surface.setSize(displayWidth, displayHeight);//화면의 크기를 모니터 화면 크기로 지정.
  //size(displayWidth, displayHeight);
  
  img = loadImage("ai_img_neeew.png");//이미지 파일
  
}

void draw() {
  background(30, 40, 70);
  //이 코드는 ai(ChatGPT)의 도움을 약간 받아 작성함. float(img.width) (질문: 사진의 비율이 자꾸 안맞는데 화면의 크기와 상관없이 사진의 비율이 깨지지 않으면 좋겠어/ 의도: 떠오르는 방법으로 사진의 비율이 깨지지 않으면서 의도대로 위치하도록 해보려고 했으나 자꾸 비율이 이상해져서(?) 빠르게 해결하고자 질문)
  float imgAspect = float(img.width) / float(img.height);//화면의 비율이 달라져도 이미지의 비율을 유지할 수 있도록 
  //float screenAspect = float(width) / float(height);
  newHeight = height;
  newWidth = newHeight * imgAspect;
  if (newWidth > width) {
    newWidth = width;
    newHeight = newWidth / imgAspect;
  }
  //if (imgAspect > screenAspect) {
  //  newHeight = height;
  //  newWidth = newHeight / imgAspect;
  //} else {
  //  newHeight = height;
  //  newWidth = newHeight * imgAspect;
  //}
  float xX = (width - newWidth) / 2;
  float yY = height - newHeight;
  
  image(img, xX, yY, newWidth, newHeight);//이미지 출력 


  if (flashEffect) {
    background(250, 250, 200, 60);//이건 불꽃이 터져서 화면이 번쩍일때의 배경 색
    flashEffect = false;
  }


  for (int index = fireworks.size() - 1; index >= 0; index--) {
    Firework fw = fireworks.get(index);
    fw.update();
    fw.display();

    if (fw.last()) {
      fireworks. remove(index);
    }
  }
  //어래이리스트 텍스트 출력.
  fill(255);
  textSize(32);
  text("Firework: " + fireworks.size(), 10, 40);//텍스트 출력 
  
  
}
//마우스 클릭하면 불꽃 생기게 하는부분
//이 코드가 클래스보다 밖에 있어야했다. 그래서 적용이 안되는겅였나봄 
int pressTime;
int releaseTime;
float maxRad = height * 0.02;
void mouseReleased() {//눌리는 순간 말고 마우스에서 클릭을 해제할때 작동해야 하므로 preesed말고 released사용함 
  
  fireworks.add(new Firework(mouseX, mouseY));
  releaseTime = millis();
  int duration = releaseTime - pressTime;
  //눌리는 시간에 따라 크기 달라지게 해야함.
  maxRad = map(duration, 0, 1000, height * 0.04, height * 0.27);//불꽃이 터지는 최소크기와 최대크기를 정한다.
  maxRad = constrain(maxRad, height * 0.04, height * 0.27);// 범위 제한
}
void mousePressed() {
  //이 코드는 ai(ChatGPT)의 도움을 받아 작성함.(질문: 마우스를 클릭한 시점으로부터 클릭해제할 때 까지의 시간을 계산할 방법을 알려줘./의도: 마우스를 클릭하고있는 시간을 계산할 방법을 모르겠어서 어떤 함수를 사용해야하는지 알기위해 질문)
  pressTime = millis();//마우스 누르고있는 시간 기록
}



//class Firework {
//  //여기 안쪽은 클래스 텝 만들어서 해야지. 여기에 이거 왜써둔거야 바본가.

//}

//void update() {}
//void display() {}

//boolean last() {}
