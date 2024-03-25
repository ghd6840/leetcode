/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists.length) return null;
    
    function mergeTwoLists(a, b) {
        const dummyHead = new ListNode();
        let curA = a, curB = b, curD = dummyHead;
        
        while(curA && curB) {
            if(curA.val < curB.val) {
                curD.next = curA;
                curA = curA.next;
            } else {
                curD.next = curB;
                curB = curB.next;
            }
            curD = curD.next;
        }
        if(curA) curD.next = curA;
        if(curB) curD.next = curB;
        return dummyHead.next;
    }
    
    while(lists.length > 1) {
        const a = lists.shift();
        const b = lists.shift();
        const res = mergeTwoLists(a, b);
        lists.push(res);
    }
    return lists[0];
};