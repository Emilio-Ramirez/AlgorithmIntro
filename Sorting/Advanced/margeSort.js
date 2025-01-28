/*
 *Understanding
 *Basicly is a binary search balanced.
 *We chose always the middle position so it is balanced.
 *We always have sorted arrays when marging.
 *We compere the first numbers of the 2 subarrays and we add it to the array.
 *We have diferent index trackers for each array
 *We only need to reach until groups of 2 or 1 in the case the group before were 3.
 *We only uses the arr that we need, we dont carry more info that needed
 */

//Process thinking
//I will divide the function in 2 parts: One for dividing the array and the other one for joining the arrays
//So i will need to use more variables in the function definition, i will set arr1= null so do arr2;
//I am having some trubule resolving how to divide the functon correctly, i will work with the division first
//Now i have the mid of the arr , but i im thinking how i am making the division since i think marge sort dont carry inesessary values
//I will first do it with using the val so it works
//I will only use selecting end and start insted of actualy dividing the array.
//I will start craating the join function
//When trying the while in the join function i got stuck when the number of the second array needs to be moved to the left
//Since i need the 3 to be in the place of the 6 but the six is bigger than the 5.

var marge = function (arr, start, mid, end) {
  if (!arr || arr.length === 0) return null;
  if (end === undefined || mid === undefined) return null;

  //keeping the left side in the temp - O(N/2)
  let tempArr = [mid - start + 1];
  for (let i = start; i <= mid; i++) {
    tempArr[i - start] = arr[i];
  }

  //Joining the two sides - O(N)
  let tempIndex = 0;
  let rightIndex = mid + 1;

  for (let positionIndex = start; positionIndex <= end; positionIndex++) {
    if (rightIndex > end) {
      arr[positionIndex] = tempArr[tempIndex];
      tempIndex++;
    } else if (tempIndex > tempArr.length - 1) {
      arr[positionIndex] = arr[rightIndex];
      rightIndex++;
    } else if (tempArr[tempIndex] < arr[rightIndex]) {
      arr[positionIndex] = tempArr[tempIndex];
      tempIndex++;
    } else {
      arr[positionIndex] = arr[rightIndex];
      rightIndex++;
    }
  }

  return arr;
};

//console.log(marge([1, 4, 2, 3], 0, 1, 3)); // halves: [1,4] and [2,3]
var SortArray = function (arr = null, start = 0, end = arr.length - 1) {
  //Edge case
  if (!arr) return null; //In the case at the start we dont recive eny values
  if (start >= end) return arr;
  let mid = start + Math.floor((end - start) / 2);

  SortArray(arr, start, mid);
  SortArray(arr, mid + 1, end);
  marge(arr, start, mid, end);
  return arr;
};

///Second try

//console.log(marge([1, 4, 2, 3], 0, 1, 3)); // halves: [1,4] and [2,3]
var SortArray = function (arr = null) {
  if (arr.length <= 1) return arr;

  //divide the array
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return marge(SortArray(left), SortArray(right));
};

var marge = function (left, right) {
  let result = [];
  let indexL = 0;
  let indexR = 0;

  while (indexL < left.length && indexR < right.length) {
    if (left[indexL] < right[indexR]) {
      result.push(left[indexL]);
      indexL++;
    } else {
      result.push(right[indexR]);
      indexR++;
    }
  }
  result.push(...left.slice(indexL));
  result.push(...right.slice(indexR));

  return result;
};

console.log(SortArray([4, 1, 3, 2]));
