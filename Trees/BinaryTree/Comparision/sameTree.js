//100 Same Tree

//Understanding
/*
 * Input: Given two binary trees p and q
 * Output: Return if both are considered the same
 * Insights:
 * I am thinking of reading the two trees at the same time.
 * And comparing each time
 * So that way i can check the structure similarities and value similarities
 *
 */

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);
  return left && right;
};

let p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

let q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);

console.log(isSameTree(p, q));
let p1 = new TreeNode(1);
p1.left = new TreeNode(2);

let q1 = new TreeNode(1);
q1.right = new TreeNode(2);

console.log(isSameTree(p1, q1));
let p2 = new TreeNode(1);
p2.left = new TreeNode(2);
p2.right = new TreeNode(1);

let q2 = new TreeNode(1);
q2.left = new TreeNode(1);
q2.right = new TreeNode(2);

console.log(isSameTree(p2, q2));
