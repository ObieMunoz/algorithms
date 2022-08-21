/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let wealthArray = accounts.map(account => account.reduce((prev, cur) => prev + cur, 0))
    return Math.max(...wealthArray)
};