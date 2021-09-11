$.getJSON('./assets/data/animals.json', (animals) => {
    console.log(animals);
    animals.forEach((animal) => {
        console.log({ animal });

        AFRAME.registerComponent(animal.id, {
            init: function () {
                this.el.addEventListener('click', (e) => {
                    const animaleEl = document.querySelector(`#${animal.id}`);

                    cameraIndicator();

                    setTimeout(function () {
                        animaleEl.remove();

                        animalFound();
                    }, 1500);
                });
            },
        });
    });
});
