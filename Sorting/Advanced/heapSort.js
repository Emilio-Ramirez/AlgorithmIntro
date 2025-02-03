/*
 *Understanding before coding
 *Max Heap = parent always greater than children in a tree with 2 nodes per parent.
 *We need to "bubble down" larger elements when we find a parent that's smaller than its children.
 *When we move elements, we need to be careful not to mess up the heap property we've already established.
 *When comparing the childrens from the parent we need to look up for the bigger child.
 *Heapify = making a tree a max heap
 */

/*
 *Thinking procces while coding
 *Is there a wey to do a tree, like linkedlist use map or somthing like that?
 *Left child: 2i + 1
 *Right child: 2i + 2
 *Parent: Math.floor((i-1)/2)
 * I am thinking of using a bool to know when the iterations dosnt change eny more for the heapify.
 * My first problem will be how to find the last parent, maybe making an index for parents, maybe for parent left and right;
 * Since some arrays dosnt have the same leaves i will search from top to bottom;
 * I saw this in the chat "Recursively heapify the affected subtree" i dont know how to do this. meybe with a slice.
 * Maybe the recursive call will be SortArray(arr.slice((parentAfected last left child?))
 * I just realise that the heapify procces is top to bottom right?
 * Maybe using a parentIndex for the while?
 * I did 2 comparisions for checking if left child is larger or the right one and if the larger is larger than the parent.
 * I need to add the condition when the parent is ordered and .... I think i can do a re cursive call for every parent
 * Moving to the Heapify function for the next iterations
 * The recursive call will be Heapify(the index of the parent)
 * I add it to the finction the parameter of parent so is Heapify(arr,parent)
 * I did a ternary operator to loof for the biggerChild keeping the index
 * I will work for 2 cases i think, the first if we move a child for the parent we need to make recursively.Second if there is no change to move on the next child.
 * I had trouble knowing how to look at the right and left, but with the recurssion we can.
 * I need to look for the case the parent is a leaf and return arr and stop the recursion
 * If there no changes we will make 2 recursions, for the right and left;
 * We need to look for the edge case that we only have one leaf
 * Cases:
 * Only one child = leaf
 * No childs
 * No changes = two recursions ? right : left
 * Change = recursion in the child afected
 * I noticed that in the change we need to make the recursion in both? 
 * but how can we be certain that the bigger will go up if the recurssion is going down?
 * I will test it with 1, 3, 2
 * I test it for 
 * console.log(Heapify([4, 10, 3, 5, 1])); // Should become [10, 5, 3, 4, 1]
 * console.log(Heapify([1, 3, 2]));        // Should become [3, 1, 2]
 * console.log(Heapify([2, 8, 5, 3, 9, 1])); // Should become [9, 8, 5, 3, 2, 1]
 * console.log(Heapify([1]));              // Should stay [1]
 * console.log(Heapify([1, 2]));           // Should become [2, 1]
 * It dosnt work in the 2,8.... the result was "[ 8, 9, 5, 3, 2, 1 ]"
 * It is not going back
 * So i should add a check for the parent?
 * I would do it but i think it is not necessary because i am missing somthing
 * so i will try looking up to se if the parent of the parent is in a good position.
 * Case + Looking above =  the parent of the parent is not in the right place after changing positions
 * Now testing [1, 2, 3, 4, 5] didnt work 
 * The problem is because when changing prositions i only checked with the recursive the larger child pisition and not both
 * Still is not right gave this [ 5, 4, 1, 3, 2 ]
 * Chat told me that i am missing the alone left child
 *
 
 */

var SortArray = function (arr) {
  if (arr.length <= 1) return arr;
  let still = false;
  while (still === false) {
    let parentIndex = 0;
    let leftChild = 2 * parentIndex + 1;
    let rightChild = 2 * parentIndex + 2;
    if (arr[leftChild] > arr[rightChild] && arr[leftChild] > arr[parentIndex]) {
      [arr[leftChild], arr[parentIndex]] = [arr[parentIndex], arr[leftChild]];
    } else if (
      arr[leftChild] < arr[rightChild] &&
      arr[leftChild] > arr[parentIndex]
    ) {
      [arr[rightChild], arr[parentIndex]] = [arr[parentIndex], arr[rightChild]];
    }
  }
};

var Heapify = function (arr, parent = 0) {
  //General edge case
  if (arr.length <= 1) return arr;

  //Looking for the children
  let leftChild = 2 * parent + 1;
  let rightChild = 2 * parent + 2;
  let grandFather = Math.floor((parent - 1) / 2);

  //Case Child alone
  if (leftChild >= arr.length) return arr;

  //Case Change or no change
  let biggerChild =
    arr.length > rightChild && arr[rightChild] > arr[leftChild]
      ? rightChild
      : leftChild;
  if (arr[biggerChild] > arr[parent]) {
    //Case Change
    [arr[parent], arr[biggerChild]] = [arr[biggerChild], arr[parent]];
    if (arr[parent] > arr[grandFather]) {
      Heapify(arr, grandFather);
    }
  }
  if (leftChild < arr.length) Heapify(arr, leftChild);
  if (rightChild < arr.length) Heapify(arr, rightChild);

  return arr;
};

/*
 *console.log(Heapify([1])); // Should stay [1]
 *console.log(Heapify([1, 2])); // Should become [2, 1]
 *
 *console.log(Heapify([])); // Should return []
 *console.log(Heapify([5, 3, 4, 2, null, 1])); // Tests incomplete tree, should become [5, 3, 4, 2, null, 1]
 *console.log(Heapify([4, 4, 4, 4, 4])); // Tests duplicates, should become [4, 4, 4, 4, 4]
 *console.log(Heapify([10, 8, 6, 4, 2])); // Already a heap, should stay [10, 8, 6, 4, 2]
 *console.log(Heapify([1, 2, 3, 4, 5])); // Reverse heap order, should become [5, 4, 3, 1, 2]

 *
 */

function siftDown(arr, parentIndex, heapSize = arr.length) {
  let leftChild = 2 * parentIndex + 1;
  let rightChild = 2 * parentIndex + 2;

  if (leftChild > heapSize) return arr;
  let biggerChild = leftChild;
  if (rightChild < heapSize && arr[rightChild] > arr[biggerChild]) {
    biggerChild = rightChild;
  }
  if (arr[biggerChild] > arr[parentIndex]) {
    [arr[parentIndex], arr[biggerChild]] = [arr[biggerChild], arr[parentIndex]];
    siftDown(arr, biggerChild, heapSize);
  }
  return arr;
}

var Heapify = function (arr) {
  let lastParentIndex = Math.floor((arr.length - 2) / 2);
  for (let i = lastParentIndex; i >= 0; i--) {
    siftDown(arr, i);
  }
  return arr;
};

var HeapSort = function (arr) {
  Heapify(arr);

  let heapSize = arr.length - 1;
  // Corrected loop
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    siftDown(arr, 0, i);
  }
  return arr;
};

console.log(HeapSort([1, 2, 3, 4, 5])); // Should be [5, 4, 3, 1, 2]
console.log(HeapSort);
