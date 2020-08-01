function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head: ListNode | null = null;

  if (l1 || l2) {
    if (!l1) return (l2);
    else if (!l2) return (l1);
    if (l1.val < l2.val) {
      head = l1;
      l1 = l1.next;
    } else {
      head = l2;
      l2 = l2.next;
    }
  }
  let temp: ListNode | null = head;
  while (temp && (l1 || l2)) {
    if (!l1) {
      temp.next = l2;
      break ;
    } else if (!l2) {
      temp.next = l1;
      break ;
    }
    if (l1.val < l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    temp = temp.next;
  }
  return (head);
};