let score = 0;
const finalScore = document.querySelector('#finalscore');
const maximumAnimals = 9;

const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

const cameraFlash = document.getElementById('cameraflash');

const animatedMarker = document.querySelector('#animated-marker');



function closeNav() {
    document.getElementById('myNav').style.width = '0%';
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

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
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
    setTimeout(function() {
        cameraFlash.style.display = 'none';
    }, 100);
}

AFRAME.registerComponent('owl', {
    init: function() {
        this.el.addEventListener('click', (e) => {
            const owl = document.querySelector('#owl');
            owl.remove();
            animalFound();
        })
    },
});

AFRAME.registerComponent('raccoon', {
    init: function() {
        this.el.addEventListener('click', (e) => {
            const raccoon = document.querySelector('#raccoon');
            raccoon.remove();
            animalFound();
        })
    },
});

AFRAME.registerComponent('bobcat', {
    init: function() {
        this.el.addEventListener('click', (e) => {
            const bobcat = document.querySelector('#bobcat');
            bobcat.remove();
            animalFound();
        })
    },
});

AFRAME.registerComponent('deer', {
    init: function() {
        this.el.addEventListener('click', (e) => {
            const deer = document.querySelector('#deer');
            deer.remove();
            animalFound();
        })
    },
});

AFRAME.registerComponent('frog', {
    init: function() {
        this.el.addEventListener('click', (e) => {
            const frog = document.querySelector('#frog');
            frog.remove();
            animalFound();
        })
    },
});

AFRAME.registerComponent('snake', {
    init: function() {
        this.el.addEventListener('click', (e) => {
            const snake = document.querySelector('#snake');
            snake.remove();
            animalFound();
        })
    },
});

AFRAME.registerComponent('skunk', {
    init: function() {
        this.el.addEventListener('click', (e) => {
            const skunk = document.querySelector('#skunk');
            skunk.remove();
            animalFound();
        })
    },
});

AFRAME.registerComponent('turtle', {
    init: function() {
        this.el.addEventListener('click', (e) => {
            const turtle = document.querySelector('#turtle');
            turtle.remove();
            animalFound();
        })
    },
});

AFRAME.registerComponent('mockingbird', {
    init: function() {
        this.el.addEventListener('click', (e) => {
            const mockingbird = document.querySelector('#mockingbird');
            mockingbird.remove();
            animalFound();
        })
    },
});