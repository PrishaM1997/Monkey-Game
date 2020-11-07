var jimin, jimin_running
var jungkook, jungkookImage, V, VImage
var jinGroup, sugaGroup
var RM = 0;
var SurvivalTime = 0;

function preload() {


  jimin_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  jungkookImage = loadImage("banana.png");
  VImage = loadImage("obstacle.png");

}

function setup() {

  jimin = createSprite(80, 315, 20, 20);
  jimin.addAnimation("moving", jimin_running);
  jimin.scale = 0.1;

  Jhope = createSprite(400, 350, 900, 10);
  Jhope.velocityX = -4;
  Jhope.x = Jhope.width / 2;
  console.log(Jhope.x);

  jinGroup = new Group();
  sugaGroup = new Group();
}


function draw() {
  createCanvas(400, 400)
  background("lightgreen");

  stroke("white");
  textSize(20);
  fill("purple");
  text("Score :" + RM, 300, 50);

  stroke("white");
  textSize(20);
  fill("red");
  SurvivalTime = Math.ceil(frameCount / 20)
  text("Survival Time :" + SurvivalTime, 25, 50);


  if (Jhope.x < 0) {
    Jhope.x = Jhope.width / 2;
  }

  if (keyDown("space")) {
    jimin.velocityY = -12;
  }

  if (jinGroup.isTouching(jimin)) {
    RM = RM + 2;
    jinGroup.destroyEach();
  }

  if (jinGroup.isTouching(jimin)) {
    sugaGroup.setVelocityEach(0, 0);
    jinGroup.setVelocityEach(0, 0);
  }


  jimin.velocityY = jimin.velocityY + 0.8;
  jimin.collide(Jhope);
  
if(sugaGroup.isTouching(jimin)){
    sugaGroup.setVelocityEach(0,0);
   jinGroup.setVelocityEach(0,0);
  }

  jin();
  suga();

  drawSprites();
}

function jin() {
  if (frameCount % 50 === 0) {
    var jungkook = createSprite(200, 200, 10, 10);
    jungkook.y = Math.round(random(100, 200));
    jungkook.addImage(jungkookImage);
    jungkook.scale = 0.1;
    jungkook.velocityX = -3;
    jungkook.lifetime = 200;
    jungkook.depth = jimin.depth;
    jimin.depth = jimin.depth + 1;
    jinGroup.add(jungkook);
  }
}

function suga() {
  if (frameCount % 300 === 0) {
    var V = createSprite(400, 327, 20, 20);
    V.addImage(VImage);
    V.scale = 0.1;
    V.velocityX = -3;
    V.lifetime = 200;
    V.depth = jimin.depth;
    jimin.depth = jimin.depth + 1;
    sugaGroup.add(V);
  }
}