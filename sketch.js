let particles = [];
const num = 8000;

const noiseScale = 0.01/1;

function setup() {
  createCanvas(windowWidth,windowHeight);
  for(let i = 0; i < num; i ++) {
    particles.push(createVector(34, 9000))
  }
  
  stroke(random(0,500),random(0,500),random(0,500), random(70,90));
  clear();
}

function draw() {
  background(40, 6);
  for(let i = 0; i < num; i ++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p) && frameCount < 1000) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}