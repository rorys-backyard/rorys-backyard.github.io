fetch('./assets/data/animals.json')
    .then(response => response.json())
    .then(animals => {
        animals.forEach((animal) => {
            AFRAME.registerComponent(animal.id, {
                init: function() {
                    this.el.addEventListener('mouseenter', (e) => {
                        animalEnter();
                    });
                    this.el.addEventListener('mouseleave', (e) => {
                        animalLeave();
                    });
                    this.el.addEventListener('click', (e) => {
                        const animalEl = document.querySelector(`#${animal.id}`);
                        const animalId = e.target.id;
                        const dataAnimalId = `[data-animal-id=${animalId}]`
                        const animalCheck = document.querySelector(dataAnimalId)

                        animalCheck.style.display = 'block'

                        animalEl.remove();
                        animalFound();
                    });
                },
            });
        })
    });



// $.getJSON('./assets/data/animals.json', (animals) => {

//     animals.forEach((animal) => {
//         AFRAME.registerComponent(animal.id, {
//             init: function() {
//                 this.el.addEventListener('mouseenter', (e) => {
//                     animalEnter();
//                 });
//                 this.el.addEventListener('mouseleave', (e) => {
//                     animalLeave();
//                 });
//                 this.el.addEventListener('click', (e) => {
//                     const animalEl = document.querySelector(`#${animal.id}`);
//                     const animalId = e.target.id;
//                     const dataAnimalId = `[data-animal-id=${animalId}]`
//                     const animalCheck = document.querySelector(dataAnimalId)

//                     animalCheck.style.display = 'block'

//                     animalEl.remove();
//                     animalFound();
//                 });
//             },
//         });
//     });
// });