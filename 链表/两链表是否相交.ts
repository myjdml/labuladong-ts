/*
 * @Author: myjdml
 * @Date: 2021-10-03 17:21:10
 * @LastEditors: myjdml
 * @LastEditTime: 2021-10-04 14:58:20
 * @Description: 判断两链表是否相交。使用双指针解法的核心思想就是要让两个指针同时到达相交节点。具体解法如下
 */

import { ListNode } from "./utils";

const getIntersectionNode = (headA: ListNode, headB: ListNode): ListNode | null => {
  // p1指向A链表的头节点 p2指向B链表的头节点
  let p1: ListNode | null = headA.next
  let p2: ListNode | null = headB.next

  while (p1 != p2) {
    // p1向前走一步，如果走完A链表，指向B链表的头节点
    if (p1 === null) {
      p1 = headB.next
    } else {
      p1 = p1.next
    }
    // p1向前走一步，如果走完A链表，指向B链表的头节点
    if (p2 === null) {
      p2 = headA.next
    } else {
      p2 = p2.next
    }
  }
  return p1
}

let a1 = new ListNode(1)
let a2 = new ListNode(2)
let a3 = new ListNode(3)
let a4 = new ListNode(4)
let b1 = new ListNode(11)
let b2 = new ListNode(12)
let b3 = new ListNode(13)
let c1 = new ListNode(21)
let c2 = new ListNode(22)
let c3 = new ListNode(23)

a1.next = a2
a2.next = a3
a3.next = a4

b1.next = b2
b2.next = b3

c1.next = c2
c2.next = c3

a4.next = c1
b3.next = c1

let headA = new ListNode(-1)
let headB = new ListNode(-1)
headA.next = a1
headB.next = b1


console.log(getIntersectionNode(headA, headB));
