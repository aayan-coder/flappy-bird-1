
var bird, obs,gameover,start,restart,play;
var birdimg,obsimg,gameoverimg,startimg,restartimg,playimg,coinimg;
var gameState="start"
var groundimg,ground;
var pipe1,pipe2,pipe3,pipe4,pipe5,pipe6,pipe7;
var bg="background.jpg"

function preload(){
birdimg= loadImage("bird.png")
gameoverimg=loadImage("gameover.png")
startimg=loadImage("start.png")
playimg=loadImage("play.png")
coinimg=loadImage("coin.png")
groundimg= loadImage("background.jpg")
grassimg=loadImage("grass.jpg")
}

function setup(){
createCanvas(1200,500)

/*grass= createSprite(400,450,1200,10);
grass.addImage(grassimg)
grass.visible= false
grass.velocityX=-2
grass.scale=1.5*/


ground= createSprite(400,250,800,10);
ground.addImage(groundimg)
ground.visible=false
ground.scale=1.5
ground.velocityX=-2

ground.x=ground.width/2

bird=createSprite(600,230,20,20)
bird.addImage(birdimg)
bird.scale=0.6;

gameover= createSprite(600,250)
gameover.addImage(gameoverimg)
gameover.scale=0.5
gameover.visible=false

start= createSprite(600,120)
start.addImage(startimg)


play= createSprite(600,350)
play.addImage(playimg)
play.scale=0.5

coin=createSprite(400,250)
coin.addImage(coinimg)
coin.scale=0.5
coin.visible=false

/*pipe1=createSprite(170,215,100,20)
pipe1.velocityX=-1*/

}



function draw(){

background("cyan")

if (gameState==="start"){
textSize(50);
stroke(10);
fill("red")
    text("PRESS PLAY BUTTON TO START !!",250,470)

    if(mousePressedOver(play)&& gameState==="start"){
        gameState="play"
        play.visible=false;
    start.visible=false;
   
  
    }
    }
    
    if (gameState ==="play"){
  bird.x=mouseX;
  bird.y=mouseY;
  background("cyan")
  //grass.visible= true;
ground.visible=true
  if (ground.x<0){
      ground.x=ground.width/2
  }
    }


drawSprites()

}