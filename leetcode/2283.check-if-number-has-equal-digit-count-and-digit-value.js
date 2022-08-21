/**
 * @param {string} num
 * @return {boolean}
 */
const digitCount = function (num) {
    let counts = {};
    for (const number of num) {
        if (counts[number]) counts[number]++;
        else counts[number] = 1;
    }
    for (let i = 0; i < num.length; i++) {
        if (!counts[i]) counts[i] = 0;
        if (counts[i] != num[i]) return false
    }
    return true;
};