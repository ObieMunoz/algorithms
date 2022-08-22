/**
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = function (colors) {
    let left = 0;
    let right = 1;
    let maxSoFar = 0;
    while (left < colors.length - 1) {
        if (right == colors.length) {
            right = 0;
            left++;
        }
        if (colors[right] != colors[left] && right - left > maxSoFar) maxSoFar = right - left
        else {
            right++
        }
    }
    return maxSoFar;
};
