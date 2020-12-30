const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;

var engine, world;
var ball,box,ground

function setup() {
  createCanvas(1500,800);

  engine = Engine.create(); 
  world = engine.world;
  
  box=Bodies.rectangle(500,400,150,100)
  World.add(world,box)
  var order={
    isStatic:true
  }
  ground=Bodies.rectangle(200,750,300,20,order)
  World.add(world,ground)
  
 
  
}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  rectMode(CENTER)
  
  
  rect(box.position.x,box.position.y,150,100)
  fill("red")
  rect(ground.position.x,ground.position.y,300,20)
 
}