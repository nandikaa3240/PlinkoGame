const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ground;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(10,780,480,20);
  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  rectMode(CENTER);
  
  Engine.update(engine);
  ground.display();

}