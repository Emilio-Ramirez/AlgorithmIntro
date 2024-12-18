/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums || nums.length == 0) return -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {

    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] == target) return mid;

    //if is in left side
    if (nums[left] <= nums[mid]) {

      //if target is on the left side
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }

    }
    // if is on the right side
    else {
      //if target in right side
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1
      } else {// since is not in right side we move right to mid so we end in the left side
        right = mid - 1;
      }
    }





  }
  return -1


}

search([6, 7, 1, 2, 3, 4, 5], 1)

