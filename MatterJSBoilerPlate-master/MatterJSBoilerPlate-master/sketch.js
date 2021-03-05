
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	paperBall = new paper(100,100,10);
	ground = new Bin(600,600,1200,10);
	bin1 = new Bin(840,525,20,140);
	bin2 = new Bin(960,525,20,140);
	bin3 = new Bin(900,585,100,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
 
  paperBall.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:15,y:-15})
	}
}



