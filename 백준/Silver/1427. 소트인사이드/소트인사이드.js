let input = require('fs').readFileSync(0, "utf8").toString().trim()

let newArray = Array.from(input)

let answer = newArray.sort().reverse()

console.log(answer.map(Number).join(''))

