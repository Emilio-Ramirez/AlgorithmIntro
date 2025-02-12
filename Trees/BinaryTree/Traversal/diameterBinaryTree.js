//543. Diameter of Binary Tree

//Understanding
/*
 * Input: Given the root of a binary tree
 * Output: Return the lenght of the diameter of the tree.
 *
 * Insights:
 * The diameter is the longest path between any two nodes in a tree.
 * First I think i need to look for every length of right and left of every root
 * And store the length in a max value for evere root
 * Like in finding if balanced but insted of comparing we will sum the sides and then compare to our max val;
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
 * @return {number}
 */
var diameterOfBinaryTree = function (tree, diameter = 0) {
  let maxDiameter = 0;
  const height = function (node) {
    if (!node) return 0;
    let left = height(node.left);
    let right = height(node.right);

    maxDiameter = Math.max(maxDiameter, left + right);

    return Math.max(left, right) + 1;
  };

  height(tree);
  return maxDiameter;
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(diameterOfBinaryTree(root)); // True

let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);

root1.right = new TreeNode(3);
console.log(diameterOfBinaryTree(root1)); // False

let root2 = new TreeNode(1);
root2.left = new TreeNode(2);

console.log(diameterOfBinaryTree(root2));
