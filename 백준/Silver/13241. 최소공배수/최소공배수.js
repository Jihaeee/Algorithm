let input = require('fs').readFileSync(0, "utf8").toString().trim().split(" ")
const [A, B] = input.map(Number)

const maxNum = Math.max(A, B)
const minNum = Math.min(A,B)

let result = maxNum;

while(result%minNum !== 0){
    result += maxNum;
} 
console.log(result)

