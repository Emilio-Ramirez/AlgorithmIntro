//104. Maximum Depth of Binary Tree
//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//Understanding
/*
 *Input: Root = [3,9,20,null,null,15,7]

 *Output: Maximum Depth = 3

 *Key Insights : Make a comparision of two recursion call that returns wich side is longer

 *Edge Cases
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root, nodes = 1) {
  if (!root) return 0;
  if (!root.left && !root.right) return nodes;

  let leftNodes = maxDepth(root.left, nodes + 1);
  let rightNodes = maxDepth(root.right, nodes + 1);

  return Math.max(leftNodes, rightNodes);
};

// Test cases
function test() {
  // Test Case 1: Empty tree
  console.log("Test 1: Empty tree");
  console.log(maxDepth(null)); // Should return 0

  // Test Case 2: Single node
  console.log("\nTest 2: Single node");
  let root1 = new TreeNode(1);
  console.log(maxDepth(root1)); // Should return 1

  // Test Case 3: Tree with multiple levels
  console.log("\nTest 3: Multiple levels");
  let root2 = new TreeNode(3);
  root2.left = new TreeNode(9);
  root2.right = new TreeNode(20);
  root2.right.left = new TreeNode(15);
  root2.right.right = new TreeNode(7);
  console.log(maxDepth(root2)); // Should return 3

  // Test Case 4: Unbalanced tree
  console.log("\nTest 4: Unbalanced tree");
  let root3 = new TreeNode(1);
  root3.left = new TreeNode(2);
  root3.left.left = new TreeNode(3);
  root3.left.left.left = new TreeNode(4);
  console.log(maxDepth(root3)); // Should return 4
}

// Run tests
test();
