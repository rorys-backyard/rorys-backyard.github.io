function closeNav() {
    document.getElementById('myNav').style.width = '0%';
}

function openNav() {
    document.getElementById('endgame').style.width = '100%';

    if (score < maximumAnimals) {
        if (score === 1) {
            finalScore.innerHTML = score + ' ANIMAL';
        } else {
            finalScore.innerHTML = score + ' ANIMALS';
        }
    } else {
        finalScore.innerHTML = 'ALL THE ANIMALS';
    }
}
 