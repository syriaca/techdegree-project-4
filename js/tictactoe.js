const boardScreen = document.getElementById("board");
const startScreen = document.getElementById("start");

function elementDisplay(id, type){
    const displayType = id.style.display = type;
    return displayType;
};

(function(){
    document.addEventListener("DOMContentLoaded", (e) => {
        elementDisplay(startScreen, "block");
        elementDisplay(boardScreen, "none");
    });    
}());

