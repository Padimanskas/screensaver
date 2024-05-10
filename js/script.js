const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');



class Ball {
  
  constructor(ctx) {
    this.x = 0;
    this.y = 0;
    this.vecX = 5;
    this.vecY = 5;
    this.size = 30;
    this.ctx = ctx;
  }
  
  action() {
    
    this.x += this.vecX;
    this.y += this.vecY;
    
    this.vecX = this.x < 0 ? -this.vecX : this.vecX;
    this.vecY = this.y < 0 ? -this.vecY : this.vecY;
    this.vecX = this.x > 800 - this.size ? -this.vecX : this.vecX;
    this.vecY = this.y > 600 - this.size ? -this.vecY : this.vecY;

    context.clearRect(0, 0, 800, 600);
    context.fillRect(this.x, this.y, this.size, this.size);
  }
  
}

const ball = new Ball(context);

function loop() {
  ball.action();

  
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);