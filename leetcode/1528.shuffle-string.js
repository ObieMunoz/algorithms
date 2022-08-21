/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function (s, indices) {
    let result = [];
    result.length = indices.length;
    for (let i = 0; i < indices.length; i++) {
        result[indices[i]] = s[i]
    }
    return result.join('')
};