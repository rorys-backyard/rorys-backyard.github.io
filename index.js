const TIME_LIMIT = 60;
const maximumAnimals = 9;
let score = 0;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
const cameraFlash = document.getElementById("cameraflash");
const animatedMarker = document.querySelector("#animated-marker");
let cameraCircle = document.querySelector("#circle");
const finalScore = document.querySelector("#finalscore");

function startGame() {
  document.querySelector("#landingPage").style.width = "0%";
}

function onTimesUp() {
  clearInterval(timerInterval);
  openNav();
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.querySelector("#timer").innerHTML = formatTime(timeLeft);
    if (timeLeft === 0 || score == 9) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (seconds <= 15) {
    document.getElementById("timer").style.backgroundColor = "gold";
  }
  if (seconds <= 5) {
    document.getElementById("timer").style.backgroundColor = "red";
  }
  return `${minutes}:${seconds}`;
}

function openNav() {
  document.getElementById("endgame").style.width = "100%";
  if (score < maximumAnimals) {
    const tryAgainContainer = document.querySelector("#try-again-container");
    const tryAgainText = document.createElement("div");
    const tryAgainButton = document.createElement("button");
    tryAgainButton.setAttribute("class", "start-button");
    tryAgainText.setAttribute("class", "try-again-container-text");
    tryAgainText.innerText = "Didn't find all the animals?";
    tryAgainButton.innerText = "TRY AGAIN!";
    tryAgainContainer.appendChild(tryAgainText);
    tryAgainContainer.appendChild(tryAgainButton);
    tryAgainButton.addEventListener("click", function () {
      location.reload();
    });

    if (score === 1) {
      finalScore.innerHTML = score + " ANIMAL";
    } else {
      finalScore.innerHTML = score + " ANIMALS";
    }
  } else {
    finalScore.innerHTML = "ALL THE ANIMALS";
  }
}

let esValidation3 = /es/.test(navigator.language);
let found;

function animalFound() {
  score = score += 1;
  switch (esValidation3) {
    case true:
      found = "animales encontrados: ";
      break;
    default:
      found = "animals found: ";
  }
  document.querySelector(".score").innerHTML = found + score;
  cameraFlash.style.display = "block";
  cameraCircle.setAttribute("class", "circle");
  setTimeout(function () {
    cameraFlash.style.display = "none";
  }, 100);
}

function animalEnter() {
  cameraCircle.setAttribute("class", "blink-circle");
}

function animalLeave() {
  cameraCircle.setAttribute("class", "circle");
}
