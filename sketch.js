const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1,bg;

function preload(){

    bg=loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350)
    log1=new Log(810,259,300,PI/2)
   box3=new Box(700,240,70,70)
   box4=new Box(920,240,70,70)
   pig2=new Pig(810,220);
   log2=new Log(810,180,300, PI/2);
   log3=new Log(750,120,150,PI/7);
   log4=new Log(870,120,150,-PI/7);
   bird1=new Bird (100,100);
   box5 = new Box(810,160,70,70);
   platform=new Ground(150,305,300,170)
   slingshot1=new Slingshot(bird1.body,{x:200,y:100})
}

function draw(){
    background(bg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display()
    box3.display()
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
    box5.display();
    slingshot1.display();
}