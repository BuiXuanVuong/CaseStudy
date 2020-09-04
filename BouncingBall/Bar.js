function Bar(barWidth) {
    this.barWidth = barWidth;
    this.barX = (canvas.width-this.barWidth)/2;
    this.barHeight = BAR_HEIGHT;

    this.moveLeftBar = function () {
        if (rightPressed && this.barX < canvas.width - this.barWidth) {
            this.barX += BAR_SPEED;
        }
        this.moveRightBar = function () {
            if (leftPressed && this.barX > 0) {
                this.barX -= BAR_SPEED;
            }
        }
    }
    this.drawBar = function () {
        ctx.beginPath();
        ctx.rect(this.barX, canvas.height-this.barHeight, this.barWidth, this.barHeight);
        // ctx.fillStyle = "#0095DD";
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    }

}