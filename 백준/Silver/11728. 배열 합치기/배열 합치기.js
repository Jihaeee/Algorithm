let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n").map(line => line.split(" ").map(Number))

const [N, M] = input[0]

let aArr = input[1]
let bArr = input[2]

let newArr = [];

aArr.forEach(number => newArr.push(number))
bArr.forEach(number => newArr.push(number))


let result = newArr.sort((a, b) => a - b)
console.log(result.join(" "))

