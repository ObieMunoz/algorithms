function getNthFib(n) {
    // Write your code here.
    let array = []
    if (n == 0) return array
    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            array.push(i)
        } else array.push(array[array.length - 2] + array[array.length - 1])
    }
    return array[array.length - 1]
}