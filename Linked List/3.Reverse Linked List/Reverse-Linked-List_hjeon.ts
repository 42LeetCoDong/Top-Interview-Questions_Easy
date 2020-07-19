
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function reverseList(head: ListNode | null): ListNode | null {
  let prevNode: ListNode | null = null;
  let curNode: ListNode | null = head;
  
  while (curNode) {
    let nextNode: ListNode | null = curNode.next;
    curNode.next = prevNode;
    prevNode = curNode;
    curNode = nextNode;
  }
  return (prevNode);
};