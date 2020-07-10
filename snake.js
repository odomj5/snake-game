const instructionsDiv = document.querySelector(".instructions-div");

function Snake() {
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.xVelocity = size * 1;
    this.yVelocity = 0;
    this.bites = 0;
    this.body = [];
    this.prevBites = 0

    this.draw = function() {
        context.fillStyle = "#000000";

        for (let i = 0; i < this.body.length; i++) {
            context.fillRect(this.body[i].x, this.body[i].y, size, size);

        }
        context.fillRect(this.x, this.y, size, size);
    }

    this.update = function() {
        for (let i = 0 ; i < this.body.length - 1; i++) {
            this.body[i] = this.body[i+1];
        }

        this.body[this.bites - 1] = { x: this.x, y: this.y}

        context.clearRect(0, 0, canvas.width, canvas.height);
        this.x += this.xVelocity;
        this.y += this.yVelocity;

        if (this.x > canvas.width) {
            // this.x = 
            this.restart()
        }

        if (this.x < 0) {
            // this.x = canvas.width
            this.restart()
        }

        if (this.y > canvas.height) {
            // this.y = 0
            this.restart()
        }

        if (this.y < 0) {
            // this.y = canvas.height
            this.restart()
        }
    }

    this.changePath = function(path) {
        switch(path) {
            case 'Left':
                this.xVelocity = size * -1;
                this.yVelocity = 0;
                left.play();
                break;
            case 'Right':
                this.xVelocity = size * 1;
                this.yVelocity = 0;
                right.play();
                break;
            case 'Up':
                this.xVelocity = 0;
                this.yVelocity = size * -1;
                up.play();
                break;
            case 'Down':
                this.xVelocity = 0;
                this.yVelocity = size * 1;
                down.play();
                break;
        }
    }

    this.eat = function(food) {
        if (this.x === food.x && this.y === food.y) {
            this.bites++;
            eat.play();
            return true;
        } else {
            return false;
        }
    }

    this.collide = function() {
        for (let i = 0; i < this.body.length; i++) {
            if (this.x === this.body[i].x && this.y === this.body[i].y) {
                this.restart();
            }
        }
    }

    this.restart = function() {
        dead.play();
        this.prevBites = this.bites
        this.bites = 0;
        this.body = [];
        food.randLocation();
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        isPaused = true
        instructionsDiv.style.display = "block"

    }

    let dead = new Audio();
    let eat = new Audio();
    let left = new Audio();
    let right = new Audio();
    let up = new Audio();
    let down = new Audio();
    

    dead.src = "audio/dead.mp3";
    eat.src = "audio/eat.mp3";
    left.src = "audio/left.mp3";
    right.src = "audio/right.mp3";
    up.src = "audio/up.mp3";
    down.src = "audio/down.mp3";
;
}