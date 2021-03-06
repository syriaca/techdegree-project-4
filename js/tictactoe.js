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
const boardObj = [];
let boxArray = [];
let row1 = [];
let row2 = [];
let row3 = [];
let col1 = [];
let col2 = [];
let col3 = [];
let diag1 = [];
let diag2 = [];

collectionToArray(boxCollection, boxArray);
fillTestArrays();

let board = new Board();
let playerO= new Player(player1, "Player 1", "O", "box-filled-1", true, "screen-win-one");
let playerX = new Player(player2, "Player 2", "X", "box-filled-2", false, "screen-win-two");

board.addPlayer(playerO);
board.addPlayer(playerX);

let players = board.players;

(function(){
    // Event listener on document load
    document.addEventListener('DOMContentLoaded', (e) => {
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
        board.startNewGame();
    });
}());

// Add Event listener on boxes element
for(let i = 0; i < boxArray.length; i++) {
    boxArray[i].addEventListener('mouseover', (e) => {
        board.mouseOver(players, e);
    });
    boxArray[i].addEventListener('mouseout', (e) => {
        e.target.style.backgroundImage = '';
    });
    boxArray[i].addEventListener('click', (e) => {
        if(!e.target.classList.item(1)){
            board.updateBoard(players, e);
        } else {
            e.preventDefault();
        }
    });
};

