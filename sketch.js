var car ,car1,car2,car3 ,wall;
var thickness,bulletweight;
function setup() {
  createCanvas(1600,400);
thickness=random(50,100);
bulletweight=random(1,10)
  car=createSprite(100,20,20,10);
  car.velocityX=random(8,20);

  car1=createSprite(100,120,20,10);
  car1.velocityX=random(8,20);

  car2=createSprite(100,220,20,10);
  car2.velocityX=random(8,20);

  car3=createSprite(100,320,20,10);
  car3.velocityX=random(8,20);

  wall=createSprite(1200,200,thickness,400);
  wall.shapeColor=color("brown");


}

function draw() {

  background("black");

// CAR_1

if(car.isTouching(wall)){

  car.velocityX=0;

  var damage=0.5*bulletweight*car.velocityX*car.velocityX/thickness/thickness/thickness/10;

  if(damage<10){
    car.shapeColor=color("green");
    }
  
    if(damage>10){
    car.shapeColor=color("red");
    }
}

//CAR_2

if(car1.isTouching(wall)){

  car1.velocityX=0;

  var damage1=0.5*bulletweight*car1.velocityX*car1.velocityX/thickness/thickness/thickness/10;

  if(damage1<10){
    car1.shapeColor=color("green");
    }
    
    if(damage1>10){
    car1.shapeColor=color("red");
    }
}

//CAR_3

if(car3.isTouching(wall)){

  car3.velocityX=0;

  var damage2=0.5*bulletweight*car2.velocityX*car2.velocityX/thickness/thickness/thickness/10;

  if(damage2<10){
    car3.shapeColor=color("green");
    }
    
    
    
    if(damage2>10){
    car3.shapeColor=color("red");
    }
  }

  // CAR_4

if(car2.isTouching(wall)){

  car2.velocityX=0;

  var damage3=0.5*bulletweight*car3.velocityX*car3.velocityX/thickness/thickness/thickness/10;

  if(damage<10){
    car2.shapeColor=color("green");
    }
    
    
    if(damage3>10){
    car2.shapeColor=color("red");
    }
}


  drawSprites();
}