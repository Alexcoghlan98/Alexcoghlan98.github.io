//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//06_Exercise02 - Geometric Universe

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("myContainer");
  var text = createDiv('This is a HTML string!');
  canvas.class("myCanvas");
  canvas.parent("myContainer");
  text.position(50,50);
  strokeWeight(8);
  noFill();
  frameRate(15);

  //noLoop();
}

function draw() {
  background(50);
  //Create 100 rings using the for-loop
  for (var i = 0; i < 300; i++) {
    push(); //store the matrix before translate
    //Random position between the size of the canvas
    translate(random(width), random(height));
    //Random rotation
    rotate(random(2*PI));
    //Random scale
    scale(random(1.5), random(1.5));
    //Random stroke color
    stroke(random(255), random(255), random(255));
    ellipse(0, 0, 40, 40);
    pop(); //reset the matrix to original state
  }
}
