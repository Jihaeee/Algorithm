let input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n")

const K = Number(input[0])

let arr = input.slice(1).map(Number)
let result = [];
for (let i=0; i< K; i++){
    if (arr[i] === 0){
        result.pop()
    }
    else{
        result.push(arr[i])
    }
}

let sum = 0;
for (let value of result) {
  sum += value;
}

console.log(sum)
