var isPalindrome = function(head) {
  let tmplist = [];
  while (head)
  {
      tmplist.push(head.val);
      head = head.next;
  }
  let len = tmplist.length;
  for (let i = 0; i < len / 2; i++)
  {
      if (tmplist[i] != tmplist[len - 1 - i])
          return (false);
  }
  return (true);
};
