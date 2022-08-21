/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = function (arr) {
    let counts = {};
    for (const number of arr) {
        if (counts[number]) counts[number]++;
        else counts[number] = 1;
    }
    let result = Object.entries(counts).filter(array => array[1] / arr.length > 0.25)
    return result[0][0];
};