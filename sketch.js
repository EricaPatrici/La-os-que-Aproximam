let bolhas = [];

function setup() {
  let canvas = createCanvas(600, 300);
  canvas.parent("animacao-canvas");
  for (let i = 0; i < 30; i++) {
    bolhas.push(new Bolha());
  }
}

function draw() {
  background(240);
  for (let b of bolhas) {
    b.mover();
    b.mostrar();
  }
}

class Bolha {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(10, 25);
    this.vel = random(0.5, 2);
    this.cor = color(random(100, 200), random(150, 200), random(200, 255), 150);
  }

  mover() {
    this.y -= this.vel;
    if (this.y < -this.r) {
      this.y = height + this.r;
      this.x = random(width);
    }
  }

  mostrar() {
    noStroke();
    fill(this.cor);
    ellipse(this.x, this.y, this.r * 2);
  }
}
