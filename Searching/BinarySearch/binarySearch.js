/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums || nums.length === 0) return -1

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((right - left) / 2) + left;

    if (target === nums[middle]) {
      return middle;
    }
    if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;

};

console.log(search([-1, 0, 3, 5, 9, 12, 13], 4))
