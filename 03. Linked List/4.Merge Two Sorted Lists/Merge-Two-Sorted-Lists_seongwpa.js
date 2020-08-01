var mergeTwoLists = function(l1, l2) {
  let head = new ListNode(0);
  if (l1 || l2)
  {
      if (!l1) return (l2);
      else if (!l2) return (l1);
      if (l1.val < l2.val)
      {
          head = l1;
          l1 = l1.next;
      }
      else
      {
          head = l2;
          l2 = l2.next;
      }
  }
  else return (l1);
  let temp = head;
  while (l1 || l2)
  {
      if (!l1)
      {
          temp.next = l2;
          break;
      }
      else if (!l2)
      {
          temp.next = l1;
          break;
      }
      if (l1.val < l2.val) {
          temp.next = l1;
          l1 = l1.next;
      }
      else
      {
          temp.next = l2;
          l2 = l2.next;
      }
      temp = temp.next;
  }
  return (head);
};
