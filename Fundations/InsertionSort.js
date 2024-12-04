/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let index = i - 1;
    while (index >= 0 && arr[index] > temp) {
      arr[index + 1] = arr[index];
      index--;
    }
    arr[index + 1] = temp;
  }
  return arr
}

sortArray([5, 2, 4, 6, 1, 3])
