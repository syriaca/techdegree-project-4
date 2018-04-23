const boardScreen = document.getElementById('board');
const startScreen = document.getElementById('start');
const startGameButton = document.querySelector('#start .button')
const boxes =  document.querySelector('.boxes');
const box = document.querySelector('.box');
const boxCollection = document.querySelectorAll('.box');
let boxArray = [];
const boardObj = [];

(function(){

    // Event listener on document load
    document.addEventListener('DOMContentLoaded', (e) => {
        elementDisplay(startScreen, 'block');
        elementDisplay(boardScreen, 'none');
    });

    // Event listener on start button click
    startGameButton.addEventListener('click', (e) => {
        elementDisplay(startScreen, 'none');
        elementDisplay(boardScreen, 'block');
    });

    // Object board
    collectionToArray(boxCollection, boxArray);
    console.log(boxArray);

    for(var i = 0; i < boxArray.length; i++) {
        boardObj[i] = {
            cell: {
                element: boxArray[i],
                status: true ? 'yes' : ' ' 
            }
        }
        boardObj.slice(i % 3 == 0);
    }

    console.log(boardObj);
}());

