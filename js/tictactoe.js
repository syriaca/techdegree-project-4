const boardScreen = document.getElementById('board');
const startScreen = document.getElementById('start');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const startGameButton = document.querySelector('#start .button')
const boxes =  document.querySelector('.boxes');
const box = document.querySelector('.box');
const boxCollection = document.querySelectorAll('.box');
const boardObj = [];
let boxArray = [];

let board = new Board();
let playerO= new Player(player1, "Jean-Yves", "O", "box-filled-1", true);
let playerX = new Player(player2, "Théo", "X", "box-filled-2", false);

board.addPlayer(playerO);
board.addPlayer(playerX);

let players = board.players;

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
        board.mouseOver(players, e);
    });
    boxCollection[i].addEventListener('mouseout', (e) => {
        e.target.style.backgroundImage = '';
    });
    boxCollection[i].addEventListener('click', (e) => {
        if(!e.target.classList.item(1)){
            board.switchPlayer(players, e);
        } else {
            e.preventDefault();
        }
    });
};