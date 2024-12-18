/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

  let left = 0;
  let right = nums.length - 1;

  if (!nums || nums.length == 0) return -1;


  while (left <= right) {

    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    //check if left side is sorted
    if (nums[left] <= nums[mid]) {
      //check if target is in left sorted position
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    //right side must be sorted
    else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

  }
  return -1;
};

console.log(search([5, 6, 7, 1, 2, 3, 4], 6))
/*
 *Original sorted array: [0, 1, 2, 4, 5, 6, 7]
 *
 *After rotation: [4, 5, 6, 7 || 0, 1, 2]
 *After rotation: [0, 1, 2, 3 || 4, 5, 6]
  [7,1,2,3,4,5,6] // rotated once
  [6,7,1,2,3,4,5] // rotated twice
  [5,6,7,1,2,3,4] // rotated three times
  [4,5,6,7,1,2,3] // rotated four times
  [3,4,5,6,7,1,2] // rotated five times
  [2,3,4,5,6,7,1] // rotated six times
 */
