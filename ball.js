class Ball {
    // constructor == __init__
    constructor() {
        this.ballRadius = 10
        this.color = '#0095DD';
        this.x = 250;
        this.y = 160;
        this.dx = 2;
        this.dy = 2;
    }
    

    // Methods 
    function drawBall(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    // this method changes the position of the ball on the canvas
    move(canvas) {
        // this is what moves the ball (literaly)
        console.log(canvas);
        if (this.x + this.dx > canvas.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
            this.dx = -(this.dx);
        }
        if (this.y + this.dy > canvas.height - this.ballRadius || this.y + this.dy < this.ballRadius) {
            this.dy = -(this.dy);
        }
        this.x += this.dx;
        this.y += this.dy;
    }


ball_1 = Ball(2, 30, canvas.width / 2, canvas.height - 30)