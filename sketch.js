let timegoesby = 400;
let soslowly =105;
let timegoesbysoslowly = 450;
let madonna = 400;
let angle = 0;
let radius;


function setup() {
  createCanvas(600, 600);
  timegoesbysoslowly = random (1-500);
  timegoesby = random (200);
  madonna = random (200-400);
  radius = min(width, height)/2-20;
  
}

function draw() {
  background(2,44,10);
  strokeWeight (10);
  fill (2,44,70);
  stroke (20,40,220);
  circle (timegoesby,timegoesbysoslowly,300);
  fill (120,120,190)
  stroke (200,300,400);
  circle (soslowly,timegoesby,250);
  fill (20,40,220);
  stroke (20,44,99);
  circle (timegoesbysoslowly,timegoesby,350);
  fill (20,230,164);
  stroke (230,44,99);
  circle (timegoesbysoslowly,400,300);
  fill (100,100,200)
  circle (timegoesby, soslowly,22);
  fill (230,44,99);
  fill (230,44,99)
  stroke (20,44,99);
  circle (timegoesby,madonna,66);
  circle (soslowly, timegoesbysoslowly, 600);
  fill (20,44,99);
  stroke (100,100,200);
  circle (soslowly,timegoesby,20);
  circle (timegoesby,soslowly,300);
  fill (20,240,220);
  stroke (100,30,44);
  circle (timegoesby,timegoesbysoslowly,209);
  circle (timegoesbysoslowly,timegoesby,100);
  drawRandomLines(400);
  let x = width / 2 + cos(angle) * radius;
  let y = height / 2 + sin(angle) * radius;
  fill(210,130,30);
  ellipse(x,y,30,30);
  angle += 0.01;


  function drawRandomLines(numLines){
    for (let i = 0; i < numLines; i++){
      let x1 = random(width);
      let y1 = random(height);
      let x2 = random(width);
      let y2 = random(height);
      let strokeColor = color(random(255), random(255), random(255));
      strokeWeight(1);
      stroke(strokeColor);
      line(x1, y1, x2, y2);

    
    }
  }
  
  timegoesby = (timegoesby + 2) % width;
  soslowly = (soslowly + 3) % height;
  timegoesbysoslowly = (timegoesbysoslowly + 4) % width;
  madonna = (madonna + 5) % height;

}
