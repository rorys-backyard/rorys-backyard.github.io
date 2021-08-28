function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


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
          }
      });
}});

const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("timer").innerHTML = formatTime(
      timeLeft
    );

    if (timeLeft === 0) {
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

  return `${minutes}:${seconds}`;
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function openNav() {
  document.getElementById("endgame").style.width = "100%";
}
