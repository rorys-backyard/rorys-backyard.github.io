$.getJSON('./assets/data/animals.json', (animals) => {
    animals.forEach((animal) => {
        AFRAME.registerComponent(animal.id, {
            init: function () {
                this.el.addEventListener('click', (e) => {
                    const bobcat = document.querySelector(`#${animal.id}`);
                    cameraIndicator();
                    setTimeout(function () {
                        bobcat.remove();
                        animalFound();
                    }, 1500);
                });
            },
        });
    });
});
