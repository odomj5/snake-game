// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function () {
//     modal.style.display = "block";
// }

function openModal() {
    modal.style.display = "block";
    let bite = snake.prevBites === 1 ? 'Bite' : 'Bites'
    document.querySelector(".modal-p")
        .innerText = `Your Final Score Was ${snake.prevBites} ${bite}`
}

function closeModal() {
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    closeModal()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 