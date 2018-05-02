function Player(id, name, markerType, markerClass, isPlaying, winClass) {
    this.id = id,
    this.name = name,
    this.markerType = markerType,
    this.markerClass = markerClass,
    this.isPlaying = isPlaying,
    this.winClass = winClass
    if(this.isPlaying) {
        this.id.classList.add("active");
    }
}