// Helper function to create linked list from array
function createLinkedList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to print linked list
function printList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Test cases
const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
}
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;

  const dummy = new ListNode(0);
  let current = dummy;

  while (head1 && head2) {
    if (head1.val <= head2.val) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next;
  }

  current.next = head1 || head2;
  return dummy.next;

}



console.log(mergeTwoLists(list1, list2))
