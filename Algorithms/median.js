const findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  let median;
  let newNumbers = [...nums1, ...nums2].sort((a, b) => a - b);
  if ((m + n) % 2 === 0) {
    median = (newNumbers[(m + n) / 2 - 1] + newNumbers[(m + n) / 2]) / 2;
    return median;
  }
  if ((m + n) % 2 != 0) {
    console.log((m + n) % 2);
    median = newNumbers[(m + n - 1) / 2];
    console.log(median);
    return median;
  }
};

findMedianSortedArrays([1, 3], [2]);
