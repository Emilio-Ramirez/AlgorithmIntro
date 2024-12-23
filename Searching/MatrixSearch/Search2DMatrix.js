//74. Search a 2D Matrix
//Understanding
/*
 *1. Input.
    - Matriz with each row in sorted in non-decreasing order.
      -First integer of each row is grater than the last integrer of the previous.
    -  Target with the value to search
 *2. Output.
    -True if the target is in the matrix
    -False if the taget is not in the matrix
  *3. Key Insights.
    - If you put together all the rows you get a ordered array
    - We can use the matrix like an array with some index calculations
    -
  *4. Examples
    -Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3 true
    -Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13 false
  *5. Edge Cases
    -matrix dosnt exist
    -matrix is empty
    -matrix only have one row
 */

//Brute force
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrixBruteForce = function (matrix, target) {
  if (!matrix || matrix.length == 0) return false;

  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] == target) return true;
    }
  }
  return false;
};

//console.log(searchMatrixBruteForce([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 12))


//Implementation
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix || matrix.length == 0) return false;

  let outerLeft = 0;
  let outerRight = matrix.length - 1;

  while (outerLeft <= outerRight) {
    const mid = outerLeft + Math.floor((outerRight - outerLeft) / 2);

    //Target in middle matrix
    if (matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target) {

      let innerLeft = 0;
      let innerRight = matrix[mid].length - 1;

      while (innerLeft <= innerRight) {
        const innerMid = innerLeft + Math.floor((innerRight - innerLeft) / 2);

        if (matrix[mid][innerMid] == target) return true;

        if (matrix[mid][innerMid] > target) {//Target is on the left
          innerRight = innerMid - 1;
        } else {//Target is on the right
          innerLeft = innerMid + 1;
        }
      }
      return false;

    } else if (matrix[mid][0] > target) { //Target should be in the remaining left matrix
      outerRight = mid - 1;

    } else {//Target should be in the remaining right matrix
      outerLeft = mid + 1;
    }

  }
  return false

};


//Make it beautiful
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix || matrix.length == 0) return false;



  const findMatrix = (matrix, target) => {
    let left = 0;
    let right = matrix.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const row = matrix[mid];

      if (row[0] <= target && row[row.length - 1] >= target) {
        return mid;
      }

      if (row[0] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return -1;

  }

  const searchRow = (row, target) => {
    let left = 0;
    let right = row.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (row[mid] === target) return true;

      if (row[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return false;

  }

  const rowIndex = findMatrix(matrix, target);

  return rowIndex !== -1 && searchRow(matrix[rowIndex], target);
};

