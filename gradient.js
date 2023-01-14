// VARIABLES
var ctx = document.getElementById('copyCanvas').getContext('2d');
var canvasW, canvasH;
var rOfsset = 0;
var gOfsset = 0;
var bOfsset = 0;
var speedR = 1;
var speedG = 1;
var speedB = 1;
var scroll = 0;
var speedMaster = 1;
freqBlue = 1;

// SETUP
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('#sketch');
  canvas.id('originalCanvas');
  canvasH = (windowHeight);
  canvasW = (windowWidth);
  document.getElementById('copyCanvas').width = canvasW ;
  document.getElementById('copyCanvas').height = canvasH;
}

// WINDOW RESIZE
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvasH = (windowHeight);
  canvasW = (windowWidth);
  document.getElementById('copyCanvas').width = canvasW ;
  document.getElementById('copyCanvas').height = canvasH;
  }

// INFINITE SCROLLING
window.addEventListener("scroll", (event) => {
  scroll = this.scrollY;
  var end = $(document).height()-window.innerHeight;
  if (scroll == end) {
    console.log("end");
    $("body").append("<div class='container'><p class='scroll'>end</p></div>");}
});



// DRAW
function draw() {

  rOfsset += (2*speedMaster*speedR);
  gOfsset += (3*speedMaster*speedG);
  bOfsset += (3*speedMaster*speedB);

  for(let y=0; y<height; y++){
    r = (gradient(y, 0, 0.3, rOfsset+(scroll*0.5)*0.5)+127.5);
    g = gradient(y, 0.33, 0.4, gOfsset+(scroll*0.1))*1.;
    b = ((gradient(y, 0.66, freqBlue, bOfsset+scroll)*0.5)+127.5);
    stroke(r, g, b);
    line(0,y,width, y);
  }
          // COPY OUTPUT TO SECOND CANVS 
    ctx.drawImage(document.getElementById('originalCanvas'), 0, 0);
}


function gradient(y, initOffset, freq, offset){
  var xxx = cos((y+initOffset+offset)/height*TWO_PI*freq)
  var output = map(xxx, -1, 1, 0, 255)
  return output;
}










  


