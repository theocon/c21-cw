const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var pushBtn, rightBtn, upBtn;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ballOption = {
    restitution:1
  }
  ball = Bodies.circle(200,30,20,ballOption);
  World.add(world,ball);

  pushBtn = createImg("push.png");
  pushBtn.position(50,50);
  pushBtn.size(70,70);
  pushBtn.mouseClicked(pForce);

  rightBtn = createImg("right.png");
  rightBtn.position(160,50)
  rightBtn.size(70,70)
  rightBtn.mouseClicked(rightForce);

  upBtn = createImg("up.png");
  upBtn.position(250,50)
  upBtn.size(70,70)
  upBtn.mouseClicked(upForce);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);

  ground.show();
  top_wall.show();
  left.show();
  right.show();

  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y,20,20);
}

function pForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x: -0.01, y:-0.01});
}

function rightForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x: 0.05, y:0} );
}

function upForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});
}