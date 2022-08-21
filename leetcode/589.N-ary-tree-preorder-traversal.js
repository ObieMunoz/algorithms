/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = function (root, array = []) {
    if (!root) return array
    array.push(root.val)
    root.children.forEach(child => preorder(child, array))
    return array
};