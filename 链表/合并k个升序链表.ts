/*
 * @Author: myjdml
 * @Date: 2021-09-28 10:27:46
 * @LastEditors: myjdml
 * @LastEditTime: 2021-10-01 18:52:25
 * @Description: 
 */
import { MaxPriorityQueue, MinPriorityQueue } from "../utils/PriorityQueue";
import { logListNode, ListNode, arrayToListNode } from "./utils";

const mergeKLists = (Lists: number[][]): ListNode | null => {
  if (Lists.length === 0) {
    return null
  }
  // 将二维数组转换为链表数组
  const Lists_nodeList: ListNode[] = new Array(Lists.length)
  Lists.forEach((item, index) => {
    Lists_nodeList[index] = arrayToListNode(item)
  })
  console.log(Lists_nodeList);
  
  // 虚拟头结点
  const dummy: ListNode = new ListNode(-1)
  // 节点指针
  let p: ListNode | null = dummy
  let total_len: number = 0
  Lists.forEach((item) => {
    total_len += item.length
  })
  // 将所有元素填入链表
  const pq = new MinPriorityQueue(total_len)
  Lists_nodeList.forEach(item => {
    let p: ListNode | null = item.next
    while (p != null) {
      pq.insert(p.val)
      p = p.next
    }
  })
  pq.print()
  
  while (!pq.isEmpty()) {
    p.next = new ListNode(pq.delMin()!)
    p = p.next
    // pq.print()
  }
  
  // logListNode(dummy)
  
  return dummy
}

mergeKLists([[1,2,3], [3,4,5], [23,66,22,1]])

// const querry = new MaxPriorityQueue(8)
// querry.print()
// querry.insert(3)
// querry.insert(8)
// querry.insert(4)
// querry.insert(6)
// querry.insert(5)

// querry.print()
// querry.delMax()
// querry.print()
