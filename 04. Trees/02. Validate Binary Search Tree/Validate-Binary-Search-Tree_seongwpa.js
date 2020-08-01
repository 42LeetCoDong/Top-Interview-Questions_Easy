function validate(node, min = null, max = null)
{
    // !max(min)로 사용 시, max(min)값이 0 or 음수일 때 문제생김.
    if (max != null && node.val >= max)
        return false;
    if (min != null && node.val <= min)
        return false;
    if (node.left && !validate(node.left, min, node.val))
        return false;
    if (node.right && !validate(node.right, node.val, max))
        return false;
    return true;
};

var isValidBST = function(root) {
    // 꼭 이런놈을 테케로 주더라...
    if (!root) return true;
    return validate(root);
};
