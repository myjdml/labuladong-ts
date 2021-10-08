/*
 * @Author: myjdml
 * @Date: 2021-10-01 18:55:30
 * @LastEditors: myjdml
 * @LastEditTime: 2021-10-06 21:19:58
 * @Description: 寻找单链表倒数第k个节点
 */

import { arrayToListNode, ListNode } from "./utils"

const findFromEnd = (head: ListNode, k: number): ListNode | null => {
  let p1: ListNode | null = head.next
  for (let i = 0; i < k; i++) {
    p1 = p1!.next;
  }
  let p2: ListNode | null = head.next
  while (p1 != null) {
    p1 = p1!.next
    p2 = p2!.next
  }
  return p2
}

const head: ListNode = arrayToListNode([1,2,3,4,5,6,7,8,9,10])

console.log(findFromEnd(head, 10))