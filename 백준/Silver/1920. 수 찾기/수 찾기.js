let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n")

const N = Number(input[0])
const M = Number(input[2])

const Aarr = input[1].split(" ").map(Number)
const Barr = input[3].split(" ").map(Number)

const Aset = new Set(Aarr)
let result = []
for(let value of Barr){
    if (Aset.has(value)){
        result.push(1)
    } else result.push(0)
}

console.log(result.join("\n"))
