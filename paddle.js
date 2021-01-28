class Paddle { 
    constructor() {
    paddleHeight = 10;
    paddleWidth = 75;
    paddleX = (canvas.width - paddleWidth) / 2;

    // Methods
    // Function to draw paddle
    function drawPaddle(ctx) {
        ctx.beginPath();
        ctx.rect(
          paddleX,
          canvas.height - paddleHeight,
          paddleWidth,
          paddleHeight
        );
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
}