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

function Board(boxes) {
    this.players = [];
    this.boxes = boxes;
    this.currentPlayerIndex = 0;
};

Board.prototype.addPlayer = function(player) {
    this.players.push(player);
};

Board.prototype.updateBoxesStatus = function(e) {
    let currentPlayer = players[this.currentPlayerIndex];
    for(let i = 0; i < this.boxes.length; i++) {
        if(e.target === this.boxes[i].element) {
            console.log("ok")
        }
    }
}

Board.prototype.updatePlayers = function() {
    this.currentPlayerIndex++;
    if(this.currentPlayerIndex === this.players.length) {
        this.currentPlayerIndex = 0;
    }
};

Board.prototype.switchPlayer = function(players, e) {
    this.addMark(players, e);
    this.stopPlaying()    
    this.startPlaying();
};

Board.prototype.startPlaying = function() {
    this.updatePlayers();
    let currentPlayer = players[this.currentPlayerIndex];
    currentPlayer.isPlaying = true;
    currentPlayer.id.classList.add("active");

    console.log("play");
    console.log(currentPlayer);
};

Board.prototype.stopPlaying = function() {
    let currentPlayer = players[this.currentPlayerIndex];
    currentPlayer.isPlaying = false;
    if(currentPlayer.id.classList.contains("active")) {
        currentPlayer.id.classList.remove("active");
    } else {
        currentPlayer.id.classList.add("active");
    }

    console.log("stop");
    console.log(currentPlayer);
};

Board.prototype.addMark = function(players, e) {
    let currentPlayer = players[this.currentPlayerIndex];
    e.target.classList.add(currentPlayer.markerClass);
    e.target.setAttribute('data-marker', currentPlayer.markerType);
    board.updateBoxesStatus(e)
};

Board.prototype.mouseOver = function(players, e) {
    if(!e.target.classList.item(2)) {
        let currentPlayer = players[this.currentPlayerIndex];
        let playerMarker = currentPlayer.markerType;
        e.target.style.backgroundImage = 'url("img/'+playerMarker+'.svg")';
    }
};

