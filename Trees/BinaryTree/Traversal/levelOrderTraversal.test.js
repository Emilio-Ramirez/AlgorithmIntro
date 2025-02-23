// levelOrderTraversal.test.js
import { describe, test, expect } from "vitest";
import { TreeNode } from "../../../utils/TreeNode.js";
import { levelOrder } from "./levelOrderTraversal.js";

describe("Level Order Traversal", () => {
  // Test case 1: One level Tree
  test("One level Tree", () => {
    let tree = new TreeNode(3);
    tree.left = new TreeNode(9);
    tree.right = new TreeNode(20);
    const result = levelOrder(tree);
    expect(result).toEqual([[3], [9, 20]]);
  });

  // Test case 2: Leetcode test
  test("Leetcode test 1", () => {
    let tree = new TreeNode(3);
    tree.left = new TreeNode(9);
    tree.right = new TreeNode(20);
    tree.right.left = new TreeNode(15);
    tree.right.right = new TreeNode(7);
    const result = levelOrder(tree);
    expect(result).toEqual([[3], [9, 20], [15, 7]]);
  });

  // Test case 3: Tree with one node
  test("Tree with one node", () => {
    let tree = new TreeNode(3);
    const result = levelOrder(tree);
    expect(result).toEqual([[3]]);
  });

  // Test case 4: Null tree
  test("Null tree", () => {
    let tree = null;
    const result = levelOrder(tree);
    expect(result).toEqual([]);
  });
});
