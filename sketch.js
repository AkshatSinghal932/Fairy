const Engine=Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backGround, fairy,fairyImg,star,starImg,engine,world,music;



function preload()
{

  fairyImg=loadAnimation("fairy1.png","fairy2.png");
  starImg=loadImage("star.png")
  backGround=loadImage("starnight.png");
  music=loadSound("JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 750);
  music.loop();
  engine=Engine.create();
  world=engine.world;

  fairy=createSprite(125,575);
  fairy.addAnimation("label",fairyImg);
  fairy.scale=0.25;
  starBody=createSprite(750,50);
  starBody.addImage(starImg);
  starBody.scale=0.25;

  Engine.run(engine);
}


function draw() {
  background(backGround);

  drawSprites();
  if(keyDown("space")){
    starBody.velocityY=7
    starBody.velocityY=starBody.velocityY+1
  }
  if(starBody.y>535){
    starBody.velocityY=0;
  }
  if(keyDown("right_arrow")){
    fairy.x=fairy.x+5;
  }
  if(keyDown("left_arrow")){
    fairy.x=fairy.x-5;
  }
    text(mouseX+","+mouseY,200,200);
}
