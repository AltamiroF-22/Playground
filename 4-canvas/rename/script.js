/*** @type { HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lastTime = 0;
let particlesNumbers = 10;

class Particles {
  constructor(x, y, size, color) {
    this.size = size;
    this.x = x + this.size / 1.4 + Math.random() * 50 - 25;
    this.y = y + this.size / 3 + Math.random() * 50 - 25;
    this.radius = (Math.random() * this.size) / 10;
    this.maxRadius = Math.random() * 20 + 35;
    this.markedForDeletion = false;
    this.speedX = Math.random() * 1 + 0.5;
    this.color = color;
  }

  update() {
    this.x += this.speedX;
    this.radius += 0.6;
  }

  draw() {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "#e9e9e9";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(animate);
};

animate(0);






