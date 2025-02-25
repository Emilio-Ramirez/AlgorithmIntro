// #700 SearchBST

// Understanding
/*
 * Input: Given a root of a binary search tree and a value
 * Output: Return the subtree whose root node is equal to the given value
 *
 * Insights:
 * Going logarithm in a search would be the best
 *
 * Testes:
 * searchBST([4,2,7,1,3], 2) => [2,1,3]
 * searchBST([4,2,7,1,3], 5) => []
 * searchBST([], 5) => []
 * searchBST([1], 1) => [1]
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) return null;

  if (root.val === val) return root;

  if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};

export { searchBST };

//Conclusions

/*
 * Since it is a BST
 * The left is smaller than the root
 * The right is greater than the root
 *
 * So it will search for the range of the value
 * And if it reach the end of the tree, it will return null
 */
