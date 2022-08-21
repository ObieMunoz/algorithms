/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    let result = new ListNode();
    let currentNode = result;
    let carryOver = 0;
    while (l1 || l2 || carryOver > 0) {
        let v1 = 0;
        let v2 = 0;
        let val = 0;
        if (l1) v1 = l1.val;
        if (l2) v2 = l2.val;
        val = v1 + v2 + carryOver;
        carryOver = Math.floor(val / 10);
        val = val % 10;
        currentNode.next = new ListNode(val);
        currentNode = currentNode.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return result.next;
};