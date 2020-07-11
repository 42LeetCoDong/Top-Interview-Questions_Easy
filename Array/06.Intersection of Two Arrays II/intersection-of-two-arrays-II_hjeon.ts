function intersect(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];
  let i: number;

  nums1.forEach((num1) => {
    if ((i = nums2.indexOf(num1)) !== -1) {
      result.push(num1);
      nums2.splice(i, 1);
    }
  });
  return (result);
};
