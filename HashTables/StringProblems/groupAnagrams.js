// #49

//Understanding
/*
  *1. Input
      - An array of string strs
  *2. Output
      - Group the anagrams together
  *3. Key insights
      - We can use a hash table
      - We can store the anagram sorted as a key
      - We can store the original anagrams as a values
  *4. Examples
    - strs = ["eat","tea","tan","ate","nat","bat"]  = [["bat"],["nat","tan"],["ate","eat","tea"]]
    - strs = [""] = [[""]]
    - strs = ["a"] = [["a"]]
  *5. Edge Cases
    - strs is empty
    - strs has only  one sting
    - strs dosnt exist

 */

//Implementation
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (!strs || strs.length === 0) return [];
  if (strs.length === 1) return [strs];

  const anagrams = new Map();

  for (const char of strs) {
    const sortedChar = char.split('').sort().join('');

    if (anagrams.has(sortedChar)) {
      anagrams.get(sortedChar).push(char);
    } else {
      anagrams.set(sortedChar, [char])
    }

  }

  return Array.from(anagrams.values());


};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

//Make it beautiful
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  // Handle edge cases
  if (!strs || strs.length === 0) return [];
  if (strs.length === 1) return [[strs[0]]];

  // Initialize map to store anagram groups
  const anagramGroups = new Map();

  // Process each string
  for (const str of strs) {
    // Create key by sorting characters
    const key = str.split('').sort().join('');

    // Group strings with same sorted pattern
    if (anagramGroups.has(key)) {
      anagramGroups.get(key).push(str);
    } else {
      anagramGroups.set(key, [str]);
    }
  }

  // Convert map values to array and return
  return Array.from(anagramGroups.values());
};
