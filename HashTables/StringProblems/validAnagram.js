// #242

// Understanding
/*
 *1. Input
 * - Given two strings (s , t)
 *2. Output
 * - Return true if is an anagram.
 * - Return false otherwise.
 *3. Key Insights
 * - We can store each value of the first string in a hash table with [value, repetitions]
 *4. Examples
 * - s = "anagram", t = "nagaram" should return true
 * - s = "rat", t = "car" should return false
 *5. Edge cases
 * - If string dont match lengths
 * - If string are both length 1
 * - If are empty
 * - If the strings dosent exist
 */


//Brute Force

//Since brute force is complex in logic and i have in mind the hash table i will skip it


//Implementation
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const freq = new Map();
  for (let i = 0; i < s.length; i++) {
    if (freq.has(s[i])) {
      freq.set(s[i], freq.get(s[i]) + 1);
    } else {
      freq.set(s[i], 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (freq.has(t[i])) {
      if (freq.get(t[i]) === 1) {
        freq.delete(t[i]);
      } else {
        freq.set(t[i], freq.get(t[i]) - 1);
      }
    } else {
      return false;
    }
  }

  return freq.size === 0;
};


//Make it beautiful
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const freq = new Map();

  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!freq.has(char)) return false;

    if (freq.get(char) === 1) {
      freq.delete(char);
    } else {
      freq.set(char, (freq.get(char) - 1));
    }
  }

  return freq.size === 0;
};
