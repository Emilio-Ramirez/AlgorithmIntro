// 153. Find Minimum in Rotated Sorted Array

// Understanding the problem
/*
 *Let's summarize our complete understanding of the problem:
 *
 *Problem Understanding:
 *1. Input:
 *- Array that was originally sorted in ascending order
 *  - May have been rotated 0 to n times
 *    - Contains unique values(no duplicates)
 *
 *2. Output:
 *- The minimum value in the array
 *
 *3. Key Insights:
 *- At the rotation point, left value is bigger than right value
 *- The rotation point contains the minimum value
 *- If middle > rightmost: minimum is in right portion
 *- If middle < rightmost: minimum is in left portion
 *
 *4. Examples:
 *-[1, 2, 3, 4, 5] → 1(not rotated)
 *- [3, 4, 5, 1, 2] → 1(rotated)
 *- [5, 1, 2, 3, 4] → 1(rotated)
 *
 *5. Edge Cases:
 *- Empty array
 *- Array with single element
 *- Array not rotated
 *- Array rotated n times(back to original)
 */

//Brute force

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMinBruteForce = function (nums) {

  if (!nums || nums.length === 0) return null;

  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (min > nums[i]) min = nums[i];
  }
  return min
};


// Optimization

/*
 *1. - We can find wich side has the minimum by comparing the middle and the rightmost value
 *  - If middle > rightmost the minimum is on the right
 *  - if middle < rightmos the minimum is on the left
 *2. This allows to eliminatye the half array in each step, giving us O(log n)complexity insted of O(n)
 */

// Implementation

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {



  //Edge cases
  if (!nums || nums.length == 0) return null;
  if (nums[0] <= nums[nums.length - 1]) return nums[0]; //Case where lenght is 1 will work

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    //If middle > rightmost the minimum is on the right 
    //remove the left side wich has bigger numbers
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    }
    //if middle < rightmost the min is on the left && you are in a sorted array 
    //remove the right side because has the bigger numbers
    else {
      right = mid;
    }

  }

  return nums[left];



};


console.log(findMin([1, 2, 3, 4, -1]));
//[3, 1, 2]
