// constraints:
//  1 <= s.length <= 2 * 10^5
//  s consists of only printable ASCII characters

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let t = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    let z = t.split('').reverse().join('').toLowerCase();
    return t == z
};