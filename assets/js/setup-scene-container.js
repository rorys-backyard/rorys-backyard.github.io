document.addEventListener("DOMContentLoaded", () => {
    $.getJSON('./assets/data/animals.json', (animals) => {
        const aMarker = document.querySelector('#animated-marker');
        // const aScene = document.querySelector('a-scene');
        // const aMarker = document.createElement('a-marker');

        animals.forEach((animal) => {
            const { aImageAttributes, id, name, rotation, scale, position } = animal;

            const aImage = document.createElement('a-image');
console.log(id);
            aImage.setAttribute(id, '');
            aImage.setAttribute('id', id);
            aImage.setAttribute('src', `./assets/images/${id}.png`);
            aImage.setAttribute('alt', name);

            for (const attribute in aImageAttributes) {
                const value = aImageAttributes[attribute];


                aImage.setAttribute(attribute, value)
            }
            
            aMarker.appendChild(aImage);
        })

        // aScene.appendChild(aMarker)
    })
});