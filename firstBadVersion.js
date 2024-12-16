/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

isBadVersion = function (version) {
  if (version >= 12) return true;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (!n || n === 0) return 0;
    let left = 1;
    let right = n;

    while (left !== right) {
      const mid = left + Math.floor((right - left) / 2);

      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;

  };
};

// {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15}

const result = solution(isBadVersion)(20);
console.log(result);


