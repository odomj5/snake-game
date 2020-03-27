const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const size = 20;
const row = canvas.height / size;
const col = canvas.width / size;
let isPaused = false

let snake;

(function setup() {
    snake = new Snake();
    food = new Food();

    food.randLocation();
        
    const play = window.setInterval(() => {
        snake.update();
        food.draw();
        // food.drawImage()  
        snake.draw();  

        if (snake.eat(food)) {
            food.randLocation();
        }

        if (isPaused) {
            clearInterval(play)
        }


        snake.collide()

        document.querySelector(".info-box")
            .innerText = `Your Score: ${snake.bites}`

    }, 100);

}());

window.addEventListener("keydown", ((evt) => {
    const path = evt.key.replace("Arrow", "")
    snake.changePath(path)
}))
