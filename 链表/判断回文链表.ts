/*
 * @Author: myjdml
 * @Date: 2021-10-07 16:09:29
 * @LastEditors: myjdml
 * @LastEditTime: 2021-10-08 19:16:55
 * @Description: 
 */

import { arrayToListNode, ListNode, logListNode } from "./utils";

// // 链表的后序遍历解法，核心双指针遍历
// const traverse = (head: ListNode | null) => {
//   if (head === null) {
//     return
//   }
//   console.log(head.val)
//   traverse(head.next)
//   // console.log(head.val);
// }

// const head = arrayToListNode([1,2,3,4,5]).next!

// traverse(head)

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

const palindromeList = (head: ListNode) => {
  // 找到中间节点
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  let head_copy: ListNode;
  let end_copy: ListNode; 
  while (fast != null && fast.next != null) {
    slow = slow!.next
    fast = fast.next.next
  }
  // console.log(slow, fast)
  // fast指针不指向null, 则为奇数节点，将slow节点向后移一位
  if (fast != null) {
    slow = slow!.next
    // 储存头尾指针以恢复链表
    head_copy = fast
    end_copy = slow!
    fast = fast.next
  }
  let left: ListNode | null = head
  let right: ListNode | null = reverse(slow!, fast!)
    // 储存头尾指针以恢复链表
    head_copy = right
    end_copy = slow!

  while (right != null) {
    if (left!.val != right.val) {
      // 返回前恢复链表
      reverse(head_copy!, end_copy!.next!)
      return false
    }
    left = left!.next
    right = right.next
  }

  // 返回前恢复链表
  reverse(head_copy!, end_copy!.next!)
  // console.log(head_copy!, end_copy!.next);
  return true
}

const head = arrayToListNode([1,2,3,4,3,2]).next!

console.log(palindromeList(head));
logListNode(head)



