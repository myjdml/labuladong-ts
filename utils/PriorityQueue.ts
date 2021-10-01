/*
 * @Author: myjdml
 * @Date: 2021-09-28 11:38:48
 * @LastEditors: myjdml
 * @LastEditTime: 2021-10-01 18:21:42
 * @Description: 
 */


// 优先队列的实现
class PriorityQueue {
  // 存储元素的数组
  protected pq : (number | null)[]
  // 当前Priority Queue 中元素的个数
  protected N: number = 0

  constructor(cap: number) {
    // 因为索引0不适用，所以创建的时候会多创建一个空间
    this.pq = new Array(cap + 1).fill(null)
  }

  /**
   * @description: 判断队列是否为空
   * @param {*}
   * @return {*}
   */
  public isEmpty = (): any => {
    if (this.N <= 0) {
      return true
    } else {
      return false
    }
  }

  /**
   * @description: 交换两个数组的元素
   * @param {number} i
   * @param {number} j
   * @return {*}
   */
  protected exch = (i: number, j: number): any => {
    const temp: number | null = this.pq[i]
    this.pq[i] = this.pq[j]
    this.pq[j] = temp
  }

  /**
   * @description: 打印最大堆
   * @param {*}
   * @return {*}
   */
  public print = (): any => {
    console.log(this.pq);
  }

  protected parent = (root: number): number => {
    return Math.floor(root / 2)
  }

  protected left = (root: number): number => {
    return root * 2
  }

  protected right = (root: number): number => {
    return root * 2 + 1
  }
}
// 最大堆
export class MaxPriorityQueue extends PriorityQueue {
  constructor(cap: number) {
    super(cap)
  }

  /**
   * @description: 返回队列中的最大元素
   * @param {*} number
   * @return {*}
   */
  public max = (): number | null => {
    return this.pq[1]
  }

  /**
   * @description: 插入元素
   * @param {number} e
   * @return {*}
   */
  public insert = (e: number): any => {
    this.N++
    // 现将元素添加到最后
    this.pq[this.N] = e
    this.swim(this.N)
  }

  /**
   * @description: 删除并返回队列中最大的元素
   * @param {*} number
   * @return {*}
   */
  public delMax = (): number | null => {
    let max = this.pq[1]
    this.exch(1, this.N)
    this.pq[this.N] = null
    this.N--
    // 将调上来的元素下沉到正确的位置
    this.sink(1)
    return max
  }

  /**
   * @description: 上浮第k个元素以维护最大堆的特性
   * @param {number} k
   * @return {*}
   */
  private swim = (k: number): any => {
    // 最高上浮到堆顶
    while (k > 1 && this.less(this.parent(k), k)) {
      this.exch(this.parent(k), k)
      k = this.parent(k)
    }
  }

  /**
   * @description: 下沉第k个元素以维护最大堆的特性
   * @param {number} k
   * @return {*}
   */
  private sink = (k: number): any => {
    // 最低沉到堆底
    while (this.left(k) <= this.N) {
      // 默认假设左边的节点比较大
      let older: number = this.left(k)
      if (this.right(k) <= this.N && this.less(older, this.right(k))) {
        older = this.right(k)
      }
      // 若节点k比最大的孩子还大，就不必下沉了
      if (this.less(older, k)) {
        break
      }
      // 交换位置
      this.exch(k, older)
      k = older
    }
  }

  /**
   * @description: 对比p[i]是否比p[j]小
   * @param {number} i
   * @param {number} j
   * @return {*}
   */
  private less = (i: number, j: number): boolean => {
    return this.pq[i]! < this.pq[j]!
  }
}

// 最小堆
export class MinPriorityQueue extends PriorityQueue {
  constructor(cap: number) {
    super(cap)
  }

  /**
   * @description: 返回队列中的最小元素
   * @param {*} number
   * @return {*}
   */
  public min = (): number | null => {
    return this.pq[1]
  }

  /**
   * @description: 插入元素
   * @param {number} e
   * @return {*}
   */
  public insert = (e: number): any => {
    this.N++
    // 现将元素添加到最后
    this.pq[this.N] = e
    this.swim(this.N)
  }

  /**
   * @description: 删除并返回队列中最大的元素
   * @param {*} number
   * @return {*}
   */
  public delMin = (): number | null => {
    let min = this.pq[1]
    this.exch(1, this.N)
    this.pq[this.N] = null
    this.N--
    // 将调上来的元素下沉到正确的位置
    this.sink(1)
    return min
  }

  /**
   * @description: 上浮第k个元素以维护最小堆的特性
   * @param {number} k
   * @return {*}
   */
  private swim = (k: number): any => {
    // 最高上浮到堆顶
    while (k > 1 && this.more(this.parent(k), k)) {
      this.exch(this.parent(k), k)
      k = this.parent(k)
    }
  }

  /**
   * @description: 下沉第k个元素以维护最小堆的特性
   * @param {number} k
   * @return {*}
   */
  private sink = (k: number): any => {
    // 最低沉到堆底
    while (this.left(k) <= this.N) {
      // 默认假设左边的节点比较小
      let older: number = this.left(k)
      if (this.right(k) <= this.N && this.more(older, this.right(k))) {
        older = this.right(k)
      }
      // 若节点k比最小的孩子还小，就不必下沉了
      if (this.more(older, k)) {
        break
      }
      // 交换位置
      this.exch(k, older)
      k = older
    }
  }

  /**
   * @description: 对比p[i]是否比p[j]小
   * @param {number} i
   * @param {number} j
   * @return {*}
   */
  private more = (i: number, j: number): boolean => {
    return this.pq[i]! > this.pq[j]!
  }
}

