//BuubleSort


/*
  * What we are trying to solve ?
  * -We are trying to use the selection sort to sort a number of arrays in a eficient wey
  ** What I know about the buuble sort ?
  * -It is like a bubble going up in the water, the bubble is the bigest num
  * -It compares pair to pair
  *
  */


//Implementation


/**
* @param {number[]} nums
* @return {number[]}
*/
var sortArray = function (nums) {

  for (let i = 0; i < nums.length; i++) {

    for (let k = 1; k < nums.length - (i); k++) {
      if (nums[k - 1] > nums[k]) {
        let temp = nums[k - 1];
        nums[k - 1] = nums[k];
        nums[k] = temp;
      }
    }
  }
  return nums
};

console.log(sortArray([4, 2, 2, 1]))


// Make it beautiful
/**
 * Sorts an array using the bubble sort algorithm.
 * Time Complexity: O(n²) in worst and average cases, O(n) in best case
 * Space Complexity: O(1)
 * 
 * @param {number[]} nums - The array to be sorted
 * @return {number[]} - The sorted array
 */
function bubbleSort(nums) {
  const n = nums.length;

  // Outer loop: controls number of passes through the array
  for (let i = 0; i < n; i++) {
    let swapped = false;

    // Inner loop: compares and swaps adjacent elements
    // Length decreases by i since i elements are already sorted at the end
    for (let j = 1; j < n - i; j++) {
      // Compare adjacent elements
      if (nums[j - 1] > nums[j]) {
        // Swap elements using destructuring
        [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
        swapped = true;
      }
    }

    // If no swaps occurred, array is already sorted
    if (!swapped) {
      break;
    }
  }

  return nums;
}

// Test cases
console.log(bubbleSort([4, 2, 2, 1]));  // [1, 2, 2, 4]
console.log(bubbleSort([5, 3, 8, 4, 2]));  // [2, 3, 4, 5, 8]
