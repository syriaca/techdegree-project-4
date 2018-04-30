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

// Object board
collectionToArray(boxCollection, boxArray);

let row = [];

function test(el) {
    let testValue = el.classList;
    switch(testValue) {
        case "box-filled-1":
        break;
        case "box-filled-2":
        break;
        default:
        break;
    }
}

let row1 = boxArray.slice(0,3);
let row2 = boxArray.slice(3,6);
let row3 = boxArray.slice(6,9);
let col1 = [];
let col2 = [];
let col3 = [];
let diag1 = [];
let diag2 = [];

// for(let i = 0; i < boxArray.length; i++) {
//     if (i!=0 && i % 2 == 0) {
//         console.log(i);
//     }
//     boardObj[i] = {
//         cell: {
//             element: boxArray[i],
//             isFilled: false,
//             marker: ""
//         }
//     }
// }

console.log(row1);
console.log(row2);
console.log(row3);


let board = new Board(boxArray);
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
        if(!e.target.classList.item(2)){
            board.switchPlayer(players, e);
        } else {
            e.preventDefault();
        }
    });
};