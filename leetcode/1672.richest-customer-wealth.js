/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
    let wealthArray = accounts.map(account => account.reduce((prev, cur) => prev + cur, 0))
    return Math.max(...wealthArray)
};