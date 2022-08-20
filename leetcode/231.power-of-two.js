/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
    if (n === 0) return false;
    if (n === 1) return true;
    if (n > 1 && n < 2) return false;
    while (n % 2 === 0 && n != 2) {
        n = n / 2;
    }
    return n == 2;
};