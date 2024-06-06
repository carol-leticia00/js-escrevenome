function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
  
    stroke("green");
    fill("purple");
  
    //console.log(mouseIsPressed) - console.log diz respeito a verificação da veracidade do código (true/false)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }