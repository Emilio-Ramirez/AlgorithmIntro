//Understanig

/*
 *Quick Sort
 *Basicly divide and conquer with recursive programing
 *But we need to find the pivot comparing the first , middel and last value

 Input - An unsorted array
 Output - The array sorted
 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (arr) {
  //Edge cases
  if (!arr || arr.length === 0) return arr;
  if (arr.length === 1) return arr;
  // If arr only has 2 values
  if (arr.length === 2) {
    if (arr[0] < arr[1]) {
      return arr;
    } else {
      return [arr[1], arr[0]];
    }
  }

  console.log("before sort", arr);

  // Finding the mid value
  let first = 0;
  let mid = Math.floor((arr.length - 1) / 2);
  let last = arr.length - 1;
  if (arr[first] > arr[mid]) {
    [first, mid] = [mid, first];
  }
  if (arr[mid] > arr[last]) {
    [mid, last] = [last, mid];
  }
  if (arr[first] > arr[mid]) {
    [first, mid] = [mid, first];
  }

  console.log("mid " + arr[mid]);
  // 4 3 7 2 5 8
  // middle = 4
  // array = [3,6,2,5,8]
  // arrLeft = 3 , 2 , 4 ,
  //    middle = 3
  //    arrLeft = 2 , 3
  //    arrRight = 4
  // arrRight = 6 ,5 ,8
  //
  // Setting the pivot and removing it from the array
  let middle = arr[mid];
  arr.splice(mid, 1);
  let arrLeft = [];
  let arrRight = [];

  //Dividing the arrays
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < middle) {
      arrLeft.push(arr[i]);
    } else {
      arrRight.push(arr[i]);
    }
  }
  //Almost forgot to add the pivot
  arrLeft.push(middle);

  console.log("arrLeft", arrLeft);
  console.log("arrRight", arrRight);

  //Calling the recursion
  return [...sortArray(arrLeft), ...sortArray(arrRight)];
};

//Make it beautiful

var sortArray = function (arr) {
  //Edge cases
  if (!arr || arr.length === 0) return arr;
  if (arr.length === 1) return arr;
  // If arr only has 2 values
  if (arr.length === 2) {
    return arr[0] < arr[1] ? arr : [arr[1], arr[0]];
  }

  // Finding the mid value
  let first = 0;
  let mid = Math.floor((arr.length - 1) / 2);
  let last = arr.length - 1;

  if (arr[first] > arr[mid]) [first, mid] = [mid, first];
  if (arr[mid] > arr[last]) [mid, last] = [last, mid];
  if (arr[first] > arr[mid]) [first, mid] = [mid, first];

  // Setting the pivot and removing it from the array
  let middle = arr[mid];
  arr.splice(mid, 1);
  let arrLeft = [];
  let arrRight = [];

  //Dividing the arrays
  for (let i = 0; i < arr.length; i++) {
    arr[i] < middle ? arrLeft.push(arr[i]) : arrRight.push(arr[i]);
  }
  arrLeft.push(middle);

  return [...sortArray(arrLeft), ...sortArray(arrRight)];
};

//
//Impoving errors in implementation

var sortArray = function (arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;

  //Finding the pivot
  let left = start;
  let right = end;
  let mid = Math.floor((right - left) / 2) + left;

  console.log(arr);

  if (arr[left] > arr[mid]) [left, mid] = [mid, left];
  if (arr[mid] > arr[right]) [mid, right] = [right, mid];
  //This only works if the first statment (left>mid)is not valid
  if (arr[left] > arr[mid]) [left, mid] = [mid, left];
  console.log("Mid found: " + arr[mid]);

  //Moving the pivot to the left most
  console.log("Moving the pivot to the left most ");
  if (mid !== start) [arr[start], arr[mid]] = [arr[mid], arr[start]];
  console.log(arr);

  //Sorting the algorithm base in the pivot
  let borderIndex = start;
  console.log("Sorting the algorithm base in the pivot");
  for (let i = start + 1; i <= end; i++) {
    console.log(arr[i] + " > " + arr[start]);
    if (arr[i] < arr[start]) {
      console.log(arr);
      console.log(arr[i] + " is smaller than " + arr[start]);
      console.log("borderIndex: " + borderIndex);
      borderIndex++;
      [arr[i], arr[borderIndex]] = [arr[borderIndex], arr[i]];
      console.log(
        [arr] + " after moving the borderIndex and the smaller number",
      );
    }
  }
  [arr[start], arr[borderIndex]] = [arr[borderIndex], arr[start]];
  console.log([arr] + "AFter the shift");

  sortArray(arr, start, borderIndex - 1);
  sortArray(arr, borderIndex + 1, end);

  console.log(arr + " After checking the left and the right");
  return arr;
};

var SortArray = function (arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;

  let mid = start + Math.floor((end - start) / 2);

  if (arr[start] > arr[mid]) [arr[start], arr[mid]] = [arr[mid], arr[start]];
  if (arr[mid] > arr[end]) [arr[end], arr[mid]] = [arr[mid], arr[end]];
  if (arr[start] > arr[mid]) [arr[start], arr[mid]] = [arr[mid], arr[start]];

  //Move the mid to the left most position
  //I my last implementation i did an if for checking if mid whas not in the left most position and then do the swap
  //With the swap above i can asume that the mid value is always in the mid index so i can skeep the step of checking its position;
  [arr[start], arr[mid]] = [arr[mid], arr[start]];

  let borderIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[start]) {
      borderIndex++;
      [arr[i], arr[borderIndex]] = [arr[borderIndex], arr[i]];
    }
  }
  [arr[start], arr[borderIndex]] = [arr[borderIndex], arr[start]];

  sortArray(arr, start, borderIndex - 1);
  sortArray(arr, borderIndex + 1, end);

  return arr;
};

console.log(sortArray([4, 3, 7, 2, 5, 8]));
