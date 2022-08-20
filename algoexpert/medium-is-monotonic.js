function isMonotonic(array) {
    let decreasingMonotonic = true;
    let increasingMonotonic = true;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) increasingMonotonic = false;
        if (array[i] < array[i + 1]) decreasingMonotonic = false;
    }

    return increasingMonotonic || decreasingMonotonic
}