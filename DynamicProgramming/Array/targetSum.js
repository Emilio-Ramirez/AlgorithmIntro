//492

/*
 *
 *1.Input
  - Integer array nums 
  - Integer target
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
