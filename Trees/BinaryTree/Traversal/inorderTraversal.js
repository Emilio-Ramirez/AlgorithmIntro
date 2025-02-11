//#94 Binary Tree Inorder Traversal

//Undertanding

/*
 *Inorder Traversal:
 *  Visiting left, parent, right in that order.
 *
 *
 *Input: A tree structure
 *Output: The inorder traversal of the node values;
 *
 *Key Insights:
 * - We are comparing only 3 numbers
 * - We [1,n,2,3] = [1,3,2]
 *
 * -Look for leftmost
 * -Look for parent
 * -If parent has right look for left
 * -If no left in parent look for right and repeat
 *
 * We need to see the function as it will always be at the root
 * So if is left we call recursive
 * After left we store parent
 * After parent we make a recursive in right as a root
 *
 *
 * The rights are only parents without childtens
 *
 *
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root, result = []) {
  //Edge cases
  if (!root) return result;

  inorderTraversal(root.left, result);

  result.push(root.val);

  inorderTraversal(root.right, result);

  return result;
};

// Test cases for inorderTraversal function
function testInorderTraversal() {
  // Test Case 1: Tree with multiple levels
  console.log("Test 1: [2,1,3]");
  let root1 = new TreeNode(2);
  root1.left = new TreeNode(1);
  root1.right = new TreeNode(3);
  console.log(inorderTraversal(root1)); // Should return [1,2,3]

  // Test Case 2:
  console.log("\nTest 2: [1,null,2,3");
  let root2 = new TreeNode(1);
  root2.right = new TreeNode(2);
  root2.right.left = new TreeNode(3);
  console.log(inorderTraversal(root2)); // Should return [1,3,2]

  // Test Case 3: Empty tree
  console.log("\nTest 3: Empty tree");
  console.log(inorderTraversal(null)); // Should return []

  // Test Case 4: Single node
  console.log("\nTest 4: Single node");
  let root3 = new TreeNode(1);
  console.log(inorderTraversal(root3)); // Should return [1]
}

testInorderTraversal();
