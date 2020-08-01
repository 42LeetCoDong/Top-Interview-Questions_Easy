function toarray(left = null, right = null, arr, level)
{
    if (left == null && right == null) return;
    if (!arr[level])
        arr[level] = new Array();
    if(left != null)
    {
        arr[level].push(left.val);
        toarray(left.left, left.right, arr, level + 1);
    }
    if(right != null)
    {
        arr[level].push(right.val);
        toarray(right.left, right.right, arr, level + 1);
    }
};

var levelOrder = function(root) {
    if (!root) return [];
    let array = new Array(new Array());
    array[0].push(root.val);
    toarray(root.left, root.right, array, 1);
    console.log(array);
    return array;
};
