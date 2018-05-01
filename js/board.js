function Board(boxes) {
    this.players = [];
    this.boxes = boxes;
    this.currentPlayerIndex = 0;
};


// Push players to the players Array
Board.prototype.addPlayer = function(player) {
    this.players.push(player);
};

// Update currently playing player index
Board.prototype.updatePlayersIndex = function() {
    this.currentPlayerIndex++;
    if(this.currentPlayerIndex === this.players.length) {
        this.currentPlayerIndex = 0;
    }
};

// Update the board by adding marker and switching between players
Board.prototype.updateBoard = function(players, e) {
    this.switchPlayer(players, e);
};

// Switch between the players (when on add a mark, the other can begin to play)
Board.prototype.switchPlayer = function(players, e) {
    this.addMark(players, e);
    this.winTest();
    this.stopPlaying()    
    this.startPlaying();
}

Board.prototype.startPlaying = function() {
    this.updatePlayersIndex();
    let currentPlayer = players[this.currentPlayerIndex];
    currentPlayer.isPlaying = true;
    currentPlayer.id.classList.add("active");
};

Board.prototype.stopPlaying = function() {
    let currentPlayer = players[this.currentPlayerIndex];
    currentPlayer.isPlaying = false;
    if(currentPlayer.id.classList.contains("active")) {
        currentPlayer.id.classList.remove("active");
    } else {
        currentPlayer.id.classList.add("active");
    }
};

Board.prototype.addMark = function(players, e) {
    let currentPlayer = players[this.currentPlayerIndex];
    let currentPlayerMarkerClass = currentPlayer.markerClass;
    let currentPlayerMarkerType = currentPlayer.markerType;
    e.target.classList.add(currentPlayerMarkerClass);
    e.target.setAttribute('data-marker', currentPlayerMarkerType);
};

Board.prototype.testEquality = function(arr) {
    let equalityArray = [];
    let currentPlayer = players[this.currentPlayerIndex];

    for(let i = 0; i < arr.length; i++) {            
        equalityArray.push(arr[i].getAttribute("data-marker"));
    }
    console.log(equalityArray);

    if(equalityArray.every( (val, i, arr) => val === arr[0] && val != null )) {
        isWinner = true;
        currentPlayer.isWinner = isWinner;
        gameEnd = true;
        if (gameEnd) {
            console.log(currentPlayer);
        }
    }
}

Board.prototype.winTest = function() {
    this.testEquality(row1);
    this.testEquality(row2);
    this.testEquality(row3);
    this.testEquality(col1);
    this.testEquality(col2);
    this.testEquality(col3);
    this.testEquality(diag1);
    this.testEquality(diag2);
}


// Add / remove player marker on mousein out on cell background
Board.prototype.mouseOver = function(players, e) {
    if(!e.target.classList.item(1)) {
        let currentPlayer = players[this.currentPlayerIndex];
        let playerMarker = currentPlayer.markerType;
        e.target.style.backgroundImage = 'url("img/'+playerMarker+'.svg")';
    }
};

