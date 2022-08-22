/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(root, array = []) {
    let ordered = dfs(root, array)
    let check = [...ordered].sort((a,b) => a - b)
    for (let i = 1; i < ordered.length; i++) {
        if(ordered[i] == ordered[i - 1]) return false
    }
    return JSON.stringify(ordered) == JSON.stringify(check)
};

function dfs(root, array) {
    if(!root) return array;
    dfs(root.left, array)
    array.push(root.val)
    dfs(root.right, array)
    return array
}
