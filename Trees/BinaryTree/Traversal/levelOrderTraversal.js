//102 : Binary Tree Level Order Traversal

//Understanding
/*
 * Input: The root of a binary tree.
 *
 * Output: An array of the values of the traversal in levels.
 *
 * Key insights: It is basicly doing traversal but sending the level so it will add to arr[level]
 *
 * Procces :
 * First i will do a traversal order.
 * I will do the base case !root.
 *
 * Edge Cases:
 * Tree only has one level.
 * Root null
 * Root empty
 */

var levelOrder = function (root) {
  if (!root) return []; // Because if it enters traversal it will return a array with an array, not []
  const result = [];

  var traversal = function (root, level = 0) {
    if (!root) return;

    if (!result[level]) {
      result[level] = [];
    }

    traversal(root.left, level + 1);

    result[level].push(root.val);

    traversal(root.right, level + 1);
  };

  traversal(root);

  return result;
};

// It could be done with a BFS approach with a queue;

export { levelOrder };
