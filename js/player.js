function Player(id, name, markerType, markerClass, isPlaying, isWinner) {
    this.id = id,
    this.name = name,
    this.markerType = markerType,
    this.markerClass = markerClass,
    this.isPlaying = isPlaying,
    this.isWinner = false
    if(this.isPlaying) {
        this.id.classList.add("active");
    }
}