/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function (root1, root2, arr1 = [], arr2 = []) {
    let result1 = JSON.stringify(dfs(root1, arr1))
    let result2 = JSON.stringify(dfs(root2, arr2))
    return result1 == result2
};

function dfs(root, arr) {
    if (root.left) dfs(root.left, arr)
    if (root.right) dfs(root.right, arr)
    if (!root.left && !root.right) arr.push(root.val)
    return arr
}