var sea,seaImg
var ship,shipImg



function preload(){
seaImg=loadImage("sea.png")
shipImg=loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png",)
}

function setup(){
  createCanvas(1350,600);
  sea=createSprite(200,200,-40,40);
  sea.addImage(seaImg);
  ship=createSprite(110,350,40,40);
  ship.addImage(shipImg);

  ship.scale = 0.4;
}

function draw() {
  background("blue");
 








 

  if (keyDown("space")&& ship.x>= 100) {
    ship.velocityX = 1
  
  }
  
  if (sea.x < 0 ){
    sea.x = sea.width/2;
    
    }

    drawSprites();
  }
  
  

 

  



  







