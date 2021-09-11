document.addEventListener("DOMContentLoaded", () => {
    $.getJSON('./assets/data/animals.json', (animals) => {
        const aMarker = document.querySelector('#animated-marker');

        animals.forEach((animal) => {
            const { id, name, rotation, scale, position } = animal;
            const aImage = document.createElement('a-image');

            aImage.setAttribute(id, '');
            aImage.setAttribute('id', id);
            aImage.setAttribute('src', `./assets/images/${id}.png`);
            aImage.setAttribute('alt', name);
            aImage.setAttribute('rotation', rotation);
            aImage.setAttribute('scale', scale);
            aImage.setAttribute('postition', position);

            aMarker.append(aImage);
        })
    })
});