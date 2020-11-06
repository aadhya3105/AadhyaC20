var movingRect , fixedRect;



function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,200,50,80)
  movingRect = createSprite(400,600,60,30)


}

function draw() {
  background("pink"); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x - movingRect.x <movingRect.width/2+fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.width/2+fixedRect.width/2
    && fixedRect.y - movingRect.y <movingRect.width/2+fixedRect.width/2){
      movingRect.shapeColor ="orange"
      fixedRect.shapeColor = "orange"

    }
else{
  movingRect.shapeColor = "blue"
  fixedRect.shapeColor = "blue"
}

  
  drawSprites();
}