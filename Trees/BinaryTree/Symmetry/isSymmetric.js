//101. Symmetric Tree

//Understanding
/*
 * Input: Given a tree root
 * Output: Return true or false if the tree is a mirror of itself
 * Insights:
 * First lest cherck when does it should return true:
 * When left and right are the same
 * The problem I see is when a tree of 4 levels, seems that is the same principle.
 *
 * So we are using recursion to check the left and the right be the same
 * The problem is that when there is !root, I return null so the comparision need to check that;
 *
 * I will use the base case for checking the childs, insted of checking the root
 *
 * So this is the step process
 * First chech if both sides are null and return true. Base case
 * If not null it check if one is null and return false. Structure
 * Then if sides have diferents values it returns false. Values
 *
 * If it pass all of that mean that left and right are mirror. So it starts to go down
 *
 * It stores the bool of each side
 * And bubble up if one of the side is false
 *
 *
 * Seem that I missed the second level
 *
 * Second round:
 * Since i need to compare root.left.right with root.right .left i would need a helper function
 *
 * I need to make it compare the left and right
 * Then go into the
 * (left, right)
 *  left   right
 *
 * (left.left , right,right) and (left.right , right.left)
 *      left      right               left        right
 *
 *
 * (left.left.left , right,right.right) , (left.left.right , right,right.left)
 * (left.right.left , right.left.right) , (left.right.right , right.left.left)
 *       Left             right                right               left
 *
 * (left.left.left.left , right,right.right.right) , (left.left.left.right , right,right.right.left)
 * (left.left.right.left , right,right.left.right) , (left.left.right.right , right,right.left.left)
 * (left.right.left.left , right.left.right.right) , (left.right.left.right , right.left.right.left)
 * (left.right.right.left , right.left.left.right) , (left.right.right.right , right.left.left.left)
 *
 *       Left                   right                       right                   left
 *
 *
 * So the formula should be : For each new comparasion check left right and right left
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
var isSymmetric = function (root) {
  const isMirror = function (leftNode, rightNode) {
    if (!leftNode && !rightNode) return true;
    if (!leftNode || !rightNode) return false;
    if (leftNode.val !== rightNode.val) return false;
    let leftMirror = isMirror(leftNode.right, rightNode.left);
    let rightMirror = isMirror(leftNode.left, rightNode.right);
    return leftMirror && rightMirror;
  };
  let result = isMirror(root.left, root.right);
  return result;
};

let root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);

root.right = new TreeNode(2);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root));

let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.right = new TreeNode(3);
root1.right = new TreeNode(2);
root1.right.right = new TreeNode(3);

console.log(isSymmetric(root1));
