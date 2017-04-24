var arr = [1, 2, 3, 4, 5]

arr.pop() // [1,2,3,4]

arr.push(5, 4, 3, 2, 1)   // [1,2,3,4,5,4,3,2,1]

arr.pop()  // [1,2,3,4,5,4,3,2]

arr.reverse() //[ 2, 3, 4, 5, 4, 3, 2, 1 ]
arr.shift()  //[ 3, 4, 5, 4, 3, 2, 1 ]

arr.sort() // [ 1, 2, 3, 3, 4, 4, 5 ]

arr.splice(5, 1) // [ 1, 2, 3, 3, 4, 5 ]

arr.splice(1, 2, 7, 9) // [ 1, 7, 9, 3, 4, 5 ]

arr.unshift(100) //[ 100, 1, 7, 9, 3, 4, 5 ]

//  本身不变

var brr = [9, 8]

var crr = arr.concat(brr) // [ 100, 1, 7, 9, 3, 4, 5, 9, 8 ]
var d = 123
var drr = crr.concat(d) // // [ 100, 1, 7, 9, 3, 4, 5, 9, 8, 123 ]
var str = drr.join('')

var err = drr.slice(1, 3) // [1, 7] 提取第一个到第三个, 不包括第三个

var a = drr.indexOf(9) // 3 第一个

var b = drr.lastIndexOf(9) // 7 最后一个

// var newArray = arr.filter(callback[, thisArg])

var frr = drr.filter(function (num) {
  return num > 5
})  // [ 100, 7, 9, 9, 8, 123 ]

drr.forEach(function(n){
  console.log(n * n)
})

var bool = drr.every(function(ele, index, array){
  // console.log(array)
  return ele > 0
}) // true

var bool2 = drr.some(function(ele, index, array){
  // console.log(array)
  return ele > 100
}) // true

var grr = drr.map(function(ele){
  return ele * ele
}) // [ 10000, 1, 49, 81, 9, 16, 25, 81, 64, 15129 ]


var sum = drr.reduce(function(a,b){
  //  a是上次的结果，b则是本次传入的值
  return a + b;
}) // 累加结果 269

console.log(sum)

