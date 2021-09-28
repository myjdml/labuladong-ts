let aArr = [3,12,34]
let bArr = [1,32,111,1234]

const mergeFun = (aArr: number[], bArr: number[]) => {
  const targetLength = aArr.length + bArr.length
  let pointA = aArr.length - 1
  let pointB = bArr.length -1
  let targetPoint = targetLength -1
  while (pointA+1 || pointB+1) {
    console.log(pointA,pointB)
    if (aArr[pointA] > bArr[pointB]) {
      aArr[targetPoint] = aArr[pointA]
      if (pointA>-1) pointA--
    } else {
      aArr[targetPoint] = bArr[pointB]
      if (pointB>-1) pointB--
    }
    targetPoint--
  }
  return aArr
}

console.log(mergeFun(aArr, bArr));

