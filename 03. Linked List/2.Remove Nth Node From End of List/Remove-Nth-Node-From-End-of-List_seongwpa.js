var removeNthFromEnd = function(head, n) {
	let list = [];
	let currentNode = head;

	while(currentNode.next !== null)
    {
		list.push(currentNode);
		currentNode = currentNode.next;
	}
	list.push(currentNode);

	if (list.length - n - 1 >= 0 && list.length - n + 1 < list.length)
    {
		list[list.length - n - 1].next = list[list.length -n + 1];
		return list[0];
	}

	else if(list.length - n - 1 < 0)
    {
		return list.length <=1 ? null : list[1]
	}
	else if (list.length - n + 1 >= list.length) {
		list[list.length - n - 1 ].next = null;
		return list[0];
	}
}
