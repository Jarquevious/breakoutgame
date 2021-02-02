class Paddle { 
    constructor() {
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (canvas.width - paddleWidth) / 2;
        this.color = "#0095DD";


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
  }
  export default Paddle;