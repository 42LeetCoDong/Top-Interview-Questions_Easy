var merge = function(nums1, m, nums2, n) {
    nums1.splice(m);
    while (n--)
    {
        nums1.push(nums2[0]);
        nums2.splice(0, 1);
    }
    nums1.sort(function(a, b) { return (a - b) });
};
