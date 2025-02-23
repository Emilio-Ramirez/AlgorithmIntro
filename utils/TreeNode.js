export class TreeNode {
  constructor(val, left, right) {
    this.val = val ?? 0; // if val is null or undefined, use 0
    this.left = left ?? null;
    this.right = right ?? null; // if right is null or undefined, use null
  }
}
