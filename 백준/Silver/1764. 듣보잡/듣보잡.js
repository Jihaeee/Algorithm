const fs = require('fs')
const input  = fs
    .readFileSync(0, "utf8")
    .toString()
    .trim()
    .split("\n")

const [N, M] = input[0].split(" ").map(Number)

const unheard = input.slice(1, N+1) // 듣
const unseen = new Set(input.slice(1+N, N+M+2)) // 보

let result = [];

for (let value of unheard){
    if (unseen.has(value)) {
        result.push(value)
    }
}


console.log(result.length)
console.log(result.sort().join("\n"))


