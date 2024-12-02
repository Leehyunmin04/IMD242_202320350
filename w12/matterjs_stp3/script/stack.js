const Engine = Matter.Engine,
  // Render = Matter.Render,
  // Runner = Matter.Runner,
  Composites = Matter.Composites,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Composite = Matter.Composite,
  Bodies = Matter.Bodies;

// create engine
const engine = Engine.create(),
  world = engine.world;

// create renderer

// add bodies
var stack = Composites.stack(
  200,
  606 - 25.25 - 5 * 40,
  10,
  5,
  0,
  0,
  function (x, y) {
    return Bodies.rectangle(x, y, 40, 40);
  }
);

Composite.add(world, stack);

let walls = [
  Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
  Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
  Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
  Bodies.rectangle(400, 606, 800, 50.5, { isStatic: true }),
];

Composite.add(world, walls);

// add mouse control
// var mouse = Mouse.create(render.canvas),
//   mouseConstraint = MouseConstraint.create(engine, {
//     mouse: mouse,
//     constraint: {
//       stiffness: 0.2,
//       render: {
//         visible: false,
//       },
//     },
//   });

// Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
// render.mouse = mouse;

// // fit the render viewport to the scene
// Render.lookAt(render, {
//   min: { x: 0, y: 0 },
//   max: { x: 800, y: 600 },
// });

function setup() {
  createCanvers(800, 600);
  // console.log(walls);
  background(255);
  console.log(stack);
}

function draw() {
  background(255);
  stack.bodies.forEach((aBody) => {
    beginShape();
    aBody.verticies.forEach((aVertex) => {
      vertex(aVertex.x, aVertex.y);
    });
    endShape(CLOSE);
  });
  walls.forEach((eachWall) => {
    beginShape();
    eachWall.verticies.forEach((eachVertex) => {
      vertex(eachVertex.x, eachVertex.y);
    });
    endShape(CLOSE);
  });
}
