function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode")
}


const d = new Date();
let hour = d.getHours();

let currentState
if (hour < 12) {
    currentState = ("Good morning (●'◡'●)")
} else if (hour <= 18) {
    currentState = ("Good afternoon (●'◡'●)")
} else {
  currentState = ("Good evening (●'◡'●)")
}

let greeting = document.querySelector("#title")
greeting.textContent = currentState

