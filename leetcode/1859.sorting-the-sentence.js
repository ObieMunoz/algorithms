/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function (s) {
    let words = s.split(' ')
    words.sort((a, b) => parseInt(a.slice(-1)) - parseInt(b.slice(-1)))
    words = words.map(word => word.slice(0, -1)).join(' ')
    return words;
};