
function Ball(x,y,speed) {
    // this.x = canvas.width/2;
    // this.y = canvas.height-30;
    this.x = x;
    this.y = y;

    this.speed = speed;
    let dx = this.speed;
    let dy = -this.speed;

    // this.angle = angle;

    let ballRadius = BALL_RADIUS;
    
    this.moveBall = function () {
        this.x += dx;
        this.y += dy;
    }

    this.changeDirection = function (Bar) {
        if(this.x + dx > canvas.width-ballRadius || this.x + dx < ballRadius) {
            dx = -dx;
        }

        if(this.y + dy < ballRadius) {
            dy = -dy;
        } else if(this.y + dy > canvas.height-ballRadius) {
            if(this.x > Bar.barX && this.x < Bar.barX + Bar.barWidth) {
                dy = -dy;
            }
            else {
                // alert("GAME OVER");
                    document.location.reload();
            }
        }
    }
    this.drawBall = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
        this.moveBall();
    }
}



