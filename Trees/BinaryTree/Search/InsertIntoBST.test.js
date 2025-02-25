import { describe, test, expect } from "vitest";
import { TreeNode } from "./../../../utils/TreeNode.js";
import { insertIntoBST } from "./InsertIntoBST.js";

describe("Insert Into BST", () => {
  test("([4,2,7,1,3], 5) => [4,2,7,1,3,5] ", () => {
    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    const expected = new TreeNode(4);
    expected.left = new TreeNode(2);
    expected.right = new TreeNode(7);
    expected.left.left = new TreeNode(1);
    expected.left.right = new TreeNode(3);
    expected.right.left = new TreeNode(5); // Changed from right to left
    let result = insertIntoBST(root, 5);
    console.log(result);
    expect(result).toEqual(expected);
  });

  test("([40,20,60,10,30,50,70], 25) => [40,20,60,10,30,50,70,null,null,25]", () => {
    const root = new TreeNode(40);
    root.left = new TreeNode(20);
    root.right = new TreeNode(60);
    root.left.left = new TreeNode(10);
    root.left.right = new TreeNode(30);
    root.right.left = new TreeNode(50);
    root.right.right = new TreeNode(70);
    const expected = new TreeNode(40);
    expected.left = new TreeNode(20);
    expected.right = new TreeNode(60);
    expected.left.left = new TreeNode(10);
    expected.left.right = new TreeNode(30);
    expected.right.left = new TreeNode(50);
    expected.right.right = new TreeNode(70);
    expected.left.right.left = new TreeNode(25);
    expect(insertIntoBST(root, 25)).toEqual(expected);
  });

  test("([4,2,7,1,3,null,null,null,null,null,null], 5) => [4,2,7,1,3,5]", () => {
    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    const expected = new TreeNode(4);
    expected.left = new TreeNode(2);
    expected.right = new TreeNode(7);
    expected.left.left = new TreeNode(1);
    expected.left.right = new TreeNode(3);
    expected.right.left = new TreeNode(5); // Changed from right to left
    expect(insertIntoBST(root, 5)).toEqual(expected);
  });

  test("([], 5) => [5]", () => {
    let root;
    const expected = new TreeNode(5);
    expect(insertIntoBST(root, 5)).toEqual(expected);
  });
});
