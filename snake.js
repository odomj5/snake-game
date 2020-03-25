function Snake() {
    this.x = 10;
    this.y = 10;
    this.xVelocity = size * 1;
    this.yVelocity = 0;

    this.draw = function() {
        context.fillStyle = "#000000";
        context.fillRect(this.x, this.y, size, size);
    }

    this.update = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.x += this.xVelocity;
        this.y += this.yVelocity;

        if (this.x > canvas.width) {
            this.x = 0
        }

        if (this.x < 0) {
            this.x = canvas.width
        }

        if (this.y > canvas.height) {
            this.y = 0
        }

        if (this.y < 0) {
            this.y = canvas.height
        }
    }

    this.changePath = function(path) {
        switch(path) {
            case 'Left':
                this.xVelocity = size * -1;
                this.yVelocity = 0;
                break;
            case 'Right':
                this.xVelocity = size * 1;
                this.yVelocity = 0;
                break;
            case 'Up':
                this.xVelocity = 0;
                this.yVelocity = size * -1;
                break;
            case 'Down':
                this.xVelocity = 0;
                this.yVelocity = size * 1;
                break;
        }
    }

}