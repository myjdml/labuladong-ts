/*
 * @Author: myjdml
 * @Date: 2021-09-28 00:27:04
 * @LastEditors: myjdml
 * @LastEditTime: 2021-10-04 16:08:50
 * @Description: 
 */

/**
 * @description: 链表数据结构
 * @param {*}
 * @return {*}
 */
export class ListNode {
  public val: number
  public next: ListNode | null = null

  constructor(x: number) {
    this.val = x;
  }
}

/**
 * @description: 
 * @param {ListNode} l
 * @return {*}
 */
export const logListNode = (l: ListNode) => {
  let currentListNode: ListNode | null = l;
  while (true) {
    if (currentListNode.next === null) {
      console.log(currentListNode.val, "=> null");
      break;
    }
    console.log(currentListNode.val, "=>");
    currentListNode = currentListNode.next
  }
}

export const arrayToListNode = (Lists: number[]): ListNode => {
  // const len: number = Lists.length
  const head: ListNode = new ListNode(-1)
  let p: ListNode = head
  Lists.forEach(item => {
    p.next = new ListNode(item)
    if (p.next != null) {
      p = p.next
    }
  })
  return head
}

export const text = () => {
  console.log(text);
}