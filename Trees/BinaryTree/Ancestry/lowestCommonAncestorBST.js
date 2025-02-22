// 235

//Understanding
/*
 * Input: A binary tree root and a node p and q.
 * Outpur: The lowestCommonAncestor of p and q.
 *
 * Insights:
 * The lowestCommonAncestor is the one that conects p and q.
 * It can be its own CommonAncestor itself.
 *
 * Thougth process;
 * A recursive process should do the work.
 * A recursion for left and right returning a boolean.
 * The cases will be those below:
 *  If right and left return true the lowestCommonAncestor is the parent of those (root).
 *  If root is a node and left or right is true the lowestCommonAncestor is the parent of those (root).
 *
 *  What should be the main return case, when root is p or q? or when left and right = q
 *  nither of those, the first will not search for ancestors below that
 *  and the later option will only find those right below
 *
 * First solution: 
  if (!root) return false;

  let left = lowestCommonAncestor(root.left);
  let right = lowestCommonAncestor(root.right);

  if (left && right) return root;
  if ((root === p || root === q) && (left || right)) {
    return root;
  }
  if (root === p || root === q) return true;
  return false;

 * We are looking for null root
 * We are going down 
 * We are looking first for left and right to be true
 * Then if root is q or p and if left or right is true
 * After that if root is q or p so return true. 
Since left and right are defined above it always go down
 * Then return false if any option is true.
 * 
 * Problem :It will get cycled on the if !root and the left and right declaration
 *
 *
 * Solution: 
 * So the main issue is that i was returning treue, it should return the root if found something or if the root found
 */

//Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;

  if (root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;

  return left ? left : right;
};

//Exporting function for tests
export { lowestCommonAncestor, TreeNode };
