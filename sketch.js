
var gameState = "level1";

var man, man_running;
var ground, invisibleGround, groundImage;
var edu,unemp, poll, pand, gw;
var eduGroup, pollGroup,pandGroup, unempGroup, gwGroup;

var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
//poll,unemp,edu, 
var score=0;

var gameOver, restart, bg;



function preload(){
  //man_running =   loadAnimation("");
  backgroundImg=loadImage('background12.jpg');
 //pollImg = loadImage("pollution.gif");
 umempImg=loadImage('unemployment.jpg');
 //eduImg=loadImage('no edu.gif');
gwImg=loadImage('gw.jpg');
pandImg=loadImage('pandemic.png');

}
//TO DO=>5 functions create , add framecount ==create sprite and add 1 image each; when istouching==> destroy , score+1, lifetime, velocity, 
function setup() {
  createCanvas(windowWidth, windowHeight);
  
 man= createSprite(700,1000,20,50);
  
 //man.addAnimation("running", man_running);
bg= createSprite(150,300);
  bg.addImage(backgroundImg);
  bg.scale=0.5;
  
  
  /*ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -(6 + 3*score/100);
  
 // edu = createSprite(150,100);
 edu.addImage(eduImg);
  
  //pov = createSprite(150,140);
 pov.addImage(povImg);
// poll = createSprite(150,140);
poll.addImage(pollImg);
// gw = createSprite(150,140);
gw.addImage(gwImg);
//pand = createSprite(150,140);
 pand.addImage(pandImg);*/
  
  
  eduGroup = new Group();
  unempGroup = new Group();
 pollGroup = new Group();
  pandGroup = new Group();
  gwGroup = new Group();
  problemGroup = new Group();

}

function draw() {
  
  background(255);
  text("Score: "+ score, 500,50);
  
  if (gameState!=="end"){
    bg.velocityY=1;
    
    if(bg>600){
      bg.y=300;
    }  
    
    if(keyDown("RIGHT_ARROW")){
      man.x=man.x+5;
    }
    if(keyDown("LEFT_ARROW")){
      man.x=man.x-5;
    }
    if(keyDown("UP_ARROW")){
      man.y=man.y-5;
    }
    if(keyDown("DOWN_ARROW")){
      man.y=man.y+5;
    }

    obstacles();
   
  drawSprites();
}
if(gameState ==="end"){}
}

function obstacles(){
  if(frameCount%100 === 0){
    var problem = createSprite(150,100);
    problem.lifetime = 600;
    switch(gameState){
      case "level1": //problem.addImage(eduImg);
                    problem.velocityY = 2;
                    
                    break;
      case "level2":// problem.addImage(povImg);
                    problem.velocityY = 4;
                    break;   
      case "level3":// problem.addImage(pollImg);
                    problem.velocityY = 6;
                    break;          
      case "level4": //problem.addImage(gwImg);
                    problem.velocityY = 7;
                    break; 
      case "level5": //problem.addImage(pandImg);
                    problem.velocityY = 8;
                    break;
                  
    }
    problemGroup.add(problem);
  }
}

/*function Collection(){
  if(frameCount%100 === 0){
    var coll = createSprite(150,100);
  coll.lifetime = 600;
    switch(gameState){
      case "level1": problem.addImage(eduImg);
                    problem.velocityY = 2;
                    
                    break;
      case "level2": problem.addImage(povImg);
                    problem.velocityY = 4;
                    break;   
      case "level3": problem.addImage(pollImg);
                    problem.velocityY = 6;
                    break;          
      case "level4": problem.addImage(gwImg);
                    problem.velocityY = 7;
                    break; 
      case "level5": problem.addImage(pandImg);
                    problem.velocityY = 8;
                    break;
                  
    }
    problemGroup.add(problem);
  }
}*/

