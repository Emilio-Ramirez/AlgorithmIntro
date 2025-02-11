//144. Binary Tree Preorder Traversal

//Understanding
/*
 * Input: Root of a binary tree;
 * Output: Return [] of the postorder values
 * Insights:
 * We need to look for the smallest posible scenario that is when a root has no childs
 * And we also can find the leafs if we look for root nulls
 *
 *
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
 * @return {number[]}
 */
var preorderTraversal = function (root, result = []) {
  if (!root) return result;

  result.push(root.val);

  preorderTraversal(root.left, result);

  preorderTraversal(root.right, result);

  return result;
};

let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(preorderTraversal(root));
