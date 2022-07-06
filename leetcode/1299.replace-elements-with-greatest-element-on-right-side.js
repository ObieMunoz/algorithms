function replaceElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.max.apply(null, arr.slice(i + 1, arr.length))
    }
    arr[arr.length - 1] = -1
    return arr;
}