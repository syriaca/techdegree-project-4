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
    this.actualPlayerIndex = 0;
}

Board.prototype.addPlayer = function(player){
    this.players.push(player);
};

Board.prototype.checkPlayer = function(players) {
        if(players[this.actualPlayerIndex].isPlaying === true) {
            console.log("true");
        }     
}

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