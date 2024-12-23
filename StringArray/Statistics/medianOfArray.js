/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // Make sure nums1 is the shorter array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const x = nums1.length;
  const y = nums2.length;
  let low = 0;
  let high = x;

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    // If partitionX is 0, there is nothing on left side. Use -Infinity
    // If partitionX is length of input, there is nothing on right side. Use +Infinity
    const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minRightX = partitionX === x ? Infinity : nums1[partitionX];

    const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minRightY = partitionY === y ? Infinity : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      // We found the right partition
      if ((x + y) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
};

console.log(findMedianSortedArrays([1, 2, 3, 5], [1, 1, 2, 3, 4, 4, 5]))

