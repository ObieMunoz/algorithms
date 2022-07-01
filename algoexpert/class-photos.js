function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights = redShirtHeights.sort((a, b) => b - a)
    blueShirtHeights = blueShirtHeights.sort((a, b) => b - a)
    let size = redShirtHeights.length;
    let result = true;
    for (let i = 0; i < size; i++) {
        if (blueShirtHeights[i] > redShirtHeights[i]) continue;
        else result = false
    }
    if (result == true) return result;
    result = true;
    for (let i = 0; i < size; i++) {
        if (redShirtHeights[i] > blueShirtHeights[i]) continue;
        else result = false;
    }
    return result;
}