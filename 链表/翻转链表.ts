/*
 * @Author: myjdml
 * @Date: 2021-09-25 21:32:15
 * @LastEditors: myjdml
 * @LastEditTime: 2021-10-04 20:29:47
 * @Description: 翻转链表，此算法没有虚拟头结点 head代表链表的第一个元素
 */
import { getHeapSnapshot } from "v8";
import { text, ListNode, arrayToListNode, logListNode } from "./utils";

// 迭代器版本
// const reverse = (head: ListNode): ListNode => {
//   let prev: ListNode | null = null
//   let curr: ListNode | null = head
//   // 循环，curr不指向0的话就将prev和curr都向后移一位
//   while (curr != null) {
//     let nxt: ListNode | null = curr.next
//     curr.next = prev
//     // 指针前进
//     prev = curr
//     curr = nxt
//     // console.log(prev);
//   }
//   return prev!
// }

// 递归版本
const reverse = (head: ListNode) => {
  // 如果是最后一个节点，返回节点本身
  if (head.next === null) {
    return head
  }
  // 递归运算
  let last: ListNode = reverse(head.next)
  // 每一次递归，让原链表的下一个节点指向自己，自己指向空对象
  head.next.next = head
  head.next = null
  return last
}



const a: ListNode = arrayToListNode([1,2,3,4,5,6]).next!
const reverse_a = reverse(a)

console.log(reverse_a);
logListNode(reverse_a)
// console.log(reverse(a));
