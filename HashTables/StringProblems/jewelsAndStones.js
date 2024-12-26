// #771

// Understanding
/*
  *1. Input
      - String jewels give you the type of jewels
      - String stones give you all the materials
  *2. Output
      - Number of jewels in stones
  *3. Key insights
      - We can use a hash table
      - We do a freq with each jewel and the count
      - We return the values sum
  *4. Examples
    - jewels = "aA", stones = "aAAbbbb" Output: 3
    - jewels = "z", stones = "ZZ" Output: 0

  *5. Edge Cases
    - strings are empty
    - strings dosnt exist
 */


//Implementation
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  if (!jewels || !stones) return 0;

  const jewelsCount = new Set();

  for (str of jewels) {
    jewelsCount.add(str);
  }

  let count = 0;
  for (str of stones) {
    if (jewelsCount.has(str)) {
      count++;
    }
  }

  return count

};

numJewelsInStones("aA", "aAAbbbb")
