function Snake() {
    this.x = 10;
    this.y = 10;
    this.xVelocity = size * 1;
    this.yVelocity = 0;
    this.bites = 0;
    this.body = [];

    this.draw = function() {
        context.fillStyle = "#000000";

        for (let i = 0; i < this.body.length-1; i++) {
            context.fillRect(this.body[i].x, this.body[i].y, size, size);

        }
        context.fillRect(this.x, this.y, size, size);
    }

    this.update = function() {
        for (let i = 0 ; i < this.body.length; i++) {
            this.body[i] = this.body[i+1];
        }

        this.body[this.bites -1] = { x: this.x, y: this.y}

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

    this.eat = function(food) {
        if (this.x === food.x && this.y === food.y) {
            this.bites++;
            return true;
        } else {
            return false;
        }
    }

}