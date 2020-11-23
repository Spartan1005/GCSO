var car,wall;
var speed,weight;
var deformation;


function setup(){
  createCanvas(1600,400)
  speed=random(55,90);
  weight=random(400,1500)
  deformation=0.5*weight*speed*speed/22500;
  car = createSprite(50,200,100,50)
  car.shapeColor="white";
  wall=createSprite(1500,200,60,height/2)
}



function draw() {
  background("black")
  car.velocityX=speed;
  
if (car.isTouching(wall)){
  car.velocityX=0;
}

if (deformation>180){
  car.shapeColor="red"
}

if (deformation<180&&deformation>80){
  car.shapeColor="yellow"
}


if (deformation<80){
  car.shapeColor="green"
}

  drawSprites();
}