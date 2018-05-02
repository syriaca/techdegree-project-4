function Board(boxes) {
    this.players = [];
    this.equalityArray = [];
    this.boxes = boxes;
    this.currentPlayerIndex = 0;
    this.drawGame = true;
    this.hasWinner = false;
    this.winner;
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

// Add / remove player marker on mousein out on cell background
Board.prototype.mouseOver = function(players, e) {
    if(!e.target.classList.item(1)) {
        let currentPlayer = players[this.currentPlayerIndex];
        let playerMarker = currentPlayer.markerType;
        e.target.style.backgroundImage = 'url("img/'+playerMarker+'.svg")';
    }
};

Board.prototype.testEquality = function(arr) {
    this.equalityArray = [];
    let currentPlayer = players[this.currentPlayerIndex];

    for(let i = 0; i < arr.length; i++) {            
        this.equalityArray.push(arr[i].getAttribute("data-marker"));
    }

    if(this.equalityArray.every( (val, i, arr) => val === arr[0] && val != null && val != " ")) {
        this.drawGame = false;
        this.hasWinner = true;
        this.winner = currentPlayer;
        this.exitGame(currentPlayer); 
    } else if(boxArray.every((val, i, arr) => val.hasAttribute("data-marker"))) {
        this.exitGame(); 
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

Board.prototype.exitGame = function(){
    elementDisplay(boardScreen, 'none');
    elementDisplay(finishScreen, 'block');
    if(this.winner) {
        finishScreen.classList.add(this.winner.winClass);
        console.log(this.winner);
        console.log(this.equalityArray);
    } else {
        console.log("draw");
    }
}

Board.prototype.newGame = function(){
    elementDisplay(finishScreen, 'none');
    elementDisplay(boardScreen, 'block');
    fillTestArrays();

    finishScreen.classList.remove(this.winner.winClass);
    this.hasWinner = false;
    this.drawGame = false;
    this.equalityArray = [];
    this.winner = false;

    for(let i = 0; i < players.length; i++) {
        players[i].isWinner = false;
    }
    for(let i = 0; i < boxArray.length; i++) {            
        boxArray[i].setAttribute("data-marker", " ");
        boxArray[i].classList.remove("box-filled-1","box-filled-2");
    }
}
