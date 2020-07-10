const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const size = 20;
const row = canvas.height / size;
const col = canvas.width / size;
let isPaused = true;
let slider = document.getElementById("diffRange")
let output = document.getElementById("speed")
let refresh = 150
const instructions = document.querySelector(".instructions-div");
const startButton = document.querySelector(".start-btn");
const soundToggle = document.getElementById("mute");

let snake;

function setup() {
    snake = new Snake();
    food = new Food();

    food.randLocation();

    let speedInt = parseInt(slider.value, 10)
    if (speedInt === 7) {
        refresh = 150
    } else {
        refresh = 150 + ((speedInt - 7) * -7)
    }
        
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
            openModal()
        }


        snake.collide()

        document.querySelector(".score-cont")
            .innerText = `Taco Count: ${snake.bites}`

    }, refresh);

};

// (function setup() {
//     snake = new Snake();
//     food = new Food();

//     food.randLocation();

//     const play = window.setInterval(() => {
//         snake.update();
//         food.draw();
//         // food.drawImage()  
//         snake.draw();

//         if (snake.eat(food)) {
//             food.randLocation();
//         }

//         if (isPaused) {
//             clearInterval(play)
//         }


//         snake.collide()

//         document.querySelector(".info-box")
//             .innerText = `Your Score: ${snake.bites}`

//     }, 100);

// }());


// window.addEventListener("keydown", ((evt) => {
//     const path = evt.key.replace("Arrow", "")
//     snake.changePath(path)
// }))

// if(isPaused) {
//     window.addEventListener("keydown", ((evt) => {
//     //    console.log(evt.code)
//        if(evt.code === "Space") {
//            setup()
//            isPaused = false
//        }
//     }))
// } else {
//     window.addEventListener("keydown", ((evt) => {
//         const path = evt.key.replace("Arrow", "")
//         snake.changePath(path)
//     }))
// }


// window.addEventListener("keydown", ((evt) => {

//     if(evt.code === "Space" && isPaused) {
//         setup()
//         isPaused = false
//         closeModal()
//     } else {
//         const path = evt.key.replace("Arrow", "")
//         snake.changePath(path)
//     }
    
// }))


window.addEventListener("keydown", ((evt) => {
    const path = evt.key.replace("Arrow", "")
    snake.changePath(path)
}))


startButton.onclick = function start() {
    instructions.style.display = "none"
    startSound.play();
    setup()
    isPaused = false 
    closeModal()
}

soundToggle.onclick = function muteToggle() {
    const muteIcon = document.getElementById("mute").src;
    console.log(muteIcon)
    const newMuteIcon = muteIcon === "file:///home/jon/Desktop/jsp/img/soundOn.png" ? "file:///home/jon/Desktop/jsp/img/soundOff.png" : "file:///home/jon/Desktop/jsp/img/soundOn.png";
    document.getElementById("mute").src = newMuteIcon;
    console.log(soundToggle.src) 
}




output.innerHTML = slider.value; 
slider.oninput = function () {
    output.innerHTML = this.value;
}

let startSound = new Audio();
startSound.src = "audio/start.mp3";

