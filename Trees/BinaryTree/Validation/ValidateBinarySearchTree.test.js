import { describe, test, expect } from "vitest";
import { TreeNode } from "../../../utils/TreeNode.js";
import { isValidBST } from "./ValidateBinarySearchTree.js";

describe("Validate Binary Search Tree", () => {
  // - Test case 1: root = [2,1,3]
  test("Test case 1: root = [2,1,3]", () => {
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    expect(isValidBST(root)).toBe(true);
  });

  // - Test case 2 : root = [5,1,4,null,null,3,6]
  test("Test case 2 : root = [5,1,4,null,null,3,6]", () => {
    const root = new TreeNode(
      5,
      new TreeNode(1),
      new TreeNode(4, new TreeNode(3), new TreeNode(6)),
    );
    expect(isValidBST(root)).toBe(false);
  });

  // - Test case 3 : root = [4,1,5,null,null,3,4]
  test("Test case 3 : root = [4,1,5,null,null,3,4]", () => {
    const root = new TreeNode(
      4,
      new TreeNode(1),
      new TreeNode(5, new TreeNode(3), new TreeNode(4)),
    );
    expect(isValidBST(root)).toBe(false);
  });

  // - Test case 4 : root = [null]
  test("Test case 4 : root = [null]", () => {
    const root = null;
    expect(isValidBST(root)).toBe(true);
  });

  // - Test case 5 : root = [1]
  test("Test case 5 : root = [1]", () => {
    const root = new TreeNode(1);
    expect(isValidBST(root)).toBe(true);
  });

  // - Test case 6: root = [5,4,6,null,null,3,7]
  test("Test case 6: root = [5,4,6,null,null,3,7]", () => {
    const root = new TreeNode(
      5,
      new TreeNode(4),
      new TreeNode(6, new TreeNode(3), new TreeNode(7)),
    );
    expect(isValidBST(root)).toBe(false);
  });
});
