const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const size = 10;
const row = canvas.height / size;
const col = canvas.width / size;

let snake;

(function setup() {
    snake = new Snake();
    food = new Food();

    food.randLocation();
    
    window.setInterval(() => {
        snake.update();
        food.draw();  
        snake.draw();  

        if (snake.eat(food)) {
            food.randLocation();
        }

    }, 100);
}());

window.addEventListener("keydown", ((evt) => {
    const path = evt.key.replace("Arrow", "")
    snake.changePath(path)
}))
