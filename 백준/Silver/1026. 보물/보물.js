let input = require('fs').readFileSync(0,"utf8").toString().trim().split("\n").map(line => line.split(" ").map(Number))

const N = input[0][0]
const [A, B] = input.slice(1)
// A 최소 X B 최대 
A.sort((a,b) => a-b)
const sortedB = [...B].sort((a,b) => b-a)

let sum = 0;
for(let i=0; i<N;i++){
    sum += A[i] * sortedB[i]
}

console.log(sum)
