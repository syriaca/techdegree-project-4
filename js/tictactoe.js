const boardScreen = document.getElementById('board');
const startScreen = document.getElementById('start');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player1');
const startGameButton = document.querySelector('#start .button')
const boxes =  document.querySelector('.boxes');
const box = document.querySelector('.box');
const boxCollection = document.querySelectorAll('.box');
const boardObj = [];
let boxArray = [];

let board = new Board();
let playerX = new Player(player1, "Jean-Yves", "X", "box-filled-1", true);
let playerO = new Player(player2, "Jean-Yves", "O", "box-filled-2", false);

board.addPlayer(playerX);
board.addPlayer(playerO);

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
    
}());

for(let i = 0; i < boxCollection.length; i++) {
    boxCollection[i].addEventListener('mouseover', (e) => {
        board.checkPlayer(board.players);
    });
};