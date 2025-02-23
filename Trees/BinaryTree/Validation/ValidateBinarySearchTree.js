//#89 Validate Binary Search Tree

//Understanding
/*
 * A valid BST is defined as follows:

   - The left subtree of a node contains only nodes with keys less than the node's key. 
   - The right subtree of a node contains only nodes with keys greater than the node's key.
   - Both the left and right subtrees must also be binary search trees.

 * Input: Given the root
 * Output: Return true if the tree is a valid BST, otherwise return false.
 * 
 * Insight: 
 * Root should be grater than left and smaller than right.
 * All values must be subtrees
 * So i should 
 *
 * Edge cases:
 * - If the tree is null
 * - If there is only one node
 * 
 * Validate Binary Search Tree testes:
 * - Test case 1: root = [2,1,3]
 * - Test case 2 : root = [5,1,4,null,null,3,6]
 * - Test case 3 : root = [4,1,5,null,null,3,4]
 * - Test case 4 : root = [null]
 * - Test case 5 : root = [1]
 */

//First iteration

/*
 *var isValidBST = function (root) {
 *  if (!root) return true;
 *
 *  if (root.left && root.left.val > root.val) return false;
 *  if (root.right && root.right.val < root.val) return false;
 *
 *  let left = isValidBST(root.left);
 *  let right = isValidBST(root.right);
 *
 *  return left && right;
 *};
 */

// Second Iteration

var isValidBST = function (root) {
  const validate = function (root, min, max) {
    if (!root) return true;

    if (root.val <= min || root.val >= max) return false;

    return (
      validate(root.left, min, root.val) && validate(root.right, root.val, max)
    );
  };

  return validate(root, -Infinity, Infinity);
};

export { isValidBST };
