class Lives {
    constructor(x, y, color, lives, font) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.lives = lives;
        this.font = font;
    }
    render(ctx) {
            ctx.font = "16px Arial";
            ctx.fillStyle = "#0095DD";
            ctx.fillText("Lives: " + this.lives, canvas.width - 65, 20);
        }

    }
    looselife() {
        this.lives--;
        if(!this.lives) {
        this.reset()    
    }

    reset() {
        alert("GAME OVER");
        document.location.reload();

    }

}
