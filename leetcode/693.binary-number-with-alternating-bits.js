/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = function (n) {
    let bin = n.toString(2);
    for (let i = 0; i < bin.length - 1; i++) {
        if (bin[i] == bin[i + 1]) return false
    }
    return true;
};