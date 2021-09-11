document.addEventListener('DOMContentLoaded', () => {
    $.getJSON('./assets/data/animals.json', (animals) => {
        const aMarker = document.querySelector('#animated-marker');

        animals.forEach((animal) => {
            const { aImageAttributes, id, name } = animal;

            const aImage = document.createElement('a-image');

            aImage.setAttribute(id, '');
            aImage.setAttribute('id', id);
            aImage.setAttribute('src', `./assets/images/${id}.png`);
            aImage.setAttribute('alt', name);

            // Research: Loops for Objects
            for (const attribute in aImageAttributes) {
                const value = aImageAttributes[attribute];

                aImage.setAttribute(attribute, value);
            }

            aMarker.appendChild(aImage);
        });
    });
});
