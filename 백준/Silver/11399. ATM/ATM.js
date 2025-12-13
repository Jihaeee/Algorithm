let input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");

let N = Number(input[0]);
let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let sum = 0;      
let answer = 0;   

for (let i = 0; i < N; i++) {
    sum += arr[i];
    answer += sum;
}

console.log(answer);
