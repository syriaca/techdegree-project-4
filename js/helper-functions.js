function collectionToArray(collection, targetArray) {
    for (var i = 0; i < collection.length; i++) {
        targetArray.push(collection[i]);
    }
    return targetArray;
}

function elementDisplay(id, type){
    const displayType = id.style.display = type;
    return displayType;
};

// function fillWinTestArrays () {    
//     row1.push(boxArray[0], boxArray[1], boxArray[2]);
//     row2.push(boxArray[3], boxArray[4], boxArray[5]);
//     row3.push(boxArray[6], boxArray[7], boxArray[8]);
//     col1.push(boxArray[0], boxArray[3], boxArray[6]);
//     col2.push(boxArray[1], boxArray[4], boxArray[7]);
//     col3.push(boxArray[2], boxArray[5], boxArray[8]);
//     diag1.push(boxArray[0], boxArray[4], boxArray[8]);
//     diag2.push(boxArray[2], boxArray[4], boxArray[6]);

//     boardObj = {
//         row1: [boxArray[0], boxArray[1], boxArray[2]],
//         row2: [boxArray[3], boxArray[4], boxArray[5]],
//         row3: [boxArray[6], boxArray[7], boxArray[8]],
//         col1: [boxArray[0], boxArray[3], boxArray[6]],
//         col2: [boxArray[1], boxArray[4], boxArray[7]],
//         col3: [boxArray[2], boxArray[5], boxArray[8]],
//         diag1: [boxArray[0], boxArray[4], boxArray[8]],
//         diag2: [boxArray[2], boxArray[4], boxArray[6]]
//     }
// }