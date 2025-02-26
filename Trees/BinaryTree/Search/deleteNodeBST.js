// 450. Delete Node in a BST

// Understanding

/*
 * Input: Given a root node and a key (number)
 *
 * Output: Retrurn the root node reference of the BST
 *
 * Insights:
 * We should check for the tree node.
 * we should replce the node
 * And call the recursion for replace exercicse where you call the recursive for replacing the value again.
 * But here is diferent.
 * So finding the key is simple, but the problem is how to delete it and orther the subtree.
 * I have some curse of action thought:
 * Remove the root.
 * If left has more below
 * If right has more below
 * but that htinking will not be optimal, the best wey of thinking is doing all within root reach
 *
 * First lets find teh posibles scenarios when finding the node:
 *  - Node has no children
 *    Returning null to recursion
 *    Since the recursion is calling the function to define root.child it will be deleted
 *    And then retuning root so it stays the same
 *  - Node has one child
 *    We should return the root.child
 *    And will be deleted keeping the child
 *  - Node has two children
 *    Search for the largest number of left side. (all the wey to the right)
 *    copy the value from the found node to the want to delete node
 *    Delete the replacment node (rightmost node)
 *
 *
 * Base case:
 * !root return null
 *
 *
 *
 *
 * Tests:
 * deleteNode([5, 3, 6, 2, 4, null, 7], 3) => [5, 4, 6, 2, null, null, 7]
 * deleteNode([5, 3, 6, 2, 4, null, 7], 0) => [5, 3, 6, 2, 4, null, 7]
 * deleteNode([],0) => []
 */

// First lets work the search and return the complete root once found
/*
 *var deleteNode = function (root, key) {
 *  if (!root) return null;
 *  if (root.val === key) return root;
 *
 *  root.left = deleteNode(root.left, key);
 *  root.right =deleteNode(root.right, key);
 *
 *  return root;
 *};
 */

// Then lets manage the two cases
var deleteNode = function (root, key) {
  if (!root) return null;

  var removeNode = function (node) {
    // Search the rightmost val in the left side
    if (!node) return null;

    // Root = rightmost
    if (!node.right) {
      // Rightmost has left child
      // Replace the key for the node
      root.val = node.val;

      //If has left childrent
      if (node.left) {
        return node.left;
      } else {
        return null;
      }
    }
    node.right = removeNode(node.right);
    return node;
  };

  // If key found
  if (root.val === key) {
    // No childs case
    if (!root.left && !root.right) {
      return null;
    }

    //One child case
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // Two childs case
    // Search the largest value of left
    root.left = removeNode(root.left);
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }

  return root;
};

export { deleteNode };
