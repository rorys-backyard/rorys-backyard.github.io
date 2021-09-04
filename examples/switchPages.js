const button = document.querySelector('#start-game');

let currentPage = 'homepage';

button.addEventListener('click', () => {
    const currentPage = document.querySelector('.show-page')
    const hiddenPage = document.querySelector('.hide-page')

    currentPage.classList.remove('show-page');
    currentPage.classList.add('hide-page');

    hiddenPage.classList.add('show-page')
    hiddenPage.classList.remove('hide-page')
})