import { logListNode, ListNode, arrayToListNode } from "./utils";

const mergeKLists = (Lists: number[][]): ListNode | null => {
  if (Lists.length === 0) {
    return null
  }
  const dummy: ListNode = new ListNode(-1)
  let p: ListNode = dummy

  return dummy
}