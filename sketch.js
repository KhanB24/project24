
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var garbage
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Ball(60,300, 10)
	World.add(world,paper)


	garbageDown = new Garbage(650, 460, 20, 100)
	garbageLeft = new Garbage(480, 460, 20, 100)
	garbageRight = new Garbage(650, 460, 20, 100)
	//Create the Bodies Here.

	ground = new Floor(400, 520, 800, 20)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed()
  paper.display()
  garbageDown.display()
  garbageLeft.display()
  garbageRight.display()
  

  drawSprites();
 
}




function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


