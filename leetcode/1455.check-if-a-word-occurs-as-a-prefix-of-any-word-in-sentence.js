/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = function (sentence, searchWord) {
    let words = sentence.split(' ')
    let result = words.filter(word => word.startsWith(searchWord))[0]
    if (!result) return -1
    return words.findIndex((word) => word === result) + 1
};