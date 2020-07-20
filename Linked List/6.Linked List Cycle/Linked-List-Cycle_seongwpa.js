var hasCycle = function(head) {
  let res = [];
  while (head)
  {
      if (res.includes(head.next))
          return true;
      res.push(head.next);
      head = head.next;
  }
  return false;
};
