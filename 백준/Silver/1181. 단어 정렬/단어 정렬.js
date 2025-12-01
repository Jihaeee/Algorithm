let input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n")

// 1. 중복 제거
let array = input.slice(1)
let newArr = [...new Set(array)]
let sortArr = newArr.sort()
let answer = sortArr.sort((a, b) => a.length - b.length)

for(let value of answer) {
    console.log(value)
}
