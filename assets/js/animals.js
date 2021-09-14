$.getJSON('./assets/data/animals.json', (animals) => {
    console.log({ animals });

    const animalMarker = document.querySelector('#animal-marker');

    const notebookEl = document.querySelector('#notebook');
    let notebookPosition = true;
    let polaroidPosition = true;

    animals.forEach((animal) => {
        const {
            name,
            conservationStatus,
            echologicalRole,
            threats,
            waysYouCanHelp,
        } = animal;

        const notebookDirection = notebookPosition ? 'left' : 'right';
        const polaroidDirection = polaroidPosition ? 'right' : 'left';
        notebookPosition = !notebookPosition;
        polaroidPosition = !polaroidPosition;

        const notebookPaperEl = document.createElement('div');
        notebookPaperEl.setAttribute(
            'class',
            `notebook-paper-${notebookDirection}`
        );

        const polaroidEl = document.createElement('div');
        polaroidEl.setAttribute(
            'class',
            `polaroid-container-${polaroidDirection}`
        );

        const animalImg = document.createElement('img');
        animalImg.setAttribute('class', 'polaroid');
        animalImg.setAttribute('img', `../images/${id}.jpg`);

        const animalHeader = document.createElement('h1');
        animalHeader.setAttribute('class', 'polaroid-name');
        animalHeader.innerText = name.toUpperCase();

        polaroidEl.appendChild(animalImg);
        polaroidEl.appendChild(animalHeader);

        const factsList = document.createElement('ul');

        [{
                header: 'Conservation Status',
                fact: conservationStatus,
            },
            {
                header: 'Echological Role',
                fact: echologicalRole,
            },
            {
                header: 'Threats',
                fact: threats,
            },
            {
                header: 'Ways You Can Help',
                fact: waysYouCanHelp,
            },
        ].forEach(({ header, fact }) => {
            const factEl = document.createElement('li');

            const headerEl = document.createElement('b');
            headerEl.innerText = `${header}: `;

            factEl.appendChild(headerEl);
            factEl.appendChild(fact);

            factsList.appendChild(factEl);
        });

        notebookPaperEl.appendChild(polaroidEl);
        notebookPaperEl.appendChild(factsList);

        notebookEl.appendChild(notebookPaperEl);
    });

    animals.forEach((animal) => {
        const { id, name, rotation, scale, position } = animal;
        const aImage = document.createElement('a-image');

        aImage.setAttribute('id', id);
        aImage.setAttribute('src', `../images/${id}.png`);
        aImage.setAtribute('alt', name);
        aImage.setAtribute('rotation', rotation);
        aImage.setAtribute('scale', scale);
        aImage.setAtribute('position', position);

        animalMarker.append(aImage);
    });

    animals.forEach((animal) => {
        const { id } = animal;

        AFRAME.registerComponent(id, {
            init: () => {
                this.el.addEventListenver('click', (e) => {
                    const animalEl = document.querySelector(`#${id}`);
                    cameraIndicator();
                    setTimeout(() => {
                        animalEl.remove();
                        animalFound();
                    });
                });
            },
        });
    });
});