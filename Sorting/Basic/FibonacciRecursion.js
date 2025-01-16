// # 509


/*
 *Input
    Given integer n
 *Output
    Return F(n) where F(n) is the nth Fibonacci number

  Example:
    N = 2 Output: 1
    N = 3 Output: 2
    N = 4 Output: 3




 */


/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(4))
