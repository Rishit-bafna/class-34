const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var ball1,ground1;
function setup(){

engine = Engine.create();
world = engine.world;

createCanvas(1000,800);

ball1 = new ball(50,200,30,30);
rope1 = new rope(ball1.body,{x:100,y:300});
ground1 = new ground(400,600,800,10);
block1 = new box(470,550,50,50);
block2 = new box(520,550,50,50);
block3 = new box(570,550,50,50);
block4 = new box(620,550,50,50);
block5 = new box(570,500,50,50);
block6 = new box(520,500,50,50);
block7 = new box(545,450,50,50);



}
function draw(){

background("pink");

Engine.update(engine);

rope1.display();
ball1.display();
ground1.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();



}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    rope1.fly();
}
function keyPressed(){
    if(keyCode === 32){
        rope1.attach();
        Matter.Body.setPosition(ball1.body,{x:100,y:100})

    }
}