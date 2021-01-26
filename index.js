
      // =========================================================
      //                   Variable Definitions
      // =========================================================

      // Variables for creating the canvas
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");

      // Variables for ball location. Used in creating motion effect.
      var x = canvas.width / 2;
      var y = canvas.height - 30;

      // Variables representing the ball's rate of change from the starting position.
      var dx = 2;
      var dy = -2;
      var ballRadius = 10;

      // Defining a paddle to hit the ball.
      var paddleHeight = 10;
      var paddleWidth = 75;
      var paddleX = (canvas.width - paddleWidth) / 2;

      // Two variables for storing information on whether the left or right control button is pressed.
      var rightPressed = false;
      var leftPressed = false;

      // Variable for tracking score
      var score = 0;

      // Variable for players lives
      var lives = 3;

      // Variables to define information about the bricks
      var brickRowCount = 5;            // sets row of bricks
      var brickColumnCount = 8;         // sets the number of columns for bricks
      var brickWidth = 45;              // sets how long the width will be for each individual brick
      var brickHeight = 20;             // sets how long the height will be for each individual brick
      var brickPadding = 10;            // sets space between each individual brick
      var brickOffsetTop = 30;          // sets the bricks to off set by 30 pixels the top row
      var brickOffsetLeft = 30;         // sets brick off set left by 30 pivels

      var bricks = [];                  // 2d array to hold our bricks
      for(var c = 0; c < brickColumnCount; c++) {  
        bricks[c] = [];
        for(var r = 0; r < brickRowCount; r++) {
          bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

      // =========================================================
      //                       Event Handlers
      // =========================================================
      document.addEventListener("keydown", keyDownHandler, false);
      document.addEventListener("keyup", keyUpHandler, false);
      document.addEventListener("mousemove", mouseMoveHandler, false);

      // =========================================================
      //                       Functions
      // =========================================================

      // Function is responsible for what happens when right arrow button is pressed. 'e' and 'key' are built in methods.
      // ArrowRight for the right cursor keys, but we need to also include Right checks to support IE/Edge browsers.
      function keyDownHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
          rightPressed = true;
        } else if (e.key == "Left" || e.key == "ArrowLeft") {
          leftPressed = true;
        }
      }

      // ArrowLeft for the left cursor keys, but we need to also include Left checks to support IE/Edge browsers.
      function keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
          rightPressed = false;
        } else if (e.key == "Left" || e.key == "ArrowLeft") {
          leftPressed = false;
        }
      }

      // This function is responsible for Anchoring the paddle movement to the mouse movement
      function mouseMoveHandler(e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        if(relativeX > 0 && relativeX < canvas.width) {
            paddleX = relativeX - paddleWidth/2;
        }
      }

      // This function is used for to create collision detection
      function collisionDetection() {
        for(var c=0; c<brickColumnCount; c++) {
          for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
              if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                dy = -dy;
                b.status = 0;
                score++;
                if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload(); 
                }
              }
            }
          }
        }
      }

      // Function create and update the score display.
      function drawScore() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: "+score, 8, 20);
      } 

      function drawLives() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: "+lives, canvas.width-65, 20);
      }

      // Function to drawball with attirbutes
      function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#";
        ctx.fill();
        ctx.closePath();
      }

      // Function to draw paddle by creating its attributes
      function drawPaddle() {
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

      // Function is responsible for looping through all the bricks in the array and drawing them on the screen.
      function drawBricks() {
        for(var c=0; c<brickColumnCount; c++) {
          for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
              var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
              var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
              bricks[c][r].x = brickX;
              bricks[c][r].y = brickY;
              ctx.beginPath();
              ctx.rect(brickX, brickY, brickWidth, brickHeight);
              ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * c) + ', ' +
                                Math.floor(255 - 42.5 * r) + ', 0)';
              ctx.fill()
                }
            
            }
            //   ctx.fillStyle = "red";
              ctx.fill()
            } ctx.closePath();
        }
    


      // Function responible for movement x & y movement
      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawPaddle();
        drawBricks();
        collisionDetection();
        drawScore();
        drawLives();



        // This if statement is repsonsible for Ball bouncing off the left and right edges
        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
          dx = -dx;
        }

        // This if statement is repsonsible for bouncing off the top and bottom edges
        if(y + dy < ballRadius) {
            dy = -dy;
        // This 'else if' is responsible for ending the game if the ball touches the maximum height of the campus; when the ball hits the bottom.
        } else if(y + dy > canvas.height-ballRadius) {
            if(x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            }
            else {
              lives--;
              if(!lives) {
                  alert("GAME OVER");
                  document.location.reload();
                //   clearInterval(interval); // Needed for Chrome to end game
              }
              else {
                  x = canvas.width/2;
                  y = canvas.height-30;
                  dx = 2;
                  dy = -2;
                  paddleX = (canvas.width-paddleWidth)/2;
              }
            }
      }
        // This if statement is responsible the movement and the contraints of the ball
        if (rightPressed) {
          paddleX += 7;
          if (paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth;
          }
        } else if (leftPressed) {
          paddleX -= 7;
          if (paddleX < 0) {
            paddleX = 0;
          }
        }
        x += dx;
        y += dy;
        requestAnimationFrame(draw);
      }

      draw();

      
    
    