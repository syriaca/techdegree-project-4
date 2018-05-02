// Function that iterate trough an html collection and transform it in a simple array
function collectionToArray(collection, targetArray) {
    for (var i = 0; i < collection.length; i++) {
        targetArray.push(collection[i]);
    }
    return targetArray;
}

// Function to hide or show an element in the dom
function elementDisplay(id, type){
    const displayType = id.style.display = type;
    return displayType;
};

//Function to fill all arrays to test in order to determine if the actual player is winning or if it is a tie game...
// Todo: transform that with a "grid object"
function fillTestArrays () {    
    row1.push(boxArray[0], boxArray[1], boxArray[2]);
    row2.push(boxArray[3], boxArray[4], boxArray[5]);
    row3.push(boxArray[6], boxArray[7], boxArray[8]);
    col1.push(boxArray[0], boxArray[3], boxArray[6]);
    col2.push(boxArray[1], boxArray[4], boxArray[7]);
    col3.push(boxArray[2], boxArray[5], boxArray[8]);
    diag1.push(boxArray[0], boxArray[4], boxArray[8]);
    diag2.push(boxArray[2], boxArray[4], boxArray[6]);
}