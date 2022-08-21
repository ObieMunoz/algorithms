/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function (mat) {
    let size = mat[0].length;
    let numbers = []
    let gridsCompleted = []
    for (let i = 0; i < size; i++) {
        numbers.push(mat[i][i])
        gridsCompleted.push([i, i])
    }
    for (let i = mat[0].length - 1, j = 0; i >= 0; i--, j++) {
        if (gridsCompleted.filter(arr => arr[0] == i && arr[1] == j).length == 0) numbers.push(mat[i][j])
    }
    return numbers.reduce((prev, cur) => prev + cur, 0)
};