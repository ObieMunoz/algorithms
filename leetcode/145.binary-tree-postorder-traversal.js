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
 * @return {number[]}
 */
const postorderTraversal = function (root, array = []) {
    if (!root) return array
    postorderTraversal(root.left, array)
    postorderTraversal(root.right, array)
    array.push(root.val)
    return array
};