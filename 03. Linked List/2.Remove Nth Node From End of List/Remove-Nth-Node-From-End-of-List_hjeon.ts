 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let temp: ListNode | null = head;
  let nthNode: ListNode | null = head;
  let isShort: boolean = false;

  if (head && !head.next)
    return (null);
  for (let i = 0; i < n + 1; i++)
    if (temp) temp = temp.next;
    else isShort = true;
  while (temp && nthNode) {
    temp = temp.next;
    nthNode = nthNode.next;
  }
  if (nthNode && nthNode.next && !isShort)
    nthNode.next = ((nthNode.next).next);
  else if (nthNode && n === 1)
    nthNode.next = null
  else if (nthNode) 
    return (nthNode.next);
  return (head);
};