/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const postorder = function (root, array = []) {
    if (!root) return array
    root.children.forEach(child => postorder(child, array))
    array.push(root.val)
    return array
};