// #701. Insert into a Binary Search Tree

//Understanding
/*
 * Input: A root and a value to insert
 * Outpur: The root with the new value insertedo
 *
 * Insights:
 * There are to sections of these code:
 * Finding the right place
 * And the adjustment of the tree
 *
 * Finding is simple, you will go searching all roots.
 * If val < root.val and val > root.left.val there it should go
 * if val > root.val and val < root.right.val theri it should go
 *
 * Reordering
 * After finding the right value we should send the root we need to replace with the val;
 * Then the actual function will move all, first it would verif
 *
 * Insted of checking right and left we should only check root in
 order to decide the side we will folow
 * For the reordering after replacing the value it will leave out the prev value
 * We will call the subtree with the left value so it do that another time to find the place;
 *
 * Tests:
 * insertIntoBST([4,2,7,1,3], 5) => [4,2,7,1,3,5]
 * insertIntoBST([40,20,60,10,30,50,70], 25) => [40,20,60,10,30,50,70,null,null,25]
 * insertIntoBSt([4,2,7,1,3,null,null,null,null,null,null], 5) => [4,2,7,1,3,5]
 * inseeIntoBST([], 5) => [5]
 */

import { TreeNode } from "../../../utils/TreeNode";
var insertIntoBST = function (root, val) {
  // If no root or if it reaches the bottom
  if (!root) {
    return new TreeNode(val);
  }

  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
};

export { insertIntoBST };
