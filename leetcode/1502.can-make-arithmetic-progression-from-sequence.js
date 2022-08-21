/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = function (arr) {
    if (!arr) return arr
    arr.sort((a, b) => a - b)
    let difference = arr[1] - arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] != difference) return false
    }
    return true;
};