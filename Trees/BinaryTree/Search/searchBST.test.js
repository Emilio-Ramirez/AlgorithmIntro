import { describe, test, expect } from "vitest";
import { TreeNode } from "./../../../utils/TreeNode.js";
import { searchBST } from "./searchBST.js";

describe("Search Binart Tree Search", () => {
  test("searchBST([4,2,7,1,3], 2) => [2,1,3]", () => {
    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);

    expect(searchBST(root, 2)).toEqual(root.left);
  });

  test("searchBST([4,2,7,1,3], 5) => []", () => {
    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);

    expect(searchBST(root, 5)).toEqual(null);
  });

  test("searchBST([], 5) => []", () => {
    let root;
    expect(searchBST(root, 5)).toEqual(null);
  });

  test("searchBST([1], 1) => [1]", () => {
    const root = new TreeNode(1);

    expect(searchBST(root, 1)).toEqual(root);
  });
});
