import { describe, test, expect } from "vitest";
import { TreeNode } from "./../../../utils/TreeNode.js";
import { deleteNode } from "./deleteNodeBST.js";

describe("Delete Node in a BST", () => {
  test("deleteNode([5, 3, 6, 2, 4, null, 7], 3) => [5, 4, 6, 2, null, null, 7]", () => {
    // Create input tree
    const root = new TreeNode(5);
    root.left = new TreeNode(3);
    root.right = new TreeNode(6);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(4);
    root.right.right = new TreeNode(7);

    // Create expected output tree
    const expected = new TreeNode(5);
    expected.left = new TreeNode(2);
    expected.right = new TreeNode(6);
    expected.left.right = new TreeNode(4);
    expected.right.right = new TreeNode(7);

    let result = deleteNode(root, 3);
    expect(result).toEqual(expected);
  });

  test("deleteNode([5, 3, 6, 2, 4, null, 7], 0) => [5, 3, 6, 2, 4, null, 7]", () => {
    // Create input tree
    const root = new TreeNode(5);
    root.left = new TreeNode(3);
    root.right = new TreeNode(6);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(4);
    root.right.right = new TreeNode(7);

    // Expected output is the same tree since 0 is not in the tree
    const expected = new TreeNode(5);
    expected.left = new TreeNode(3);
    expected.right = new TreeNode(6);
    expected.left.left = new TreeNode(2);
    expected.left.right = new TreeNode(4);
    expected.right.right = new TreeNode(7);

    expect(deleteNode(root, 0)).toEqual(expected);
  });

  test("deleteNode([],0) => []", () => {
    expect(deleteNode(null, 0)).toEqual(null);
  });
});
