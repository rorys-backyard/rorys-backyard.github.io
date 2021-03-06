let esValidation = /es/.test(navigator.language);
let langFile;
switch (esValidation) {
  case true:
    langFile = "animales";
    break;
  default:
    langFile = "animals";
};

fetch(`./assets/data/${langFile}.json`)
  .then((response) => response.json())
  .then((animals) => {
    const notebook = document.querySelector("#notebook");

    animals.forEach((animal) => {
      const notebookPaper = document.createElement("div");
      notebookPaper.setAttribute("class", "notebook-paper");
      notebook.appendChild(notebookPaper);

      const polaroidContainer = document.createElement("div");
      polaroidContainer.setAttribute("class", "polaroid-container");
      notebookPaper.appendChild(polaroidContainer);
      const imageEl = document.createElement("img");
      imageEl.src = `assets/ScorePage/${animal.id}.jpg`;

      const animalFacts = document.createElement("ul");
      animalFacts.setAttribute("class", "animal-facts");

      const animalListsEn = [
        {
          key: "conservationStatus",
          listName: "conservation status",
        },
        {
          key: "ecologicalRoles",
          listName: "ecological roles",
        },
        {
          key: "threats",
          listName: "threats",
        },
        {
          key: "waysYouCanHelp",
          listName: "ways you can help",
        }
      ];

      const animalListsEs = [
        {
          key: "conservationStatus",
          listName: "estado de conservación",
        },
        {
          key: "ecologicalRoles",
          listName: "rol ecológico",
        },
        {
          key: "threats",
          listName: "amenazas",
        },
        {
          key: "waysYouCanHelp",
          listName: "formas en las que puedes ayudar",
        }
      ];

      let animalLists;
      switch (esValidation) {
        case true:
          animalLists = animalListsEs;
          break;
        default:
          animalLists = animalListsEn;
      };

      animalLists.forEach((item) => {
        const liEl = document.createElement("li");
        const boldEl = document.createElement("b");
        const animalTextEl = document.createElement("span");

        const allCapText = item.listName.toUpperCase();
        const boldText = allCapText + ": ";

        const animalText = animal[item.key];

        boldEl.innerText = boldText;
        animalTextEl.innerText = animalText;
        boldEl.setAttribute('class', 'animal-facts-headers');

        liEl.appendChild(boldEl);
        liEl.appendChild(animalTextEl);

        animalFacts.appendChild(liEl);
      });

      notebookPaper.appendChild(animalFacts);

      imageEl.setAttribute("class", "polaroid");
      polaroidContainer.appendChild(imageEl);
      imageEl.src = `assets/ScorePage/${animal.id}.jpg`;

      const imageName = document.createElement("div");
      imageName.setAttribute("class", "polaroid-name");
      imageName.innerText = animal.name;

      const nameCheckbox = document.createElement("div");
      nameCheckbox.setAttribute("class", "name-checkbox");

      const greenCheckMark = document.createElement("img");
      greenCheckMark.setAttribute("class", "green-check-mark");
      greenCheckMark.setAttribute("data-animal-id", animal.id);
      greenCheckMark.src = "assets/ScorePage/green-check-mark.png";

      nameCheckbox.appendChild(imageName);
      nameCheckbox.appendChild(greenCheckMark);

      polaroidContainer.appendChild(nameCheckbox);
    });
  });
