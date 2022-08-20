/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function (n) {
    if (n === 0) return false;
    if (n === 1) return true;
    if (n > 1 && n < 4) return false;
    while (n % 4 === 0 && n != 4) {
        n = n / 4;
    }
    return n == 4;
};