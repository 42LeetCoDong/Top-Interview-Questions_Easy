var sortedArrayToBST = function(nums) {
    if (nums.length == 1) return new TreeNode(nums[0]);
    if (nums.length == 0) return null;

    let centerIdx = parseInt(nums.length/2);
    let root = new TreeNode(nums[centerIdx]);

    root.left = sortedArrayToBST(nums.slice(0,centerIdx));

    root.right = sortedArrayToBST(nums.slice(centerIdx+1,nums.length));

    return root;
};
