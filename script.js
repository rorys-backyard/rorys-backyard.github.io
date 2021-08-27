function openNav() {
    document.getElementById("endgame").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  function openNav() {
    document.getElementById("owl").style.width = "0%";
  }

function myFunction() {
    alert();
    console.log("asldofgihasd");
  }

  AFRAME.registerComponent('markerhandler', {

    init: function() {
        const parentMarker = document.querySelector("#parent-marker");
        const childMarker = document.querySelector("#child-image");

        parentMarker.addEventListener('click', myFunction());
}});