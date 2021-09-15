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
        notebookPaper.setAttribute('class', 'notebook-paper-right');
        notebook.appendChild(notebookPaper);

        const polaroidContainer = document.createElement('div');
        polaroidContainer.setAttribute('class', 'polaroid-container');
        notebookPaper.appendChild(polaroidContainer);

        const imageEl = document.createElement('img');
        imageEl.setAttribute('class', 'polaroid');
        polaroidContainer.appendChild(imageEl);
        imageEl.src = `assets/ScorePage/${animal.id}.jpg`;

        const imageName = document.createElement('h1');
        imageName.setAttribute('class', 'polaroid-name');
        polaroidContainer.appendChild(imageName);
        imageName.appendChild(document.createTextNode(animal.name));

        const checkBox = document.createElement('div');
        checkBox.setAttribute('class', 'check-container');
        notebookPaper.appendChild(checkBox);

        const greenCheckMark = document.createElement('img');
        greenCheckMark.setAttribute('class', 'green-check-mark');
        checkBox.appendChild(greenCheckMark);
        greenCheckMark.src = 'assets/ScorePage/green-check-mark.png';

        const animalFacts = document.createElement('ul');
        const animalFactHeaders = ['CONSERVATION STATUS: ', 'ECOLOGICAL ROLES: ', 'THREATS ', 'WAYS YOU CAN HELP: '];

        const conservationStatus = document.createElement('li');
        const ecologicalRoles = document.createElement('li');
        const threats = document.createElement('li');
        const waysYouCanHelp = document.createElement('li');

        notebookPaper.appendChild(animalFacts);
        animalFacts.appendChild(conservationStatus);
        animalFacts.appendChild(ecologicalRoles);
        animalFacts.appendChild(threats);
        animalFacts.appendChild(waysYouCanHelp);
        conservationStatus.appendChild(document.createTextNode(animalFactHeaders[0] + animal.conservationStatus));
        ecologicalRoles.appendChild(document.createTextNode(animalFactHeaders[1] + animal.ecologicalRoles));
        threats.appendChild(document.createTextNode(animalFactHeaders[2] + animal.threats));
        waysYouCanHelp.appendChild(document.createTextNode(animalFactHeaders[3] + animal.waysYouCanHelp));
    })
})

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