//110. Balanced Binary Tree

//Understanding

/*
 * Height Balanced: A height-balanced binary tree is a binary tree in which the depth of
 *                  the two subtrees of every node never differs by more than one.
 * Input: Given a root of a binary tree.
 * Output: Return true if is height-balanced or false if not.
 *
 * Insights:
 * The logic here is if abs(left - right) >=2 return false
 * So we will check every root
 * we sum the left recursive and the right recursive after comparing it
 * we have two base cases:
 *  If !root and return false (i think this one is a break case)
 * if we can go below call the recursive with length + 1
 *
 *
 * Second round
 *
 * The problem is that we are using to much base cases with state and height
 * So to join them we need to find a height value that will bubbule up the false;
 * First the !root case will return 0 because is the null height
 * I dont get it but we should check the left one if is -1
 *
 */

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var getHeight = function (root) {
  if (!root) return 0;

  let left = getHeight(root.left);
  if (left === -1) return -1;

  let right = getHeight(root.right);
  if (right === -1) return -1;

  if (Math.abs(left - right) >= 2) return -1;
  //If is balanced we return the length of the longest child
  return Math.max(left, right) + 1;
};

var isBalanced = function (root) {
  return getHeight(root) !== 1;
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(isBalanced(root)); // True

let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(2);
root1.left.left = new TreeNode(3);
root1.left.right = new TreeNode(3);
root1.left.left.left = new TreeNode(4);
root1.left.left.right = new TreeNode(4);
root1.left.right = new TreeNode(3);

console.log(isBalanced(root1)); // False
