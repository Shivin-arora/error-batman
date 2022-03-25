const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var world,engine;
var ball;
var drop1;
var boyUmbrella;
var ground,groundimg;
var maxDrops=100;
var drops=[];
var t1,t2,t3,t4;
var thunderCreatedFrame = 0;
var thunder;


function preload(){
t1=loadImage("images/thunderbolt/1.png");
t2=loadImage("images/thunderbolt/2.png");
t3=loadImage("images/thunderbolt/3.png");
t4=loadImage("images/thunderbolt/4.png");
  }

function setup(){
   createCanvas(900,600);
   engine=Engine.create();
   world=engine.world;
 
  boyUmbrella = new Umbrella(450,460);
   if(frameCount%150 === 0){
    for(var i = 0;i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400),10));  
    }
                                                                                                                                                            

   
   }
    
   
}

function draw(){
  background("black");  
  Engine.update(engine);
 var rand = Math.round(random(1,4));
 if(frameCount%80 === 0){
   thunderCreatedFrame = frameCount;
   thunder=createSprite(random(10,370),random(30,40),10,10);
   switch(rand){
     case 1 : thunder.addImage(t1);
     break;

     case 2 : thunder.addImage(t2);
     break;

     case 3 : thunder.addImage(t3);
     break;
     case 4 : thunder.addImage(t4);

     break;
     default:break;
   }
   thunder.scale = random(0.3,0.6);
 }
 if(thunderCreatedFrame+10 === frameCount && thunder){
   thunder.destroy();
 }
 
  //drops[0,1,2,3,4,5,6].display();
  //drops[0,1,2,3,4,5,6].update();
   boyUmbrella.display();
   for(var i = 0; i<maxDrops; i++){
     drops[i].showDrop();
     drops[i].updateY();
   }
   
  drawSprites();
}   

