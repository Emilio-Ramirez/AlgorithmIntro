/*
 *Understanding
 *The redix sort is simple
 *You ordere it the number of digits it has form right to left
 */

//Implementation thinking
//first i did the bucketList with 10 bickets
//Then I use string and max to get the max digit
//Then I do a foor loop using the max digit so if there is 3 digits it would be 3 times
//Then i did the for loop of n to look for all the numbers
//I realized that we only need to do a foor loop of the array and then we need to do the next for loop based on the boxes

const radixSort1 = (arr) => {
  const maxDigit = Math.max(...arr).toString().length;
  let bucketList = Array.from({ length: 10 }, () => []);
  bucketList[0] = arr;
  for (let i = 0; i < maxDigit; i++) {
    bucketList = bucketSort(bucketList, i);
  }
  arr = bucketList.flat();
  return arr;
};

const bucketSort = (bucketList, digit) => {
  const bucketListTemp = Array.from({ length: 10 }, () => []);
  for (let bucket = 0; bucket < bucketList.length; bucket++) {
    for (let i = 0; i < bucketList[bucket].length; i++) {
      let number = Math.floor(bucketList[bucket][i] / Math.pow(10, digit)) % 10;
      bucketListTemp[number].push(bucketList[bucket][i]);
    }
  }
  return bucketListTemp;
};

//Final solution

function getDigit(num, digit) {
  return Math.floor(num / Math.pow(10, digit)) % 10;
}
const radixSort = (arr) => {
  const maxDigit = Math.max(...arr).toString().length;

  //For each digit position
  for (let digit = 0; digit < maxDigit; digit++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      let number = getDigit(arr[i], digit);
      buckets[number].push(arr[i]);
    }

    arr = buckets.flat();
  }
  return arr;
};

console.log(radixSort([61, 2, 710, 470, 993, 687, 426, 451, 668, 725]));

//Time complexity analysis
/*
 *for of num of digits
 *  nested for of n in Array
 * k = max number
 * we use log10(k)
 * since we dont use constants is log(k)
 * and with the nested loop n
 * n log(k)
 */
