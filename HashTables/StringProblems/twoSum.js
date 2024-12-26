//1. Two Sum

//Understanding
/*
 *
 *1.Input
  -Array of (nums) 
  - Target number
  - It would have only one solution
  - We cant use the same element twice
 *2.Output
  - Return the indeces of the two numbers who add up to target
 *3. Key insight
  - We need the complement to the number to get the value.
  - the unique iteration we need to do is to find the complement of each iteration.
  
 *4. Examples
  - Example 1
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
  - Example 2
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
  - Example 3
    Input: nums = [3,3], target = 6
    Output: [0,1]
  - Example 4
    Input: nums = [3,2,3], target = 6
    Output: [0,2]
  
 *5. Edge cases
  -Nums is empty or donst exist
  -Target is not found
 */

//Brute Force

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target)
        return [i, j]
    }
  }
  return []
};



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    }

    hashMap.set(currentNum, i);
  }

  return [];
};
