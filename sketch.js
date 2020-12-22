const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine,world;
var mConstraint;
var pendulum1;

function setup() {
    canvas = createCanvas(windowWidth/2, windowHeight/1.5);

    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse:canvasmouse
    }
    mConstraint = MouseConstraint.create(options);
    World.add(world, mConstraint);

    pendulum1 = new Pendulum(width/2.90,height/2,"silver");
    pendulum2 = new Pendulum(width/2.37,height/2,"silver");
    pendulum3 = new Pendulum(width/2,height/2,"silver");
    pendulum4 = new Pendulum(width/1.73,height/2,"silver");
    pendulum5 = new Pendulum(width/1.53,height/2,"silver");

    sling1 = new Sling(pendulum1.body,{x:width/2.90, y:height/5})
    sling2 = new Sling(pendulum2.body,{x:width/2.37, y:height/5})
    sling3 = new Sling(pendulum3.body,{x:width/2, y:height/5})
    sling4 = new Sling(pendulum4.body,{x:width/1.73, y:height/5})
    sling5 = new Sling(pendulum5.body,{x:width/1.53, y:height/5})

}
function draw() {
   background("brown");
   Engine.update(engine);

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
}

function mouseDragged() {
    Matter.Body.setPosition(pendulum1.body, {x:mouseX, y:mouseY});
}  