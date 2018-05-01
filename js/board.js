function Board(boxes) {
    this.players = [];
    this.boxes = boxes;
    this.currentPlayerIndex = 0;
};

Board.prototype.addPlayer = function(player) {
    this.players.push(player);
};

Board.prototype.updatePlayers = function() {
    this.currentPlayerIndex++;
    if(this.currentPlayerIndex === this.players.length) {
        this.currentPlayerIndex = 0;
    }
};

Board.prototype.updateBoard = function(players, e) {
    this.addMark(players, e);
    this.stopPlaying()    
    this.startPlaying();
};

Board.prototype.startPlaying = function() {
    this.updatePlayers();
    let currentPlayer = players[this.currentPlayerIndex];
    currentPlayer.isPlaying = true;
    currentPlayer.id.classList.add("active");
    // console.log("play");
    // console.log(currentPlayer);
};

Board.prototype.stopPlaying = function() {
    let currentPlayer = players[this.currentPlayerIndex];
    currentPlayer.isPlaying = false;
    if(currentPlayer.id.classList.contains("active")) {
        currentPlayer.id.classList.remove("active");
    } else {
        currentPlayer.id.classList.add("active");
    }
    // console.log("stop");
    // console.log(currentPlayer);
};

Board.prototype.addMark = function(players, e) {
    let currentPlayer = players[this.currentPlayerIndex];
    let currentPlayerMarkerClass = currentPlayer.markerClass;
    let currentPlayerMarkerType = currentPlayer.markerType;
    e.target.classList.add(currentPlayerMarkerClass);
    e.target.setAttribute('data-marker', currentPlayerMarkerType);
    this.winTest(currentPlayer, e)
};

Board.prototype.winTest = function(currentPlayer, e) {
    let winner =  false;
    function testRow(arr){
        let winRow = [];
        for(let i = 0; i < arr.length; i++) {            
            winRow.push(arr[i].getAttribute("data-marker"));
        }
        console.log(winRow);

        if(winRow.every( (val, i, arr) => val === arr[0] && val != null )) {
            let winner = true;
            currentPlayer.isWinner = winner;
            console.log(currentPlayer);
        }

    }
    testRow(row1);
    testRow(row2);
    testRow(row3);

}

Board.prototype.mouseOver = function(players, e) {
    if(!e.target.classList.item(1)) {
        let currentPlayer = players[this.currentPlayerIndex];
        let playerMarker = currentPlayer.markerType;
        e.target.style.backgroundImage = 'url("img/'+playerMarker+'.svg")';
    }
};

