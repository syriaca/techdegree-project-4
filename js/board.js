/* Board properties
> Id
> grid,
> MarkerType,
> MarkerClass
> isPlaying
*/

/* Board Method
> Hover
> Click
*/

function Board() {
    this.players = [];
    this.currentPlayerIndex = 0;
};

Board.prototype.addPlayer = function(player) {
    this.players.push(player);
};


Board.prototype.startPlaying = function(){
    this.updatePlayers();
    let currentPlayer = players[this.currentPlayerIndex];
    currentPlayer.isPlaying = true;
    currentPlayer.id.classList.add("active");

    console.log("play");
    console.log(currentPlayer);
}

Board.prototype.stopPlaying = function(){
    let currentPlayer = players[this.currentPlayerIndex];
    currentPlayer.isPlaying = false;
    if(currentPlayer.id.classList.contains("active")) {
        currentPlayer.id.classList.remove("active");
    } else {
        currentPlayer.id.classList.add("active");
    }

    console.log("stop");
    console.log(currentPlayer);
}

Board.prototype.updatePlayers = function() {
    this.currentPlayerIndex++;
    if(this.currentPlayerIndex === this.players.length) {
        this.currentPlayerIndex = 0;
    }}

Board.prototype.mouseOver = function(players, e) {
    let currentPlayer = players[this.currentPlayerIndex];
    let playerMarker = currentPlayer.markerType;
    e.target.style.backgroundImage = 'url("img/'+playerMarker+'.svg")';
};

Board.prototype.switchPlayer = function(players, e) {
    this.stopPlaying()    
    this.startPlaying();
};

// // Object board
    // collectionToArray(boxCollection, boxArray);

    // let row = [];

    // function test(el) {
    //     let testValue = el.classList;
    //     switch(testValue) {
    //         case "box-filled-1":
    //         break;
    //         case "box-filled-2":
    //         break;
    //         default:
    //         break;
    //     }
    // }

    // for(let i = 0; i < boxArray.length; i++) {
    //     boardObj[i] = {
    //         cell: {
    //             element: boxArray[i],
    //             status: ""
    //         }
    //     }
    // }