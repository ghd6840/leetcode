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
var addTwoNumbers = function(l1, l2) {
    const headNode = new ListNode();
    let carry = 0;
    let preNode = headNode;
 
    while (l1 || l2 || carry) {
        let n1 = 0;
        let n2 = 0;
 
        if (l1) {
            n1 = l1.val;
            l1 = l1.next;
        }
 
        if (l2) {
            n2 = l2.val;
            l2 = l2.next;
        }
    
        const sum = n1 + n2 + carry;
        carry = sum > 9 ? 1 : 0;
        const digit = sum % 10;
        const curNode = new ListNode(digit);
        preNode.next = curNode;
        preNode = curNode;
    }
    return headNode.next;
};