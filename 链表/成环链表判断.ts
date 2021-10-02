
import { arrayToListNode, ListNode } from "./utils";

const hasCycle = (head: ListNode) => {
  let slow = head.next
  let fast = head.next

  while (fast != null && fast.next != null) {
    slow = slow!.next
    fast = fast!.next.next
    if (slow === fast) {
      return true
    }
  }
  return false
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node1

console.log(hasCycle(node1));