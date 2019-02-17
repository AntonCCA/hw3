# hw3
What code draws the blades of grass?
 stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

What code makes the "lawnmower" come by? How often does it come by?
     if (random() > 0.999) {
     fill(255);
     rect(0, 0, width, height-15);
     h = 10;
randomly between (0-0.999) 

What's the point of the h variable?
To add a value to how fast the grass will grow by frames

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
So that the grass grows under the dirt 

What's the point of an object?
To organize your code, group variables together

What's an example of a range you might use for the map function?
changing the color of the background while moving mouse in the x-axis
var col = 0;
EX:
function setup(){
  createCanvas(400,400);
}

function draw(){
  col = map(mouseX,0,400,0,255);
  background(col);
  
  // ellipse
  fill(0,180,180,100);
  ellipse(mouseX,50,50,50,50);
  
  
}

What line of code would give me a random year in the last century?
print random between range 1919-2019 in the function setup 


