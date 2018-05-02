const boardScreen = document.getElementById('board');
const startScreen = document.getElementById('start');
const finishScreen = document.getElementById('finish');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const startGameButton = document.querySelector('#start .button')
const newGameButton = document.querySelector('#finish .button')
const boxes =  document.querySelector('.boxes');
const box = document.querySelector('.box');
const message = document.querySelector('.message');
const boxCollection = document.querySelectorAll('.box');
let boxArray = [];
collectionToArray(boxCollection, boxArray);

let boardObj = {
    row1: [boxArray[0], boxArray[1], boxArray[2]],
    row2: [boxArray[3], boxArray[4], boxArray[5]],
    row3: [boxArray[6], boxArray[7], boxArray[8]],
    col1: [boxArray[0], boxArray[3], boxArray[6]],
    col2: [boxArray[1], boxArray[4], boxArray[7]],
    col3: [boxArray[2], boxArray[5], boxArray[8]],
    diag1: [boxArray[0], boxArray[4], boxArray[8]],
    diag2: [boxArray[2], boxArray[4], boxArray[6]]
};

// let row1 = [];
// let row2 = [];
// let row3 = [];
// let col1 = [];
// let col2 = [];
// let col3 = [];
// let diag1 = [];
// let diag2 = [];

let board = new Board();
let playerO= new Player(player1, "Jean-Yves", "O", "box-filled-1", true, "screen-win-one");
let playerX = new Player(player2, "Théo", "X", "box-filled-2", false, "screen-win-two");

board.addPlayer(playerO);
board.addPlayer(playerX);

let players = board.players;

(function(){
    // Event listener on document load
    document.addEventListener('DOMContentLoaded', (e) => {        
        // fillWinTestArrays();
        elementDisplay(startScreen, 'block');
        elementDisplay(boardScreen, 'none');
        elementDisplay(finishScreen, 'none');
    });

    // Event listener on start button click
    startGameButton.addEventListener('click', (e) => {
        elementDisplay(startScreen, 'none');
        elementDisplay(boardScreen, 'block');
    });
    
    newGameButton.addEventListener('click', (e) => {
        board.newGame();
    });
}());

for(let i = 0; i < boxCollection.length; i++) {
    boxCollection[i].addEventListener('mouseover', (e) => {
        board.mouseOver(players, e);
    });
    boxCollection[i].addEventListener('mouseout', (e) => {
        e.target.style.backgroundImage = '';
    });
    boxCollection[i].addEventListener('click', (e) => {
        if(!e.target.classList.item(1)){
            board.updateBoard(players, e);
        } else {
            e.preventDefault();
        }
    });
};

