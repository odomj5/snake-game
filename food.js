function Food() {
    this.x;
    this.y

    this.randLocation = function() {
        this.x = (Math.floor(Math.random() * row -1) + 1) * size;
        this.y = (Math.floor(Math.random() * col -1) + 1) * size;
    }

    this.draw = function() {
        context.fillStyle = '#8B0000';
        context.fillRect(this.x, this.y, size, size)
    }

}