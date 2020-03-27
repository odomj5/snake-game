function Food() {
    this.x;
    this.y;

    const tacoImg = new Image();
    tacoImg.src = "img/taco.png";

    this.randLocation = function() {
        this.x = (Math.floor(Math.random() * row -1) + 1) * size;
        this.y = (Math.floor(Math.random() * col -1) + 1) * size;
    }

    this.draw = function() {
        // context.fillStyle = tacoImg;
        // context.fillRect(this.x, this.y, size, size)
        context.drawImage(tacoImg, this.x, this.y, size, size)
    }

}