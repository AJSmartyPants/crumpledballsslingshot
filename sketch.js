
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world, paper1, ground, dustbin1, dustbin2, dustbin3, dustbincan, launch; 
function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(100,600, 10);
    ground = new Ground(400,680,800,20);
    dustbin1 = new Dustbin(610,660, 100, 20);
    dustbin2 = new Dustbin(550,620,20,100);
    dustbin3 = new Dustbin(670,620,20,100)
    dustbincan = new Trashcan();
    launch = new Launcher(paper1, {x: 200, y: 100});
    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background("pink");
  
  Engine.update(engine);
    

  paper1.display();

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  dustbincan.display();
  launch.display();

  
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 4,y: -15})
    }
  }


  function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});
}
function mouseReleased(){
    launch.fly();
}
