let userLang2 = navigator.language;
let esValidation2 = /es/.test(userLang2);
let textFile;
switch (esValidation2) {
  case true:
    textFile = "espanol";
    break;
  default:
    textFile = "english";
}

fetch(`./assets/GameText/${textFile}.json`)
  .then((response) => response.json())
  .then((file) => {
    file.forEach((textFill) => {
      document.querySelector(`.${textFill.class}`).innerHTML = `${textFill.text}`;
    });
});

if (esValidation2) {
    const timerClass = document.querySelector('.timer');
    timerClass.style.marginTop = "60px";
    timerClass.style.left = "10px";
} else {
    const timerClass = document.querySelector('.timer')
    timerClass.style.right = "10px";    
}