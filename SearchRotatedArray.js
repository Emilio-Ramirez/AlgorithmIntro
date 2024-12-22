//33. Search in Rotated Sorted Array

//Understandig
/*
 *1. Input
 * -A sorted array with posibility of a rotation
 * -A target value
 *
 *2. Output
 * -The index of the target in the array
 * -Return -1 if there isnt the target in the array or if the array is empty or dosnt exist
 * -O(log n)
 *
 *3. Key Insights
 * - We need to use a binary search
 * - There will be always 2 subarrays sorted or one sorted.
 * - To know in which side we are we can check the middle to the rightmost
 *   - If middle > rightmost it means we are touching the two subarrays
 *     - We check where is the target left or rith
 *   - If middle < rightmost it mmeans we are in a sorted subarray
 *      We check where is the target left or right
 *
 *
 *4. Examples
 * - ([123],1) 0
 * - ([231],1) 2
 * - ([34512],1) 3
 * - ([67892345],3) 0
 *
 *5. Edge Cases
 * - The array dosnt exist
 * - The array is empty
 * - The array is not rotated
 * - There is no target
 * - The target is not in the array


 */

//Brute Force Solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchButeForce = function (nums, target) {
  if (!nums || nums.length == 0) return -1

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) return i
  }

  return -1
};


//Implementation

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


    if (nums[mid] > nums[right]) {// left side is sorted == right side not sorted
      //if target in left side
      if (nums[left] <= target && nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else { //left side not sorted == right side sorted
      if (nums[right] >= target && nums[mid] < target) {
        left = mid + 1;
      }
      else {
        right = mid - 1;
      }
    }
  }
  return -1;
};


console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8))
