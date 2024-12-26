// #217

// Understanding
/*
  *1. Input
      - Integer array (nums)
  *2. Output
      - True if value apears twice or more
      - False if every element is distinct.
  *3. Key insights
      - We can use a hash table
      - We can store each one in a hash table
  *4. Examples
      -  nums = [1,2,3,1] Output: true
      -  nums = [1,2,3,4] Output: false
      -  nums = [1,1,1,3,3,4,3,2,4,2] Output: true

  *5. Edge Cases
      - nums is empty
      - nums dosnt exist
      - nums is 1 length

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

  const freq = new Map();

  for (const num of nums) { //(n)
    if (freq.has(num)) {
      return true;
    } else {
      freq.set(num, 0)

    }
  }
  return false
};

console.log(containsDuplicate([1, 2, 3]))
