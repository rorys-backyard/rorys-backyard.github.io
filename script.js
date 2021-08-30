function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

let score = 0;

AFRAME.registerComponent('owl', {

  init: function() {
      const animatedMarker = document.querySelector("#animated-marker");
      const aEntity = document.querySelector('#owl');

      animatedMarker.addEventListener('click', function(ev, target){
          const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
          if (aEntity && intersectedElement === aEntity) {
              const scale = aEntity.getAttribute('scale');
              Object.keys(scale).forEach((key) => scale[key] = 0);
              aEntity.setAttribute('scale', scale);
              score = score += 1;
              document.getElementById('score').innerHTML = "Animals Found: " +score;
              document.getElementById('cameraflash').style.display = 'block';
              setTimeout(function(){document.getElementById('cameraflash').style.display = 'none'}, 100);
          }
          
      });
      
}});

AFRAME.registerComponent('raccoon', {

init: function() {
    const animatedMarker = document.querySelector("#animated-marker");
    const aEntity = document.querySelector('#raccoon');

    animatedMarker.addEventListener('click', function(ev, target){
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aEntity && intersectedElement === aEntity) {
            const scale = aEntity.getAttribute('scale');
            Object.keys(scale).forEach((key) => scale[key] = 0);
            aEntity.setAttribute('scale', scale);
            score = score += 1;
            document.getElementById('score').innerHTML = "Animals Found: " +score;
            document.getElementById('cameraflash').style.display = 'block';
            setTimeout(function(){document.getElementById('cameraflash').style.display = 'none'}, 100);
        }
    });
}});

AFRAME.registerComponent('skunk', {

init: function() {
    const animatedMarker = document.querySelector("#animated-marker");
    const aEntity = document.querySelector('#skunk');

    animatedMarker.addEventListener('click', function(ev, target){
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aEntity && intersectedElement === aEntity) {
            const scale = aEntity.getAttribute('scale');
            Object.keys(scale).forEach((key) => scale[key] = 0);
            aEntity.setAttribute('scale', scale);
            score = score += 1;
            document.getElementById('score').innerHTML = "Animals Found: " +score;
            document.getElementById('cameraflash').style.display = 'block';
            document.getElementById('cameraflash').style.display = 'none';
            setTimeout(function(){document.getElementById('cameraflash').style.display = 'none'}, 100);
        }
    });
}});

AFRAME.registerComponent('frog', {

init: function() {
    const animatedMarker = document.querySelector("#animated-marker");
    const aEntity = document.querySelector('#frog');

    animatedMarker.addEventListener('click', function(ev, target){
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aEntity && intersectedElement === aEntity) {
            const scale = aEntity.getAttribute('scale');
            Object.keys(scale).forEach((key) => scale[key] = 0);
            aEntity.setAttribute('scale', scale);
            score = score += 1;
            document.getElementById('score').innerHTML = "Animals Found: " +score;
            document.getElementById('cameraflash').style.display = 'block';
            setTimeout(function(){document.getElementById('cameraflash').style.display = 'none'}, 100);
        }
    });
}});

AFRAME.registerComponent('bobcat', {

init: function() {
    const animatedMarker = document.querySelector("#animated-marker");
    const aEntity = document.querySelector('#bobcat');

    animatedMarker.addEventListener('click', function(ev, target){
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aEntity && intersectedElement === aEntity) {
            const scale = aEntity.getAttribute('scale');
            Object.keys(scale).forEach((key) => scale[key] = 0);
            aEntity.setAttribute('scale', scale);
            score = score += 1;
            document.getElementById('score').innerHTML = "Animals Found: " +score;
            document.getElementById('cameraflash').style.display = 'block';
            setTimeout(function(){document.getElementById('cameraflash').style.display = 'none'}, 100);
        }
    });
}});

AFRAME.registerComponent('deer', {

init: function() {
    const animatedMarker = document.querySelector("#animated-marker");
    const aEntity = document.querySelector('#deer');

    animatedMarker.addEventListener('click', function(ev, target){
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aEntity && intersectedElement === aEntity) {
            const scale = aEntity.getAttribute('scale');
            Object.keys(scale).forEach((key) => scale[key] = 0);
            aEntity.setAttribute('scale', scale);
            score = score += 1;
            document.getElementById('score').innerHTML = "Animals Found: " +score;
            document.getElementById('cameraflash').style.display = 'block';
            setTimeout(function(){document.getElementById('cameraflash').style.display = 'none'}, 100);
        }
    });
}});

AFRAME.registerComponent('mockingbird', {

init: function() {
    const animatedMarker = document.querySelector("#animated-marker");
    const aEntity = document.querySelector('#mockingbird');

    animatedMarker.addEventListener('click', function(ev, target){
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aEntity && intersectedElement === aEntity) {
            const scale = aEntity.getAttribute('scale');
            Object.keys(scale).forEach((key) => scale[key] = 0);
            aEntity.setAttribute('scale', scale);
            score = score += 1;
            document.getElementById('score').innerHTML = "Animals Found: " +score;
            document.getElementById('cameraflash').style.display = 'block';
            setTimeout(function(){document.getElementById('cameraflash').style.display = 'none'}, 100);
        }
    });
}});

AFRAME.registerComponent('snake', {

init: function() {
    const animatedMarker = document.querySelector("#animated-marker");
    const aEntity = document.querySelector('#snake');

    animatedMarker.addEventListener('click', function(ev, target){
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aEntity && intersectedElement === aEntity) {
            const scale = aEntity.getAttribute('scale');
            Object.keys(scale).forEach((key) => scale[key] = 0);
            aEntity.setAttribute('scale', scale);
            score = score += 1;
            document.getElementById('score').innerHTML = "Animals Found: " +score;
            document.getElementById('cameraflash').style.display = 'block';
            setTimeout(function(){document.getElementById('cameraflash').style.display = 'none'}, 100);
        }
    });
}});

AFRAME.registerComponent('turtle', {

init: function() {
    const animatedMarker = document.querySelector("#animated-marker");
    const aEntity = document.querySelector('#turtle');

    animatedMarker.addEventListener('click', function(ev, target){
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aEntity && intersectedElement === aEntity) {
            const scale = aEntity.getAttribute('scale');
            Object.keys(scale).forEach((key) => scale[key] = 0);
            aEntity.setAttribute('scale', scale);
            score = score += 1;
            document.getElementById('score').innerHTML = "Animals Found: " +score;
            document.getElementById('cameraflash').style.display = 'block';
            setTimeout(function(){document.getElementById('cameraflash').style.display = 'none'}, 100);
        }
    });
}});

const TIME_LIMIT = 20;
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
  document.getElementById("timer").innerHTML = formatTime(
    timeLeft
  );

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

function calculateTimeFraction() {
const rawTimeFraction = timeLeft / TIME_LIMIT;
return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function openNav() {
document.getElementById("endgame").style.width = "100%";

if (score == 1) {
  document.getElementById('finalscore').innerHTML = score + " ANIMAL";
}
else if (score == 9) {
  document.getElementById('finalscore').innerHTML = "ALL THE ANIMALS"
}
else {
  document.getElementById('finalscore').innerHTML = score + " ANIMALS";
}

}