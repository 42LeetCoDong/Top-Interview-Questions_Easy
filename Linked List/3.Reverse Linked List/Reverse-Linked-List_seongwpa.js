var reverseList = function(head) {
	let start = head;
    let end = null;
    let temp;
    while(start != null)
    {
        temp = start.next;
        start.next = end;
        end = start;
        start = temp;
    }
    return end;
};
