const boardScreen = document.getElementById('board');
const startScreen = document.getElementById('start');
const startGameButton = document.querySelector('#start .button')

function elementDisplay(id, type){
    const displayType = id.style.display = type;
    return displayType;
};

(function(){
    document.addEventListener('DOMContentLoaded', (e) => {
        elementDisplay(startScreen, 'block');
        elementDisplay(boardScreen, 'none');
    });

    startGameButton.addEventListener('click', (e) => {
        elementDisplay(startScreen, 'none');
        elementDisplay(boardScreen, 'block');
    });

}());

