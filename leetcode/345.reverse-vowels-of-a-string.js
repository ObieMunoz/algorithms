/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let foundVowels = [];
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) foundVowels.push(s[i])
    }
    foundVowels = foundVowels.reverse();
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            result += foundVowels[0]
            foundVowels.shift();
        } else result += s[i]
    }
    return result;
};