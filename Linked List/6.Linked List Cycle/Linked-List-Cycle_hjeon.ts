var hasCycle = function(head) {
    let nextNodes = [];

    while ((head)) {
      if (nextNodes.includes(head.next))
        return (true);
      nextNodes.push(head.next);
      head = head.next;
    }
    return (false);
};