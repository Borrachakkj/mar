var barco;
var barcoImg;
var mar;
var marImg;


function preload(){
  barcoImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  marImg = loadImage("sea.png");
}

function setup(){
  createCanvas(800,600);
  mar = createSprite(200,150);
  mar.addImage("mar",marImg);
  barco = createSprite(150,200,50,50);
  barco.addAnimation("barco",barcoImg);
  barco.scale=0.4;
  
}

function draw() {
  background("blue");
  drawSprites();
  mar.velocityX=-3;
  
  if(mar.x<0){
    mar.x = mar.width/2;
  }

 
}
