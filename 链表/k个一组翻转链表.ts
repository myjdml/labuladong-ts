/*
 * @Author: myjdml
 * @Date: 2021-10-06 21:37:58
 * @LastEditors: myjdml
 * @LastEditTime: 2021-10-07 16:06:24
 * @Description: 
 */

import { arrayToListNode, ListNode, logListNode } from "./utils"

// 迭代，反转部分链表
const reverse = (a: ListNode, b: ListNode): ListNode => {
  let pre: ListNode | null = null
  let cur: ListNode | null = a
  let nxt: ListNode | null = a

  while (cur != b) {
    nxt = cur.next!
    cur.next = pre
    //前进
    pre = cur
    cur = nxt
  }

  return pre!
}

const reverseGroup = (head: ListNode | null, k: number): ListNode | null => {
  // head为空判断
  if (head === null) {
    return null
  }

  let a: ListNode = head
  let b: ListNode = head
  // 循环确定b的位置
  for (let i = 0; i < k; i++) {
    // 如果剩余节点不足k个，则直接返回剩余链表
    if (b === null) {
      return head
    }
    b = b.next!
  }
  // 反转前k个节点
  let newHead: ListNode = reverse(a, b)
  // 将反转后的链表与子链表进行拼接，并返回新的头结点
  a.next = reverseGroup(b, k)
  return newHead
}
// text
let head: ListNode = arrayToListNode([1,2,3,4,5,6,7]).next!

logListNode(reverseGroup(head, 7)!)
