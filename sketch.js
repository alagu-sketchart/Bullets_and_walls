var wall, bullet;
var wall2, bullet2;
var thickness, thickness2, speed, weight, power;

function setup(){
createCanvas(1600,1600);

wall = createSprite(200, 150, thickness, 250);
wall2 = createSprite(200, 550, thickness2, 250);

bullet = createSprite(1500, 150, 40, 10);
bullet2 = createSprite(1500, 550, 40, 10);

thickness = random(22,83);
thickness2 = random(15,40);

speed = random(223,321);
weight = random(30,52);
power = speed + weight;
}

function draw(){
background(155,255,155);  

    if(bullet.x-wall.x<wall.width/2+bullet.width/2){
  bullet.shapeColor="white";
  wall.shapeColor="green";
  bullet.velocityX = 0;
}
else{bullet.shapeColor="white";
wall.shapeColor="gray";
bullet.velocityX = -7;
}

if(bullet2.x-wall2.x<wall2.width/2+bullet2.width/2){
    bullet2.shapeColor="white";
    wall2.shapeColor="red";
    bullet2.velocityX = 0;
  }
  else{bullet2.shapeColor="white";
  wall2.shapeColor="gray";
  bullet2.velocityX = -10;
  }

drawSprites();
}