/*
 * @Author: myjdml
 * @Date: 2021-10-01 20:32:00
 * @LastEditors: myjdml
 * @LastEditTime: 2021-10-01 21:12:05
 * @Description: 找单链表的中点, 中点有两个的时候，此算法返回的是靠右的那个中点
 */
// 核心思想，快慢指针

import { arrayToListNode, ListNode } from "./utils";

const middleNode = (head: ListNode) => {
  let slow: ListNode | null = head.next
  let fast: ListNode | null = head.next
  // 快指针走到末尾时停止
  while (fast != null && fast.next != null) {
    slow = slow!.next
    fast = fast!.next.next
  }
  // 慢指针指向中点
  return slow
}

const head = arrayToListNode([1,2,3,4,5,6,7,8,9,10])

console.log(middleNode(head));

