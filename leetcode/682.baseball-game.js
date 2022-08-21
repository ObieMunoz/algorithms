/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let result = 0;
    let scores = [];
    for (let i = 0; i < ops.length; i++) {
        switch (ops[i]) {
            case '+':
                scores.push(scores[scores.length - 1] + scores[scores.length - 2])
                break;
            case 'D':
                scores.push(scores[scores.length - 1] * 2)
                break;
            case 'C':
                scores.pop();
                break;
            default:
                scores.push(parseInt(ops[i]));
        }
    }
    return scores.reduce((prev, cur) => prev + cur, 0)
};