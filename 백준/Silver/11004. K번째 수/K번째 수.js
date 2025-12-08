let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n")

const [N, K] = input[0].split(" ").map(Number) // 5, 2
const arr = input[1].split(" ").map(Number) // [ 4, 1, 2, 3, 5 ]

let sortedArr = arr.sort((a, b) => a - b)

console.log(sortedArr[K-1])