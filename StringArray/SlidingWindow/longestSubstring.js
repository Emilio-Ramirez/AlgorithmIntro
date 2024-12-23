/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }
  let substring = s[0];
  for (let i = 0; i < s.length; i++) {
    if (substring.length >= s.length - i) {
      return substring.length;
    }
    temp = s[i]
    for (let k = i + 1; k < s.length; k++) {
      if (!temp.includes(s[k])) {
        temp += s[k];
      } else {
        break
      }
    }
    if (temp.length > substring.length) {
      substring = temp;
    }
  }
  return substring.length;
};

console.log(lengthOfLongestSubstring("pwwkew"))



//checks if the left letters for that substrings are enough for beign biger that the substring;
