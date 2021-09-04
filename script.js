function closeNav() {
    document.getElementById('myNav').style.width = '0%';
}

// TODO: Create global variable for game score
// TODO: Change camera flash to new function
let score = 0;

const cameraFlash = document.getElementById('cameraflash');
const finalScore = document.querySelector('#finalscore');
const maximumAnimals = 9;

// const animals = [
//     {
//         name: 'owl',
//     },
//     {
//         name: 'bunny',
//     },
//     {
//         name: 'horse',
//     },
//     {
//         name: 'iguana',
//     },
//     {
//         name: 'snake',
//     },
// ];

function cameraFlashAnimation() {
    cameraFlash.style.display = 'block';

    setTimeout(function () {
        cameraFlash.style.display = 'none';
    }, 100);
}


// for (let i = 0; i < 4; i++) {
//     console.log(i);
//     console.log(animals[i].name);

//     AFRAME.registerComponent(animals[i].name, {
//         init: function () {
//             console.log("INIT");
//         },
//     });
// }

const animatedMarker = document.querySelector('#animated-marker');

AFRAME.registerComponent('owl', {
    init: function () {
        const aEntity = document.querySelector('#owl');
        const animatedMarker = document.querySelector('#animated-marker');

        animatedMarker.addEventListener('click', function (ev, target) {
            const intersectedElement =
                ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => (scale[key] = 0));
                aEntity.setAttribute('scale', scale);
                score = score += 1;
                document.getElementById('score').innerHTML =
                    'Animals Found: ' + score;
                cameraFlashAnimation();
            }
        });
    },
});

AFRAME.registerComponent('raccoon', {
    init: function () {
        const aEntity = document.querySelector('#raccoon');
        const animatedMarker = document.querySelector('#animated-marker');

        animatedMarker.addEventListener('click', function (ev, target) {
            const intersectedElement =
                ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => (scale[key] = 0));
                aEntity.setAttribute('scale', scale);
                score = score += 1;
                document.getElementById('score').innerHTML =
                    'Animals Found: ' + score;
                    document.getElementById('cameraflash').style.display = 'block';
                setTimeout(function () {
                    document.getElementById('cameraflash').style.display =
                        'none';
                }, 100);
            }
        });
    },
});

AFRAME.registerComponent('skunk', {
    init: function () {
        const animatedMarker = document.querySelector('#animated-marker');
        const aEntity = document.querySelector('#skunk');

        animatedMarker.addEventListener('click', function (ev, target) {
            const intersectedElement =
                ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => (scale[key] = 0));
                aEntity.setAttribute('scale', scale);
                score = score += 1;
                document.getElementById('score').innerHTML =
                    'Animals Found: ' + score;
                document.getElementById('cameraflash').style.display = 'block';
                setTimeout(function () {
                    document.getElementById('cameraflash').style.display =
                        'none';
                }, 100);
            }
        });
    },
});

AFRAME.registerComponent('frog', {
    init: function () {
        const animatedMarker = document.querySelector('#animated-marker');
        const aEntity = document.querySelector('#frog');

        animatedMarker.addEventListener('click', function (ev, target) {
            const intersectedElement =
                ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => (scale[key] = 0));
                aEntity.setAttribute('scale', scale);
                score = score += 1;
                document.getElementById('score').innerHTML =
                    'Animals Found: ' + score;
                document.getElementById('cameraflash').style.display = 'block';
                setTimeout(function () {
                    document.getElementById('cameraflash').style.display =
                        'none';
                }, 100);
            }
        });
    },
});

AFRAME.registerComponent('bobcat', {
    init: function () {
        const animatedMarker = document.querySelector('#animated-marker');
        const aEntity = document.querySelector('#bobcat');

        animatedMarker.addEventListener('click', function (ev, target) {
            const intersectedElement =
                ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => (scale[key] = 0));
                aEntity.setAttribute('scale', scale);
                score = score += 1;
                document.getElementById('score').innerHTML =
                    'Animals Found: ' + score;
                document.getElementById('cameraflash').style.display = 'block';
                setTimeout(function () {
                    document.getElementById('cameraflash').style.display =
                        'none';
                }, 100);
            }
        });
    },
});

AFRAME.registerComponent('deer', {
    init: function () {
        const animatedMarker = document.querySelector('#animated-marker');
        const aEntity = document.querySelector('#deer');

        animatedMarker.addEventListener('click', function (ev, target) {
            const intersectedElement =
                ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => (scale[key] = 0));
                aEntity.setAttribute('scale', scale);
                score = score += 1;
                document.getElementById('score').innerHTML =
                    'Animals Found: ' + score;
                document.getElementById('cameraflash').style.display = 'block';
                setTimeout(function () {
                    document.getElementById('cameraflash').style.display =
                        'none';
                }, 100);
            }
        });
    },
});

AFRAME.registerComponent('mockingbird', {
    init: function () {
        const animatedMarker = document.querySelector('#animated-marker');
        const aEntity = document.querySelector('#mockingbird');

        animatedMarker.addEventListener('click', function (ev, target) {
            const intersectedElement =
                ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => (scale[key] = 0));
                aEntity.setAttribute('scale', scale);
                score = score += 1;
                document.getElementById('score').innerHTML =
                    'Animals Found: ' + score;
                document.getElementById('cameraflash').style.display = 'block';
                setTimeout(function () {
                    document.getElementById('cameraflash').style.display =
                        'none';
                }, 100);
            }
        });
    },
});

AFRAME.registerComponent('snake', {
    init: function () {
        const animatedMarker = document.querySelector('#animated-marker');
        const aEntity = document.querySelector('#snake');

        animatedMarker.addEventListener('click', function (ev, target) {
            const intersectedElement =
                ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => (scale[key] = 0));
                aEntity.setAttribute('scale', scale);
                score = score += 1;
                document.getElementById('score').innerHTML =
                    'Animals Found: ' + score;
                document.getElementById('cameraflash').style.display = 'block';
                setTimeout(function () {
                    document.getElementById('cameraflash').style.display =
                        'none';
                }, 100);
            }
        });
    },
});

AFRAME.registerComponent('turtle', {
    init: function () {
        const animatedMarker = document.querySelector('#animated-marker');
        const aEntity = document.querySelector('#turtle');

        animatedMarker.addEventListener('click', function (ev, target) {
            const intersectedElement =
                ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => (scale[key] = 0));
                aEntity.setAttribute('scale', scale);
                score = score += 1;
                document.getElementById('score').innerHTML =
                    'Animals Found: ' + score;
                document.getElementById('cameraflash').style.display = 'block';
                setTimeout(function () {
                    document.getElementById('cameraflash').style.display =
                        'none';
                }, 100);
            }
        });
    },
});

const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

function onTimesUp() {
    clearInterval(timerInterval);
    openNav();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById('timer').innerHTML = formatTime(timeLeft);

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
        finalScore.innerHTML = score + 'ALL THE ANIMALS';
    }
}
