function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    if (fastest) {
        redShirtSpeeds = redShirtSpeeds.sort((a, b) => b - a)
        blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => a - b)
    } else {
        redShirtSpeeds = redShirtSpeeds.sort((a, b) => a - b)
        blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => a - b)
    }
    let size = redShirtSpeeds.length;
    let totalSpeeds = [];
    for (let i = 0; i < size; i++) {
        totalSpeeds.push(Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]))
    }
    return totalSpeeds.reduce((prev, current) => prev + current, 0);
}

tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest)
