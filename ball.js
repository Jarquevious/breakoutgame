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
    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#";
        ctx.fill();
        ctx.closePath();
    }
}

ball_1 = Ball(2, 30, canvas.width / 2, canvas.height - 30)