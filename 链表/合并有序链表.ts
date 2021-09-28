import { logListNode, ListNode, arrayToListNode } from "./utils";

const [l1_arr, l2_arr] = [[12,23,35,67], [34,45,56,67,78,89]]
const l1: ListNode = arrayToListNode(l1_arr)
const l2: ListNode = arrayToListNode(l2_arr)

const mergeTwoLists = (l1: ListNode, l2: ListNode): ListNode => {
  const dummy: ListNode = new ListNode(-1)
  let p = dummy
  let p1: ListNode | null = l1.next
  let p2: ListNode | null = l2.next

  while (p1 != null && p2 != null) {
    if (p1.val > p2.val) {
      p.next = p2
      p2 = p2.next
    } else {
      p.next = p1
      p1 = p1.next
    }
    p = p.next
  }

  if (p1 != null) {
    p.next = p1
  }
  if (p2 !== null) {
    p.next = p2
  }
  return dummy
}



logListNode(mergeTwoLists(l1, l2))
