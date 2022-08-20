/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
    let sum = 0;
    let binary = n.toString(2);
    for (const element of binary) {
        if (element === '1') {
            sum++;
        }
    }
    return sum;
};