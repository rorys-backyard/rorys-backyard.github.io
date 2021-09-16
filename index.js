const TIME_LIMIT = 20;
const maximumAnimals = 9;
let score = 0;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
const cameraFlash = document.getElementById('cameraflash');
const animatedMarker = document.querySelector('#animated-marker');
const cameraCircle = document.querySelector('#circle');
const finalScore = document.querySelector('#finalscore');

function closeNav() {
    document.querySelector('#landingPage').style.width = '0%';
}

function onTimesUp() {
    clearInterval(timerInterval);
    openNav();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.querySelector('#timer').innerHTML = formatTime(timeLeft);
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
        document.getElementById('timer').style.backgroundColor = 'gold';
    }
    if (seconds <= 5) {
        document.getElementById('timer').style.backgroundColor = 'red';
    }
    return `${minutes}:${seconds}`;
}

function openNav() {
    document.getElementById('endgame').style.width = '100%';
    if (score < maximumAnimals) {
        if (score === 1) {
            finalScore.innerHTML = score + ' ANIMAL';
        } else {
            finalScore.innerHTML = score + ' ANIMALS';
        }
    } else {
        finalScore.innerHTML = 'ALL THE ANIMALS';
    }
}

function animalFound() {
    score = score += 1;
    document.querySelector('#score').innerHTML = 'Animals Found: ' + score;
    cameraFlash.style.display = 'block';
    cameraCircle.style.border = '4px solid black';
    setTimeout(function() {
        cameraFlash.style.display = 'none';
    }, 100);
}

function cameraIndicator() {
    cameraCircle.style.border = '4px solid lightgreen';
};