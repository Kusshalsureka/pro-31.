const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground1;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
function setup() {
  createCanvas(500, 800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width / 2, 670, width, 20);
  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j < width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }
  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k + 10, height - divisionHeight + 30 , 10, divisionHeight));
}
}
function draw() {
  background(205,205,205);
  Engine.update(engine)
  ground1.display();
  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(100, 400) , 10, 8))
  }
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for (var p = 0; p < plinkos.length; p++) {
    plinkos[p].display();
  }
  drawSprites();
}