function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(110, 80), height-10-random(h));
  noStroke();

  x = x + 20;

     if (x > width) {
     x = random(10);
     h = h + 10;
  }

      if (h > 300) {
      fill(255);
      rect(0, 0, width, height-20);
     h = 10;
  }

  fill(40, 100, 150);
  rect(0, height-10, width, 10);
  
}
