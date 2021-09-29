/*
 * @Author: myjdml
 * @Date: 2021-09-28 10:27:46
 * @LastEditors: myjdml
 * @LastEditTime: 2021-09-30 01:52:53
 * @Description: 
 */
import { MaxPriorityQueue } from "../utils/PriorityQueue";
import { logListNode, ListNode, arrayToListNode } from "./utils";

const mergeKLists = (Lists: number[][]): ListNode | null => {
  if (Lists.length === 0) {
    return null
  }
  const dummy: ListNode = new ListNode(-1)
  let p: ListNode = dummy

  return dummy
}

const querry = new MaxPriorityQueue(8)
querry.print()
querry.insert(3)
querry.insert(8)
querry.insert(4)
querry.insert(6)
querry.insert(5)

querry.print()
querry.delMax()
querry.print()
