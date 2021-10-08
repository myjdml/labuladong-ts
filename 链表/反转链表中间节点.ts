/*
 * @Author: myjdml
 * @Date: 2021-10-04 20:31:32
 * @LastEditors: myjdml
 * @LastEditTime: 2021-10-06 20:27:08
 * @Description: 反转链表前n个节点，此算法没有虚拟头结点 head代表链表的第一个元素
 */

import { arrayToListNode, ListNode, logListNode } from "./utils";

// 记录后驱节点
let successor: ListNode | null = null

const reverseN = (head: ListNode, n: number): ListNode => {
  if (n === 1) {
    successor = head.next
    return head
  }
  
  const last: ListNode = reverseN(head.next!, n - 1)
  // 将下一个节点指向自身，自身指向后驱节点
  head.next!.next = head
  head.next = successor
  // 返回n=1是head指向的节点，也就是最终的头节点
  return last
}

const reverseBetween = (head: ListNode, m: number, n: number) => {
  if (m === 1) {
    return reverseN(head, n)
  }
  // 如果m不是从表头开始的话，把索引同一向后移一位，递归进行，这样从m开始将后面的部分链表进行前n位反转后再和前面的链表拼接到一起
  head.next = reverseBetween(head.next!, m - 1, n - 1)
  return head
}



const head = arrayToListNode([1,2,3,4,5]).next!
// text
// logListNode(reverseN(head, 3))
logListNode(reverseBetween(head, 2, 4)!)
