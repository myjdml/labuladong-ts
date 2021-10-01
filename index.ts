import { MaxPriorityQueue, MinPriorityQueue } from "./utils/PriorityQueue";

/*
 * @Author: myjdml
 * @Date: 2021-09-06 17:30:43
 * @LastEditors: myjdml
 * @LastEditTime: 2021-10-01 18:22:18
 * @Description: 
 */
const querry = new MaxPriorityQueue(7);

querry.insert(4)
querry.insert(6)
querry.insert(34)
querry.print()

const min_querry = new MinPriorityQueue(7)
min_querry.insert(34)
min_querry.insert(6)
min_querry.insert(4)
min_querry.insert(3)
min_querry.insert(2)
min_querry.print()



