class ListNode {
       val: number
       next: ListNode | null
       constructor(val?: number, next?: ListNode | null) {
           this.val = (val===undefined ? 0 : val)
           this.next = (next===undefined ? null : next)
       }
   }
  
function makeReverseList(head: ListNode | null): ListNode | null {
  let prevNode: ListNode | null = null;
  let curNode: ListNode | null = null;
  if (head)
    curNode = new ListNode(head.val, head.next);
  let curHead: ListNode | null = curNode;
  while (curNode && curNode.next) {
    curNode.next =  new ListNode(curNode.next.val, curNode.next.next);
    curNode = curNode.next;
  }
  while (curHead) {
    let nextNode: ListNode | null = curHead.next;
    curHead.next = prevNode;
    prevNode = curHead;
    curHead = nextNode;
  }
  return (prevNode);
};

function isPalindrome(head: ListNode | null): boolean {
  let reversedHead: ListNode | null = makeReverseList(head);
  while (head && reversedHead) {
    if (head.val !== reversedHead.val) return (false);
    head = head.next;
    reversedHead = reversedHead.next;
  }
  return (true);
};

let head = new ListNode(1, null);
head.next = new ListNode(2, null);

console.log(isPalindrome(head))