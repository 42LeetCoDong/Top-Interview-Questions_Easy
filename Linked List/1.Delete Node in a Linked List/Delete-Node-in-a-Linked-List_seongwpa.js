var deleteNode = function(node) {
  if (node == null) return;
  else
  {
      node.val = node.next.val;
      node.next = node.next.next;
  }
};
