
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObject;
var paperObject;
var dustbinObject;


function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObject = new Ground(750,670,1500,20);

	paperObject = new Paper(200,500,40);

	dustbinObject = new Dustbin(1200,650);

	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  groundObject.display();
  paperObject.display();
  dustbinObject.display();
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x : 87, y : -87});
	}
}



