// lowestCommonAncestor.test.js
import { describe, test, expect } from "vitest";
import { lowestCommonAncestor, TreeNode } from "./lowestCommonAncestorBST.js";

describe("Lowest Common Ancestor", () => {
  // Test case 1: LCA of nodes in same subtree
  test("finds LCA of nodes in same subtree", () => {
    let tree = new TreeNode(5);
    tree.left = new TreeNode(3);
    tree.right = new TreeNode(7);
    tree.left.left = new TreeNode(2);
    tree.left.right = new TreeNode(4);
    const result = lowestCommonAncestor(tree, tree.left.left, tree.left.right);
    expect(result).toBe(tree.left); //LCA should be node with value 3
  });

  // Test case 2: LCA when one node is parent of the other
  test("finds LCA when one node is parent", () => {
    // Fixed the test description
    let tree = new TreeNode(5);
    tree.left = new TreeNode(3);
    tree.left.left = new TreeNode(2);
    const result = lowestCommonAncestor(tree, tree.left.left, tree.left);
    expect(result).toBe(tree.left); //LCA should be node with value 3
  });

  // Test case 3: LCA of nodes in different subtrees
  test("finds LCA of nodes in different subtrees", () => {
    // Fixed the test description
    let tree = new TreeNode(5);
    tree.left = new TreeNode(3);
    tree.right = new TreeNode(7);
    const result = lowestCommonAncestor(tree, tree.left, tree.right);
    expect(result).toBe(tree); //LCA should be node with value 5
  });

  // Edge cases
  test("returns null for empty tree", () => {
    expect(
      lowestCommonAncestor(null, new TreeNode(1), new TreeNode(2)),
    ).toBeNull();
  });

  test("handles node that is not in tree", () => {
    let tree = new TreeNode(1);
    const nodeInTree = tree;
    const nodeNotInTree = new TreeNode(2);
    const result = lowestCommonAncestor(tree, nodeInTree, nodeNotInTree);
    expect(result).toBe(nodeInTree);
  });
});
