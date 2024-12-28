//Understanding

/*
  * What we are trying to solve ?
  * -We are trying to use the selection sort to sort a number of arrays in a eficient wey
  ** What I know about the selection sort ?
  * -It search for the minimum value and move to the start respective
  *
  * -O(n^2)
  * -Outer loop goes throw all the indexes
  * -Inner loop goes throw a linear search
  *
  * -The first loop (i) point to the limit of the unsorted part of the array
  * -The second loop (k) point to the limit +1 of the unsorted array
  * -Once the min is found we swap the minimum number with the limit of the unsorted array.
  * -We dont need a specific value in the swap, because we just move it to the unsorted part.
  */



/**
* @param {number[]} nums
* @return {number[]}
*/
var sortArray = function (nums) {

  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[k] < nums[min]) {
        min = k;
      }
    }
    //After finding the minimum we do the swap
    temp = nums[i];
    nums[i] = nums[min];
    nums[min] = temp;
  }

  return nums;
};

console.log(sortArray([4, 2, 2, 1]))
