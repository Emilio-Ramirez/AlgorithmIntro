/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  let pairs = {
    '{':'}',
    '(':')',
    '[':']',
  }

  for (let char of s){
    if (pairs[char]){
      stack.push(char);
    }
    else {
      const lastOpen = stack.pop();

      if (pairs[lastOpen] !== char){
        return false;
      }
    }
  }

  return stack.length === 0;
};
