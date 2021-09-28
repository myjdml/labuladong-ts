// 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
const nums = [2, 7, 11, 15], target = 9

const twoSum = (nums: number[], target: number) => {
  let diffs = new Map()
  const len = nums.length
  for (let index = 0; index < len; index++) {
    if  (diffs.has(target - nums[index])) {
      return [diffs.get(target - nums[index]), index]
    }
    diffs.set(nums[index], index)
  }
}

console.log(twoSum(nums, target));
