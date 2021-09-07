// Variables

let score = 0;
const finalScore = document.querySelector('#finalscore');
const maximumAnimals = 9;

const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

const cameraFlash = document.getElementById('cameraflash');

const animatedMarker = document.querySelector('#animated-marker');


// Functions

// Close the landing page
function closeNav() {
    document.getElementById('myNav').style.width = '0%';
}

// Camera flash
function cameraFlashAnimation() {
    cameraFlash.style.display = 'block';
    setTimeout(function() {
        cameraFlash.style.display = 'none';
    }, 100);
}

// Times Up
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

// Time format
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


// Time fraction
function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}


// Final score

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


// TODO: Create global variable for game score
// TODO: Change camera flash to new function




const animals = [{
        name: 'Eastern Box Turtle',
        conservationStatus: 'Vulnerable',
        ecologicalRole: 'Box turtles act as seed dispersers for many plants.',
        threats: 'Habitat loss, car collisions, and the taking of wild individuals to supply the pet trade.',
        waysYouCanHelp: 'Research any animal you are interested in owning as a pet before you buy it.',
    },
    {
        name: 'Great Horned Owl',
        conservationStatus: 'Least Concern',
        ecologicalRole: 'As top predators, they help control the populations of many other animals.',
        threats: 'Pesticides, car collisions, habitat loss, net entanglement, and illegal hunting.',
        waysYouCanHelp: 'Use natural pest controls and take down any outdoor nets not in use.',
    },
    {
        name: 'Green Treefrog',
        conservationStatus: 'Least Concern',
        ecologicalRole: 'As indicator species, green treefrogs can alert humans to negative environmental conditions.',
        threats: 'Competition with the nonnative Cuban Treefrog.',
        waysYouCanHelp: 'Build a toad abode or other shelter for frogs in your backyard that provides a safe place for them during the day.',
    },
    {
        name: 'North American Bobcat',
        conservationStatus: 'Least Concern',
        ecologicalRole: 'Bobcats are apex predators that keep small mammal and bird populations stable.',
        threats: 'Hunting from humans and habitat loss.',
        waysYouCanHelp: 'Spread the word that bobcats generally stay away from people and that their habitat needs saving.',
    },
    {
        name: 'Northern Mockingbird',
        conservationStatus: 'Least Concern',
        ecologicalRole: 'These birds help disperse seeds and also act as a natural form of pest control by consuming a large number of insects.',
        threats: 'Predation from domestic or feral cats, severe weather, and striking windows.',
        waysYouCanHelp: 'Keep your pet cat inside and place anti-collision decals on your windows to help minimize the amount of window strikes by birds.',
    },
    {
        name: 'Raccoon',
        conservationStatus: 'Least Concern',
        ecologicalRole: 'Raccoons help control populations of their prey species, including rodents and insects.',
        threats: 'Humans who view the animals as pests.',
        waysYouCanHelp: 'Make sure outdoor garbage lids are secure, remove any fallen fruit from trees or bird seed from feeders at night, and never feed any wild animal.',
    },
    {
        name: 'Red Rat Snake',
        conservationStatus: 'Least Concern',
        ecologicalRole: 'Red rat or corn snakes help keep rodent populations under control.',
        threats: 'Habitat destruction, misidentification as a venomous snake, and pet trade.',
        waysYouCanHelp: 'If you come across any wild snake, leave it alone and give it space. Encourage your family and friends to do the same.',
    },
    {
        name: 'Striped Skunk',
        conservationStatus: 'Least Concern',
        ecologicalRole: 'Skunks are a natural pest control as they consume a variety of insects.',
        threats: 'Skunk specific disease outbreaks and humans that view them as pests.',
        waysYouCanHelp: 'Spread the word that skunks play an important part in our environment.',
    },
    {
        name: 'White-Tailed Deer',
        conservationStatus: 'Least Concern',
        ecologicalRole: 'Considered a keystone herbivore, white-tail deer can have a dramatic effect on the plants and predators in their areas.',
        threats: 'Car collisions, habitat loss, and humans who view the animals as pests.',
        waysYouCanHelp: 'Look for alternative landscaping options for your yard like plants that aren’t as tasty to deer.',
    },
];


console.log(animals.name);