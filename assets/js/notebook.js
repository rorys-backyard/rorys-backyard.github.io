// First step is to get animals data
// Select notebook element
// Loop throught animals array
// Next to create multiple elements, add attributes/text/etc. and append into each other
// Append final pieces to notebook element

$.getJSON('./assets/data/animals.json', (animals) => {
    const notebook = document.querySelector('#notebook');

    animals.forEach((animal) => {
        // console.log({ animal });

        const notebookPaper = document.createElement('div');
        notebookPaper.setAttribute('class', 'notebook-paper');
        notebook.appendChild(notebookPaper);

        const polaroidContainer = document.createElement('div');
        polaroidContainer.setAttribute('class', 'polaroid-container');
        notebookPaper.appendChild(polaroidContainer);
        const imageEl = document.createElement('img');
        imageEl.src = `assets/ScorePage/${animal.id}.jpg`;

        const animalFacts = document.createElement('ul');
        animalFacts.setAttribute('class', 'animal-facts');

        const animalLists = [{
                key: 'conservationStatus',
                listName: 'conservation status',
            },
            {
                key: 'ecologicalRoles',
                listName: 'ecological roles',
            },
            {
                key: 'threats',
                listName: 'threats',
            },
            {
                key: 'waysYouCanHelp',
                listName: 'ways you can help',
            },
        ];

        animalLists.forEach((item) => {
            const liEl = document.createElement('li');
            const boldEl = document.createElement('b');
            const animalTextEl = document.createElement('span');

            const allCapText = item.listName.toUpperCase();
            const boldText = allCapText + ': ';

            const animalText = animal[item.key];

            boldEl.innerText = boldText;
            animalTextEl.innerText = animalText;

            liEl.appendChild(boldEl);
            liEl.appendChild(animalTextEl);

            animalFacts.appendChild(liEl);
        });

        notebookPaper.appendChild(animalFacts);

        imageEl.setAttribute('class', 'polaroid');
        polaroidContainer.appendChild(imageEl);
        imageEl.src = `assets/ScorePage/${animal.id}.jpg`;

        const imageName = document.createElement('div');
        imageName.setAttribute('class', 'polaroid-name');
        imageName.innerText = animal.name;

        const nameCheckbox = document.createElement('div');
        nameCheckbox.setAttribute('class', 'name-checkbox');

        const greenCheckMark = document.createElement('img');
        greenCheckMark.setAttribute('class', 'green-check-mark');
        greenCheckMark.setAttribute('data-animal-id', animal.id);
        greenCheckMark.src = 'assets/ScorePage/green-check-mark.png';

        nameCheckbox.appendChild(imageName);
        nameCheckbox.appendChild(greenCheckMark);

        polaroidContainer.appendChild(nameCheckbox);
    });
});


{
    /* <div id="notebook">

    <div class='notebook-paper-left'>
        <div class='polaroid-container-right'>
            <img src='assets/ScorePage/turtleinsert.jpg' class='polaroid'>
            <h1 class='polaroid-name'>EASTERN BOX TURTLE</h1>
        </div>
        <ul>
            <li><b>Conservation Status:</b> Vulnerable</li>
            <li><b>Ecological Role:</b> Box turtles act as seed dispersers for many plants.</li>
            <li><b>Threats:</b> Habitat loss, car collisions, and the taking of wild individuals to supply the pet trade.</li>
            <li><b>Ways You Can Help:</b> Research any animal you are interested in owning as a pet before you buy it.</li>
        </ul>
    </div>
    </div> */
}

//         // This is the created element
//         // <div></div>

//         console.log({ animal });
//         const notebookPaperEl = document.createElement('div');
//         // addAttribute('attribute', 'value');
//         // Think about true/false, left/right
//         notebookPaperEl.setAttribute('class', 'notebook-paper');
//         notebook.appendChild(notebookPaperEl);

//         const animalFacts = document.createElement('ul');
//         animalFacts.setAttribute('class', 'notebook-paper');
//         notebookPaperEl.appendChild(animalFacts);
//         const liEl = document.createElement('li');
//         liEl.setAttribute('class', 'notebook-paper');

//         const polaroidContainerEl = document.createElement('div');
//         polaroidContainerEl.setAttribute('class', 'polaroid-container')

//         // End Result
//         // <div className="notebook-paper-left">
//         //     <div className="polaroid-container-right">
//         //
//         //     </div>
//         // </div>

//         const imgEl = document.createElement('img');
//         imgEl.setAttribute('class', 'polaroid')
//             // imgEl.setAttribute('img', `assets/ScorePage/${id}.jpg`)

//         notebookPaperEl.appendChild(polaroidContainerEl)

//         polaroidContainerEl.appendChild(imgEl)
//     })
// })