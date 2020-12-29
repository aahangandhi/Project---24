const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,crumpledPaper;
var bin;
var lady, ladyImg

function preload(){
    ladyImg = loadImage("ladypickingupgarbage.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    crumpledPaper = new Paper();

   
    lady = createSprite(150,350,50,50);
    lady.addImage(ladyImg)
    lady.scale = 1;


    binPart1 = new Dustbin(834,505,10,120);
    binPart2 = new Dustbin(929,565,200,10);
    binPart3 = new Dustbin(1024,505,10,120);
}

function draw(){
    background(0);
    Engine.update(engine);

    //keyPressed();
    
    stroke("green");
    text("Help this lady throw the paper ball in the Dustbin by clicking the Up Arrow",400,20);

    ground.display();
    crumpledPaper.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:75,y:-75});
    }
}