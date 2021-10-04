/*
 * @Author: myjdml
 * @Date: 2021-10-03 15:39:54
 * @LastEditors: myjdml
 * @LastEditTime: 2021-10-03 15:55:05
 * @Description: 
 */

import { arrayToListNode, ListNode } from "./utils";

const detectCycle = (head: ListNode): ListNode | null => {
  let fast: ListNode | null = head.next
  let slow: ListNode | null = head.next

  while (fast != null && fast.next != null) {
    fast = fast!.next.next
    slow = slow!.next
    if (fast === slow) {
      break
    }
  }
  // 如果
  if (fast == null || fast.next == null) {
    return null
  }

  //
  slow = head.next
  while (slow != fast) {
    fast = fast!.next
    slow = slow!.next
    
  }
  return slow
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node1

const head: ListNode = arrayToListNode([11,12,13])
head!.next!.next!.next!.next = node1

console.log(detectCycle(head));

