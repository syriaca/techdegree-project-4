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