// Insertion Sort



//Understanding
/*
 * What we are trying to solve ?
 *  -We are trying to use the insertion sort to sort a number of arrays in a eficient wey
 * What I know about the insertion sort?
 *  -It is an algorithm that takes the second value, and checks every value before placing it in the right order 
 * What is an analogy we can use?
 *  -In a deck of cards we have [4,2,3,1].
 *  -We will check the second value(2) if it is smaller than the previous.
 *  -We will move the 2 before , since there isnt more numbers to check we pass on. [2,4,3,1]
 *  -We now check the third value(3), since is smaller than the previos we move it so we en with [2,3,4,1]
 *  -We keep checking if 4 is smaller than 2 , since is not we pass.
 *  -We check the fourth number , since is smaller than the previos we rotated the values [2,3,1,4]
 *  -We continue rotating places since 1 is smaller than 3. [2,1,3,4]
 *  -We keep and move the [1,2,3,4]
 *  -Since there is no more numbers to check we pass.
 *
 * What is a simple happy path?
 *  - Input is a valid array of numbers
 *  - All numbers are positive
 *  - The array isnt empty
 *  -The algorithm sorts numbers
 *
 *
 * Are there edge cases you can think of?
    -Empty array []
    -Array with single element [5]
    -Array with duplicate numbers [4,2,2,1]
    -Array already sorted [1,2,3,4]
    -Array in reverse order [4,3,2,1]
    -Array with negative numbers [-2,5,-1,3]
 *
 *
 * What is the expected output?
 *  - Array sorted
 *
 * Which value you should use in the loop so it dosnt change for the comparision?
 * Which value is dynamic for making the swap
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (arr) {

  for (let i = 1; i < arr.length; i++) {

    const temp = arr[i];
    let index = i - 1;
    while (index >= 0 && arr[index] > temp) {
      arr[index + 1] = arr[index];
      index--;
    }
    arr[index + 1] = temp;
  }

  return arr;
}
console.log(sortArray([4, 2, 3, 1]))

//Make it beautiful
/**
 * Sorts an array using the insertion sort algorithm
 * @param {number[]} arr - The input array to be sorted
 * @return {number[]} - The sorted array
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentElement = arr[i];
    let previousIndex = i - 1;

    // Move elements greater than currentElement one position ahead
    while (previousIndex >= 0 && arr[previousIndex] > currentElement) {
      arr[previousIndex + 1] = arr[previousIndex];
      previousIndex--;
    }

    // Place currentElement in its correct position
    arr[previousIndex + 1] = currentElement;
  }

  return arr;
}

// Test
console.log(insertionSort([4, 2, 3, 1])); // [1, 2,
