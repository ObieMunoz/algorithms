function isMonotonic(array) {
    if (array.length < 2) return true;
    if (array.length === 2) {
        if (array[0] != array[1]) return true
    } else {
        let decreasingMonotonic = true;
        let increasingMonotonic = true;
        for (let i = 0; i < array.length - 1; i++) {
            let dX = i + 1;
            if (array[i] > array[dX]) increasingMonotonic = false;
            if (array[i] < array[dX]) decreasingMonotonic = false;
        }
        return increasingMonotonic || decreasingMonotonic
    }
}