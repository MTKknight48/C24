const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1550,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,680,50,80);
    box2 = new Box(1300,680,50,80);
    box3 = new Box(1000,500,50,80);
    box4 = new Box(1300,500,50,80);
    box5 = new Box(1150,370,50,80);
    ground = new Ground(775,height,1550,20)
    pig1 = new Pig(1150,680);
    pig2 = new Pig(1150,500);
    log1 = new Log(1150,560,350,PI/2);
    log2 = new Log(1150,400,350,PI/2);
    log3 = new Log(1100,370,175,PI/7);
    log4 = new Log(1250, 370,175,-PI/7);
    bird1 = new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}