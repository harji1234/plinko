const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world
var ground;
var plinko=[]
var particle=[]
var division=[]
function setup() {
  createCanvas(500,800);
  engine=Engine.create()
  world=engine.world
  ground=new Ground(width/2,height,width,20)
  for (var i=7;i<=width;i=i+70) {
    division.push(new Division(i,700,10,300)) 
  }
  for (var i=30;i<=width;i=i+70) {
  plinko.push(new Plinko(i,200))
  }
  for (var i=10;i<=width;i=i+70) {
    plinko.push(new Plinko(i,300))
    }
  for (var i=30;i<=width;i=i+70) {
      plinko.push(new Plinko(i,400))
      }
  for (var i=10;i<=width;i=i+70) {
        plinko.push(new Plinko(i,500))
        }
  
}

function draw() {
  background(0);
  Engine.update(engine) 
  for (i=0;i<division.length;i++) {
    division[i].display();
  }
  ground.display();
  for (i=0;i<plinko.length;i++) {
    plinko[i].display();
}
if(frameCount%10===0) {
  particle.push(new Particle(random(50,400),10))
}
for (i=0;i<particle.length;i++) {
  particle[i].display();
}

}
