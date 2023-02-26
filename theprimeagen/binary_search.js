function binary_search(haystack, needle) {
    let lo = 0
    let hi = haystack.length

    do {
        const m = Math.floor(lo + (hi - lo) / 2)
        const v = haystack[m]

        if (v === needle) {
            return true
        } else if (v > needle) {
            hi = m
        } else {
            lo = m + 1
        }
    } while (lo < hi)
    return false
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(binary_search(array, 5)) // true
console.log(binary_search(array, 11)) // false
