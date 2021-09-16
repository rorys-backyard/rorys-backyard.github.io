$.getJSON('./assets/data/animals.json', (animals) => {
    console.log(animals[0]);

    animals.forEach((animal) => {
        AFRAME.registerComponent(animal.id, {
            init: function() {
                this.el.addEventListener('click', (e) => {
                    const animalEl = document.querySelector(`#${animal.id}`);
                    console.log(animal.id);

                    const animalId = e.target.id;

                    const dataAnimalId = `[data-animal-id=${animalId}]`
                    const animalCheck = document.querySelector(dataAnimalId)

                    animalCheck.style.display = 'block'

                    cameraIndicator();

                    setTimeout(function() {
                        animalEl.remove();
                        animalFound();

                    }, 1500);
                });
            },
        });
    });
});