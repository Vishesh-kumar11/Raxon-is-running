var path ,pathing
var runner ,runner_running

function preload(){
  pathImage=loadImage ("path.png");
  runnerImage1=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
path=createSprite(200,200);
path.addImage(pathImage);
path.velocityY=4;  
path.scale=1.2;

runner=createSprite(150,300,30,30);
runner.addAnimation("running",runnerImage1);
runner.scale=0.20
}

function draw() {
  background("black");

if(path.y >400){
  path.y=height/2;
}
drawSprites()


}







