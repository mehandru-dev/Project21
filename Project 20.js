var car ,car1,car2,car3 ,wall;
var r,r1,r3;
function setup() {
  createCanvas(650,400);

  car=createSprite(100,20,55,30);
  car.velocityX=random(1,15);

  car1=createSprite(100,120,55,30);
  car1.velocityX=random(1,15);

  car2=createSprite(100,220,55,30);
  car2.velocityX=random(1,15);

  car3=createSprite(100,320,55,30);
  car3.velocityX=random(1,15);

  wall=createSprite(600,200,70,400);
  wall.shapeColor=color("brown");

 r=createSprite(500,190,80,10);
 r.shapeColor=color("white");

 r1=createSprite(300,190,80,10);
 r1.shapeColor=color("white");

 r2=createSprite(100,190,80,10);
 r2.shapeColor=color("white");
}

function draw() {

  background("black");

// CAR_1

if(car.isTouching(wall)){

  car.velocityX=0;

  var deformation = 0.5 * car.velocityX * car.velocityX *100 / 20;

  if(deformation<10){
    car.shapeColor=color("green");
    }
    
    if(deformation>10 && deformation<18){
    car.shapeColor=color("yellow");
    }
    
    if(deformation>18){
    car.shapeColor=color("red");
    }
}

//CAR_2

if(car1.isTouching(wall)){

  car1.velocityX=0;

  var deformation1= 0.5 * car1.velocityX * car1.velocityX *100 / 20;

  if(deformation1<10){
    car1.shapeColor=color("green");
    }
    
    if(deformation1>10 && deformation1<18){
    car1.shapeColor=color("yellow");
    }
    
    if(deformation1>18){
    car1.shapeColor=color("red");
    }
}

//CAR_3

if(car3.isTouching(wall)){

  car3.velocityX=0;

  var deformation3 = 0.5 * car3.velocityX * car3.velocityX *100 / 20;

  if(deformation3<10){
    car3.shapeColor=color("green");
    }
    
    if(deformation3>10 && deformation3<18){
    car3.shapeColor=color("yellow");
    }
    
    if(deformation3>18){
    car3.shapeColor=color("red");
    }
  }

  // CAR_4

if(car2.isTouching(wall)){

  car2.velocityX=0;

  var deformation2 = 0.5 * car2.velocityX * car2.velocityX *100 / 20;

  if(deformation2<10){
    car2.shapeColor=color("green");
    }
    
    if(deformation2>10 && deformation2<18){
    car2.shapeColor=color("yellow");
    }
    
    if(deformation2>18){
    car2.shapeColor=color("red");
    }
}


  drawSprites();
}