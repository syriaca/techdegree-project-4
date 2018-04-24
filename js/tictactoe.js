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

    let row = [];
    

    for(let i = 0; i < boxArray.length; i++) {
        if(i % 3 == 0) {
            row[i] =  boxArray.slice(0, 3);
            console.log(row[i]);
        }

        boardObj[i] = {
            cell: {
                element: boxArray[i],
                status: true ? 'yes' : ' ' 
            }
        }
    }
    
}());

